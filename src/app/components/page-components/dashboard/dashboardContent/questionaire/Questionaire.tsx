import React, { useState } from "react";
import styles from "./styles.module.scss";
import { PiTreeFill } from "react-icons/pi";
import { PiTreeLight } from "react-icons/pi";
import { PiTreeDuotone } from "react-icons/pi";
import { IoShareSocial } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoShareSocialSharp } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import Quizcontent from "./quiz-content/Quizcontent";

const questionSubcont = [
  {
    questionItemName: "Environmental",
    questionItemLogo: (
      <PiTreeLight
        style={{ background: `#34D399` }}
        className={styles.questionIcons}
      />
    ),
    questionItemLogo2: (
      <PiTreeLight
        style={{ background: `#34D399` }}
        className={styles.questionIcons2}
      />
    ),
    questionDescription:
      "This section examines your company’s environmental impact, focusing on carbon footprint, pollution control, waste, and resource management.",
  },
  {
    questionItemName: "Social",
    questionItemLogo: (
      <IoShareSocial
        style={{ background: `#60A5FA` }}
        className={styles.questionIcons}
      />
    ),
    questionItemLogo2: (
      <IoShareSocial
        style={{ background: `#60A5FA` }}
        className={styles.questionIcons2}
      />
    ),
    questionDescription:
      "This section evaluates how your company addresses social issues, including employee relations, customer satisfaction, and human rights.",
  },
  {
    questionItemName: "Governance",
    questionItemLogo: (
      <FaRegBuilding
        style={{ background: `#F59E0B` }}
        className={styles.questionIcons}
      />
    ),
    questionItemLogo2: (
      <FaRegBuilding
        style={{ background: `#F59E0B` }}
        className={styles.questionIcons2}
      />
    ),
    questionDescription:
      "This section focuses on your company's operations, including ethical business practices. It highlights how you manage and uphold business integrity.",
  },
];

const Questionaire = () => {
  const [openQuestionaire, setopenQuestionaire] = useState(false);
  const [startQuiz, setstartQuiz] = useState(false);

  const openQuestion = () => {
    setopenQuestionaire(true);
  };

  const closeQuestion = () => {
    setopenQuestionaire(false);
  };

  const startQuizJourney = ()=>{
    setopenQuestionaire(false);
    setstartQuiz(true);
  }
  return (
    <div className={styles.Questionaire}>
      <h4>Questionaires</h4>
      <div className={styles.questionCont}>
        <div className={styles.questionSubcont}>
          {questionSubcont.map((items: any, index: any) => {
            return (
              <div className={styles.questionaireItems} key={index}>
                {items.questionItemLogo}
                <p>{items.questionItemName}</p>
              </div>
            );
          })}
        </div>
        <p className={styles.questionMessage}>
          Welcome to this ESG questionnaire, aligned with UN sustainability
          guidance and EU regulations, to assess your company&apos;s
          sustainability progress.
        </p>
        <button
          className={styles.questionButton}
          onClick={() => {
            openQuestion();
          }}
        >
          Continue with Questionaire
        </button>
      </div>
      {openQuestionaire && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <button className={styles.closebtn} onClick={()=>{setopenQuestionaire(false)}}>X</button>
            <h3>ESG Performance Meta-Evaluation - QUESTIONNAIRE</h3>
            <p>
              Welcome to this questionnaire, which is designed to capture all
              the relevant information and give you a snapshot of your
              company&apos;s progress toward becoming a fully sustainable
              business. It follows the ESG model of analysis and is fully in
              line with the United Nations guidance on sustainability matters
              and the latest EU regulations, such as the Corporate
              Sustainability Reporting Directive.
            </p>
            <div className={styles.Esgquestioncont}>
              <h4>It is divided into three sections:</h4>
              <div className={styles.questionSubcont}>
                {questionSubcont.map((item: any, index: any) => {
                  return (
                    <div className={styles.questionaireItems} key={index}>
                      {item.questionItemLogo2}
                      <p className={styles.questionItemName}>
                        {item.questionItemName}
                      </p>
                      <p className={styles.questionDesc}>
                        {item.questionDescription}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className={styles.quizbtn} onClick={()=>{startQuizJourney()}}>Take quiz</button>
            <div className={styles.disclaimer}>
              <span>Disclaimer: </span>
              <p>
                You are encouraged to calculate your carbon footprint for a more
                accurate ESG analysis and receive an Action Plan for
                sustainability improvements. Choosing cost-effective,
                sustainable utilities and obtaining verified certifications,
                like ISO and EPDs, are essential steps. Companies with strong
                ESG performance attract talent, drive innovation, and gain
                investor and consumer support, fostering long-term value.
              </p>
            </div>
          </div>
        </div>
      )}

      {
        startQuiz && <Quizcontent setQuiz={setstartQuiz}/> 
      }
    </div>
  );
};

export default Questionaire;
