import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import utility_section_data from "../../../utilities/utility_section_data";



const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const itemsPerPage = 10;
  const filteredData = useMemo(() => {
    return utility_section_data.filter(item =>
      item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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

  return (
    <div className={styles.dataTableContainer}>
    
      <div className={styles.dataTableHeader}>
      <h3>All Utilities</h3>
      <input
        type="text"
        placeholder="Search by company, sector, or country..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      </div>
      <table className={styles.dataTable}>
        <thead className={styles.theadUtility}>
          <tr>
            <th>Company Name</th>
            <th>Sector</th>
            <th>Country</th>
            <th onClick={() => handleSort('rating')} className={styles.sortable}>
              Rating {sortColumn === 'rating' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('revenues')} className={styles.sortable}>
              Revenues {sortColumn === 'revenues' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('numberOfEmployees')} className={styles.sortable}>
              Number of Employees {sortColumn === 'numberOfEmployees' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item:any, index:any) => (
            <tr key={index} className={styles.tableRows}>
              <td><a href={item.websiteURL} target="_blank" className={styles.utilityTableLinks}>{item.companyName}</a></td>
              <td>{item.sector}</td>
              <td>{item.country}</td>
              <td>{item.rating}</td>
              <td>{(!Number.isNaN(item.revenues))?item.revenues:100}</td>
              <td>{(!Number.isNaN(item.numberOfEmployees))?item.numberOfEmployees:100}</td>
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
  );
};

export default DataTable;