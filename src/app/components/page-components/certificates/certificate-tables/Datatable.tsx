import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import certificate_3rd from "../../../utilities/certificate_3rd";
import certificate_ISO from "../../../utilities/certificate_Iso";
import certificate_others from '../../../utilities/certificate_others';
import Image from 'next/image';
import DragFile from '../../onboarding-questionaires/questionaire-content/drag-and-drop/Dragfile';
import certificate_datas from '../../../utilities/certificate_data';
import Select from "react-select";

const DataTable = () => {
  const [certificates, setcertificates] = useState<any>([]);
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [certificate_data, setcertificate_data] = useState([...certificate_ISO,...certificate_3rd,...certificate_others]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [selectedCertificate, setselectedCertificate] = useState<any>(null);

  const handleCardClick = () => {
    setselectedCertificate(1);
  };

  const closePopup = () => {
    setselectedCertificate(null);
  };


  const itemsPerPage = 10;

  const filteredData = useMemo(() => {
    return certificate_data.filter(item =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
  }, [certificate_data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a:any, b:any) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (column:any) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  const [file, setFile] = useState<any>(null);
  const onFileChange = (files: any) => {
    console.log(files);
    setFile(files);
  };

  return (
    <div className="Tablecontainer">
    <div className={styles.dataTableContainer}>
      <div className={styles.dataTableHeader}>
      <h3>All Certificates</h3>
      <div>
      <button onClick={()=>{handleCardClick()}} className={styles.uploadbtn}>Upload <span>+</span></button>
      <input
        type="text"
        placeholder="Search by certificate name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      </div>
      </div>
      <table className={styles.dataTable}>
        <thead className={styles.theadUtility}>
          <tr>
            <th>Icon</th>
            <th>Certificate Name</th>
            <th onClick={() => handleSort('eScore')} className={styles.sortable}>
              E {sortColumn === 'eScore' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('sScore')} className={styles.sortable}>
              S {sortColumn === 'sScore' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('gScore')} className={styles.sortable}>
              G {sortColumn === 'gScore' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('Price')} className={styles.sortable}>
              Price {sortColumn === 'Price' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item:any, index:any) => (
            <tr key={index} className={styles.tableRows}>
              <td><Image src={"https://cdn-icons-png.freepik.com/512/4308/4308745.png"} width={50} height={50} alt='none'/></td>
              <td><a href={item.Website} target="_blank" rel="noopener noreferrer" className={styles.utilityTableLinks}>{item.Name}</a></td>
              <td>{item.eScore}</td>
              <td>{item.sScore}</td>
              <td>{item.gScore}</td>
              <td>{item.Price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
        <span>{currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
           {">"}
        </button>
      </div>
    </div>

    {selectedCertificate && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
          <div className={styles.question1content}>
            <h2>Certificates Details</h2>
            <div className={styles.wrapperInputBox1}>
              <p>Certificates</p>
              <Select
                value={certificates}
                onChange={setcertificates}
                options={certificate_datas}
                isSearchable
                isMulti
                className={styles.selectors}
              />
            </div>
            <div className={styles.wrapceritificateContent}>
            <div className={styles.wrapperInputBox}>
              <p>Certificate Name</p>
              <input type="text" placeholder="Enter your Certificate Name" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Country</p>
              <input type="text" placeholder="Enter your Country Name" />
            </div>
            </div>
            
            <div className={styles.wrapceritificateContent}>
            <div className={styles.wrapperInputBox}>
              <p>Description</p>
              <input type="text" placeholder="Enter your description" />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Sector</p>
              <input type="text" placeholder="Enter your Sector" />
            </div>
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Upload certificate</p>
              <DragFile onFileChange={(files) => onFileChange(files)} />
            </div>
          </div>
          <div className={styles.submitformbtns}>
          <button onClick={closePopup} className={styles.closeButton}>
              Close
            </button>
            <button onClick={closePopup} className={styles.submitButton}>
              Upload
            </button>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;