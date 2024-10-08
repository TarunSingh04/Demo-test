"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Questionaire from "./questionaire-content/Questionaire";
import SidenavQuestionaire from "./questionaire-sidebar/SidenavQuestionaire";
import Image from "next/image";
import dashboardLogo from "../assets/dash_demo.png";

const Onboardingpage = () => {
  const [questionaireState, setquestionaireState] = useState<any>(1);
  return (
      <div className={styles.onboardingPage}>
        <div className={styles.onboardingBox}>
          <SidenavQuestionaire
            questionaireState={questionaireState}
            setquestionaireState={setquestionaireState}
          />
          <div className={styles.dividerline}></div>
          <Questionaire
            questionaireState={questionaireState}
            setquestionaireState={setquestionaireState}
          />
        </div>
    </div>
  );
};

export default Onboardingpage;
