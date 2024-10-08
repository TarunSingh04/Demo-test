"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Scorecardmain from "./scorecard-main/Scorecardmain";
import Scorecardmetrics from "./scorecard-metrics/Scorecardmetrics";
import Scorecardarchieve from "./scorecard-archieve/Scorecardarchieve";

const Scorecard = () => {
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
        <h2>My Scorecard</h2>
        <div className={styles.scorecardsubcontbar}>
          <p onClick={()=>{scoreContentChange(1)}} className={scorenavigateNumber===1?styles.boldScoreSection:styles.normalScoreSection}>Scorecard</p>
          <p onClick={()=>{scoreContentChange(2)}} className={scorenavigateNumber===2?styles.boldScoreSection:styles.normalScoreSection}>Metrics</p>
          <p onClick={()=>{scoreContentChange(3)}} className={scorenavigateNumber===3?styles.boldScoreSection:styles.normalScoreSection}>Archieve</p>
        </div>
        <div className={styles.scorecardBodyContent}>
          {scorenavigateNumber===1 && <Scorecardmain/>}
          {scorenavigateNumber===2 && <Scorecardmetrics/>}
          {scorenavigateNumber===3 && <Scorecardarchieve/>}
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
