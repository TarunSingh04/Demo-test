"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import DataTable from "./certificate-tables/Datatable";
import certificate_3rd from "../../utilities/certificate_3rd";
import certificate_ISO from "../../utilities/certificate_Iso";
import certificate_others from "../../utilities/certificate_others";
import Image from "next/image";

const Certificates = () => {
  const [selectedCertificate, setselectedCertificate] = useState<any>(null);

  const handleCardClick = (certificate: any) => {
    setselectedCertificate(certificate);
  };

  const closePopup = () => {
    setselectedCertificate(null);
  };
  return (
    <div className={styles.Certificates}>
      <div className={styles.certificateHeader}>Certificates</div>
      <div className={styles.myCertificatescont}>
        <div className={styles.certificatesCont}>
          <div className={styles.certificatesSubCont}>
          <div className={styles.certificateLabel}>ISO</div>
            <div className={styles.certificates}>
              {certificate_ISO.map((items: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={styles.certificatecards}
                    onClick={() => handleCardClick(items)}
                  >
                    <Image
                      src={
                        "https://cdn-icons-png.freepik.com/512/4308/4308745.png"
                      }
                      width={60}
                      height={60}
                      alt="none"
                    />
                    <div className={styles.certificate_data}>
                      <div className={styles.certificatedatarow}>
                        <a href={items.Website} target="_blank">
                          {items.Name}
                        </a>
                        <div className={styles.certificateCol}>
                          <p>{items.Price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
        
          </div>
          <div className={styles.certificatesSubCont}>
          <div className={styles.certificateLabel}>3rd Party</div>
            <div className={styles.certificates}>
              {certificate_3rd.map((items: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={styles.certificatecards}
                    onClick={() => handleCardClick(items)}
                  >
                    <Image
                      src={
                        "https://cdn-icons-png.freepik.com/512/4308/4308745.png"
                      }
                      width={60}
                      height={60}
                      alt="none"
                    />
                    <div className={styles.certificate_data}>
                      <div className={styles.certificatedatarow}>
                        <a href={items.Website} target="_blank">
                          {items.Name}
                        </a>
                        <div className={styles.certificateCol}>
                          <p>{items.Price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.certificatesSubCont}>
          <div className={styles.certificateLabel}>Others</div>
            <div className={styles.certificates}>
              {certificate_others.map((items: any, index: any) => {
                return (
                  <div
                    key={index}
                    className={styles.certificatecards}
                    onClick={() => handleCardClick(items)}
                  >
                    <Image
                      src={
                        "https://cdn-icons-png.freepik.com/512/4308/4308745.png"
                      }
                      width={60}
                      height={60}
                      alt="none"
                    />
                    <div className={styles.certificate_data}>
                      <div className={styles.certificatedatarow}>
                        <a href={items.Website} target="_blank">
                          {items.Name}
                        </a>
                        <div className={styles.certificateCol}>
                          <p>{items.Price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
      {selectedCertificate && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h3>All details </h3>
            <h2>{selectedCertificate.Name}</h2>
            <div className={styles.Infocont}>
              <div className={styles.InfoLabel}>
                <p>E-score:</p>
                <p>S-score:</p>
                <p>G-score:</p>
                <p>Price:</p>
              </div>
              <div className={styles.detailInfo}>
                <span>{selectedCertificate.eScore}</span>
                <span>{selectedCertificate.sScore}</span>
                <span>{selectedCertificate.gScore}</span>
                <span>{selectedCertificate.Price}</span>
              </div>
            </div>
            <button onClick={closePopup} className={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
      <DataTable />
    </div>
  );
};

export default Certificates;
