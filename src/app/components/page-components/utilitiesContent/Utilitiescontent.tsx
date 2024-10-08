import React, { useState } from 'react';
import styles from "./styles.module.scss";
import DataTable from './ultities-tables/Datatable';
import utility_section_data from '../../utilities/utility_section_data';


const getBackgroundColor = (rating:any) => {
  switch (rating) {
    case 'A':
      return '#6e8e7f';
    case 'B':
      return '#b0d1ab';
    case 'C':
      return '#ecce1d';
    case 'D':
      return '#ed8a38';
    case 'E':
      return '#ea5556';
    case 'F':
      return '#ea5556';
    default:
      return '#fff'; // default background color if rating doesn't match
  }
};

const Utilitiescontent = () => {
  const [selectedUtility, setSelectedUtility] = useState<any>(null);

  const handleCardClick = (utility:any) => {
    setSelectedUtility(utility);
  };

  const closePopup = () => {
    setSelectedUtility(null);
  };

  return (
    <div className={styles.Utilities}>
      <div className={styles.utilityHeader}>Utilities</div>
      <div className={styles.myUtilitiescont}>
        <div className={styles.myutilityHeader}>My Utilities</div>
        {utility_section_data.map((items:any, index:any) => {
          return (
            <div
              key={index}
              className={styles.utilitycards}
              onClick={() => handleCardClick(items)}
            >
              <div
                className={styles.utilityRating}
                style={{ backgroundColor: getBackgroundColor(items.rating) }}
              >
                {items.rating}
              </div>
              <div className={styles.utilities_data}>
                <div className={styles.utilitydatarow}>
                  <a href={items.websiteURL} target="_blank">
                    {items.companyName}
                  </a>
                  <div className={styles.utilityCol}>
                    <p>{items.country}</p>
                    <p className={styles.utilitydividerline}></p>
                    <p>{items.sector}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedUtility && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h3>All details </h3>
            <h2>{selectedUtility.companyName}</h2>
            <div className={styles.Infocont}>
            <div className={styles.InfoLabel}>
            <p>Country:</p>
            <p>Sector:</p>
            <p>Rating:</p>
            <p>Revenues:</p>
            <p>Employees:</p>
            </div>
            <div className={styles.detailInfo}>
            <span>{selectedUtility.country}</span>
            <span>{selectedUtility.sector}</span>
            <span>{selectedUtility.rating}</span>
            <span>{selectedUtility.revenues} million</span>
            <span>{selectedUtility.numberOfEmployees}</span>
            </div>
            </div>
            <button onClick={closePopup} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}

      <DataTable/>
     
    </div>
  );
};

export default Utilitiescontent;
