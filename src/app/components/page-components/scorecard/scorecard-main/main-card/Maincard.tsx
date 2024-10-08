"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import verifiedLogo from "../../../../assets/verified.png";
import pendingLogo from "../../../../assets/pending.jpeg";
import { CircularProgress } from "@mui/joy";
import CircularProgressCountUp from "./circular-progress/Circularprogress";

const Maincard = () => {
  const [companyName, setcompanyName] = useState("Apple");
  const [companyLocation, setcompanyLocation] = useState("Germany");
  const [overallScore, setoverallScore] = useState(60);
  const [eScore, seteScore] = useState(80);
  const [sScore, setsScore] = useState(14);
  const [gScore, setgScore] = useState(35);
  const [publicationDate, setpublicationDate] = useState("25/09/2024");
  const [validUntil, setvalidUntil] = useState("25/10/2030");
  const [smeName, setsmeName] = useState("smeName");

  const getColor = (currentPercentage: any) => {
    if (currentPercentage > 80) {
      return "#6e8e7f";
    } else if (currentPercentage > 69) {
      return "#b0d1ab";
    } else if (currentPercentage > 39) {
      return "#ecce1d";
    } else if (currentPercentage > 30) {
      return "#ed8a38";
    } else if (currentPercentage > 15) {
      return "#ea5556";
    } else {
      return "#ea5556";
    }
  };

  const getGrade = (currentPercentage: any) => {
    if (currentPercentage > 80) {
      return "A";
    } else if (currentPercentage > 69) {
      return "B";
    } else if (currentPercentage > 39) {
      return "C";
    } else if (currentPercentage > 30) {
      return "D";
    } else if (currentPercentage > 15) {
      return "E";
    } else {
      return "F";
    }
  };

  return (
    <div className={styles.Maincard} id="maincard">
      <div className={styles.MaincardHeader}>
        <div className={styles.MaincardHeadercont1}>
          <h2>{companyName}</h2>
          <p>
            Location: <span>{companyLocation}</span>
          </p>
        </div>
        {overallScore >= 70 && (
          <Image
            src={verifiedLogo}
            width={160}
            height={160}
            alt="none"
            className={styles.susHeaderImg}
          />
        )}
        {overallScore < 70 && (
          <Image
            src={pendingLogo}
            width={160}
            height={160}
            alt="none"
            className={styles.susHeaderImg}
          />
        )}
      </div>

      <div className={styles.datesCont}>
        <p className={styles.datessub1}>
          Publication Date: <span>{publicationDate}</span>
        </p>
        <p className={styles.datessub2}>
          Valid Until: <span>{validUntil}</span>
        </p>
      </div>

      <div className={styles.scorescont}>
        <div className={styles.overallscore}>
          <div
            className={styles.scorescontsub}
            style={{ borderColor: `${getColor(overallScore)}` }}
          >
            <h2>{getGrade(overallScore)}</h2>
          </div>
          <h3>Overall Score</h3>
        </div>
        <div className={styles.scoredividerline}></div>
        <CircularProgressCountUp/>
        {/* <div className={styles.overallscore}>
          <div
            className={styles.scorescontsub}
            style={{ borderColor: `${getColor(eScore)}` }}
          >
            <h2>{eScore}%</h2>
          </div>
          <h3>Environmental</h3>
        </div>
        <div className={styles.overallscore}>
          <div
            className={styles.scorescontsub}
            style={{ borderColor: `${getColor(sScore)}` }}
          >
            <h2>{sScore}%</h2>
          </div>
          <h3>Social</h3>
        </div>
        <div className={styles.overallscore}>
          <div
            className={styles.scorescontsub}
            style={{ borderColor: `${getColor(gScore)}` }}
          >
            <h2>{gScore}%</h2>
          </div>
          <h3>Governance</h3>
        </div> */}
      </div>

      <div className={styles.maincardBody}>
        The data presented in the {companyName} scorecard is based on the
        Impakter Pro methodology, which considers various factors, including the
        company&pos;s performance in achieving ESG clusters, the Materiality of
        sustainability efforts, Sustainability Management, Certifications, and
        Company Information. The comprehensive sustainability analysis to
        identify gaps and provide expres-lutions aligned with EU regulations and
        market standards.
      </div>
      <div className={styles.maincardBodytxt}>
        {" "}
        Following are the Greenscape Estates&pos; areas of progress:
      </div>

      <div className={styles.maincardBody2}>
        <h4 className={styles.mainTitle}>Environmental</h4>
        <div className={styles.contentbody}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
          dignissimos labore molestias, magnam quis, corporis perferendis nulla
          laborum dolore iusto itaque architecto? Magni, hic! Quaerat at hic
          quidem porro fuga, perferendis sapiente tempore dicta assumenda beatae
          ipsum distinctio aperiam esse.
        </div>
      </div>

      <div className={styles.maincardBody2}>
        <h4 className={styles.mainTitle}>Social</h4>
        <div className={styles.contentbody}>
          <div className={styles.contentsubbody1}>
            <h4>Capital Dimension</h4>
            <p>
              {companyName} has demonstrated commitment in the social capital
              dimension with a score of {sScore}%.
            </p>
          </div>
          <div className={styles.contentsubbody2}>
            <h4>Human Capital Dimension</h4>
            <p>
              Human capital encompasses all facets of a business that can impact
              workers and stakeholders at an operational level. {companyName}{" "}
              has achieved a score of {sScore}%. {companyName} has taken steps
              and is proceeding in the right direction, especially concerning
              [add relevant response from questionnaire] {companyName} shows a{" "}
              {sScore}% rating in the business model and innovation dimension.
              This rating evaluates the company&pos;s ability to align products
              and services with stakeholder demands and sustainability
              requirements., including product design, climate adaptation, and
              responsible material sourcing for real estate.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.maincardBody2}>
        <h4 className={styles.mainTitle}>Governance</h4>
        <div className={styles.contentbody}>
          {companyName} scores {gScore}% in leadership and governance, which
          evaluates factors affecting long-term strategy and decision-making. A
          strong performance in this dimension indicates strong leadership and
          organizational structure vital for sustainable growth.
          <p>
            {companyName} prioritizes transparency and integrity in its sector.
          </p>
        </div>
      </div>

      <div className={styles.maincardBody2}>
        <h4 className={styles.mainTitle}>Certificates</h4>
        <div className={styles.contentbody}>
          With a score of {overallScore}% on certificates and standards
          obtained, {smeName} is on the verge of achieving full transparency and
          compliance through third-party verified standards but is engaged in
          taking more measures to demonstrate sustainability, including shedding
          certificates that are not third-party verified as this will save
          money.
        </div>
      </div>

      <div className={styles.maincardBody3}>
        <h4 className={styles.mainTitle}>Energy use</h4>
        <div className={styles.contentbody}>
          <div className={styles.contentsubbody1}>
            <h4>Energy source</h4>
            <p>
              With [50 to 80%] of energy derived from local utilities using
              fossil fuels as their main source, {smeName} needs to consider
              alternative sources of energy such as solar panels or wind power
              to improve its score
            </p>
          </div>
          <div className={styles.contentsubbody2}>
            <h4>Energy efficiency</h4>
            <p>
              With an energy use score of [50 to 80%] as labeled by the EU
              system (from A to G), {smeName} is on its way to achieving
              efficiency in its energy use, but more still needs to be done to
              demonstrate sustainability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maincard;
