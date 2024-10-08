import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Maincard from './main-card/Maincard';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Scorecardmain = () => {
  const [companyName, setcompanyName] = useState("Apple")
  
  const downloadPDF = () => {
    const component = document.getElementById("maincard");

    if (component) {
      html2canvas(component, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        // Calculate width and height
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // If content is longer than one page, continue adding pages
        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(`${companyName}-scorecard.pdf`);
      });
    } else {
      console.error("Component with id 'maincard' not found.");
    }
  };
  return (
    <div className={styles.Scorecardmain}>
      <div className={styles.downloadbtn}>
      <button onClick={downloadPDF} className={styles.downloadButton}>
        Download as PDF
      </button>
      </div>
      <Maincard/>
    </div>
  )
}

export default Scorecardmain