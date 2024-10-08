import React from 'react'
import styles from "./styles.module.scss";
import utility_section_data from '../../../../utilities/utility_section_data';
import { useRouter } from 'next/navigation';

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
      return '#fff'; 
  }
};

const Ultilitysupplier = () => {
  const navigate = useRouter();
  const navigateTo = ()=>{
    navigate.push("/pages/utilities")
  }
  return (
    <div className={styles.UtilitysupplierPage}>
        <h4>Utility</h4>
        <div className={styles.pageContainer}>
        {utility_section_data.map((items:any, index:any) => {
          return (
            index<3 &&
            <div
              key={index}
              className={styles.utilitycards}
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
        <button className={styles.utilityButton} onClick={()=>{navigateTo()}}>view all</button>
    </div>
  )
}

export default Ultilitysupplier