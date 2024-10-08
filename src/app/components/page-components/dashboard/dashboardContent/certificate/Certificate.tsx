import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { useRouter } from 'next/navigation';

const Certificate_data = [
  {
    certificateType:"ISO",
    certificateName: ["ISO 14001","ISO 14040"]
  },
  {
    certificateType:"3rd Party",
    certificateName: ["ADM Responsible Soybean Standard","Aluminium Stewardship Initiative"]
  },
  {
    certificateType:"Others",
    certificateName: ["ABNT Ecolabel","Accredited Fish Farm Scheme"]
  }
]

const Certificate = () => {
  const navigate = useRouter();
  const navigateTo = ()=>{
    navigate.push("/pages/certificates");
  }
  return (
    <div className={styles.CertificatePage}>
         <h4>My Certificate</h4>
         {
            Certificate_data.map((items:any,index:any)=>{
                return(
                    <div className={styles.taskBox} key={index}> 
                       <div className={styles.taskHead}>
                       <p className={styles.taskHeader}>
                          {items.certificateType}
                       </p>
                       </div>                   
                       {
                          items.certificateName.map((name:any,index:any)=>{
                            return(
                              <li className={styles.taskDesc} key={index}>{name}</li>
                            )
                          })
                       }
                    </div>
                )
            })
        }
        <button className={styles.certificateButton} onClick={()=>{navigateTo()}}>View More</button>
    </div>
  )
}

export default Certificate