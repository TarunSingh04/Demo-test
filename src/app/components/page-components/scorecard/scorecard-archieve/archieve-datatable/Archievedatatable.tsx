import React, { useMemo, useState } from 'react';
import styles from "./styles.module.scss";


const Archieve_data = [
  {
    ScorecardName:"Score1",
    publicationDate: "26/07/2024",
    validUntil: "26/07/2030",
    score: "C",
    overallScore: "60%"
  },
  {
    ScorecardName:"Score2",
    publicationDate: "29/20/2006",
    validUntil: "28/11/2010",
    score: "A",
    overallScore: "75%"
  }
  ]

const Archievedatatable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
  
    const itemsPerPage = 10;
  
    const filteredData = useMemo(() => {
      return Archieve_data.filter(item =>
        item.ScorecardName.toLowerCase().includes(searchTerm.toLowerCase()) 
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
      <div className="Tablecontainer">
        <div className={styles.dataTableContainer}>
          <div className={styles.dataTableHeader}>
            <h3>Archieve</h3>
            <input
              type="text"
              placeholder="Search by Scorecard Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
            />
          </div>
          <table className={styles.dataTable}>
            <thead className={styles.theadUtility}>
              <tr>
                <th>Scorecard Name</th>
              <th onClick={() => handleSort('publicationDate')} className={styles.sortable}>
                Publication Date {sortColumn === 'publicationDate' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('validUntil')} className={styles.sortable}>
                Valid Until {sortColumn === 'validUntil' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('score')} className={styles.sortable}>
                Score {sortColumn === 'score' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('overallScore')} className={styles.sortable}>
                Overall% {sortColumn === 'overallScore' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th>Download</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item:any, index:any) => (
                <tr key={index} className={styles.tableRows}>
                <td>{item.ScorecardName}</td>
                <td>{item.publicationDate}</td>
                <td>{item.validUntil}</td>
                <td>{item.score}</td>
                <td>{item.overallScore}</td>
                <td><button>download</button></td>
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
      </div>
    );
}

export default Archievedatatable