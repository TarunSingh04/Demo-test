import React, { useState } from 'react';
import styles from "./styles.module.scss";
import Overview from './overview/Overview';
import ReportInfo from './report-info/ReportInfo';
import Methodology from './methodology/Methodology';
import Customize from './customize/Customize';
import DownloadReport from './download-report/DownloadReport';

const Reports = () => {
  const [companyName, setcompanyName] = useState("Apple");
  const [companyLocation, setcompanyLocation] = useState("Germany");
  const [overallScore, setoverallScore] = useState(60);
  const [scorenavigateNumber, setscorenavigateNumber] = useState(1);

  const scoreContentChange = (scoreNum:any)=>{
    setscorenavigateNumber(scoreNum);
  }

  return (
    <div className={styles.scorecard}>
      <div className={styles.badgeheader}>
        <div className={styles.badgeheaderinfo1}>
          <h2>{companyName}</h2>
          <p>
            Location: <span>{companyLocation}</span>
          </p>
        </div>


        <div className={styles.badgeheaderinfo2cont}>
        {overallScore > 80 && (
          <div
            className={styles.badgeheaderinfo2}
            style={{ background: "#6e8e7f" }}
          >
            A
          </div>
        )}
        {(overallScore > 80 && overallScore > 69) && (
          <div
            className={styles.badgeheaderinfo2}
            style={{ background: "#b0d1ab" }}
          >
            B
          </div>
        )}
        {(overallScore<=69 && overallScore > 39) && (
          <div
            className={styles.badgeheaderinfo2}
            style={{ background: "#ecce1d" }}
          >
            C
          </div>
        )}
        {(overallScore <= 39  && overallScore > 30) && (
          <div
            className={styles.badgeheaderinfo2}
            style={{ background: "#ed8a38" }}
          >
            D
          </div>
        )}
        {(overallScore <= 30 && overallScore > 15) && (
          <div
            className={styles.badgeheaderinfo2}
            style={{ background: "#ea5556" }}
          >
            E
          </div>
        )}
        {overallScore <= 15 && (
          <div
            className={styles.badgeheaderinfo2}
            style={{ background: "#ea5556" }}
          >
            F
          </div>
        )}
        </div>        
      </div>


      <div className={styles.scorecardBody}>
        <h2>My Report</h2>
        <div className={styles.scorecardsubcontbar}>
          <p onClick={()=>{scoreContentChange(1)}} className={scorenavigateNumber===1?styles.boldScoreSection:styles.normalScoreSection}>Overview</p>
          <p onClick={()=>{scoreContentChange(2)}} className={scorenavigateNumber===2?styles.boldScoreSection:styles.normalScoreSection}>Report Information</p>
          <p onClick={()=>{scoreContentChange(3)}} className={scorenavigateNumber===3?styles.boldScoreSection:styles.normalScoreSection}>Methodology</p>
          <p onClick={()=>{scoreContentChange(4)}} className={scorenavigateNumber===4?styles.boldScoreSection:styles.normalScoreSection}>Customize</p>
          <p onClick={()=>{scoreContentChange(5)}} className={scorenavigateNumber===5?styles.boldScoreSection:styles.normalScoreSection}>Download</p>
        </div>
        <div className={styles.scorecardBodyContent}>
          {scorenavigateNumber===1 && <Overview/>}
          {scorenavigateNumber===2 && <ReportInfo/>}
          {scorenavigateNumber===3 && <Methodology/>}
          {scorenavigateNumber===4 && <Customize/>}
          {scorenavigateNumber===5 && <DownloadReport/>}
        </div>
      </div>
    </div>
  );
};


export default Reports