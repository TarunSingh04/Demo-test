import React, { useState } from "react";
import styles from "./styles.module.scss";
import verifiedLogo from "../../assets/verified.png";
import pendingLogo from "../../assets/pending.jpeg";
import Image from "next/image";
import Esgscore from "../dashboard/dashboardContent/esg-score/Esgscore";
import Sustainabilitydatatable from "./sustainability-datatable/Sustainabilitydatatable";


const Sustainability = () => {
  const [companyName, setcompanyName] = useState("Apple");
  const [companyLocation, setcompanyLocation] = useState("Germany");
  const [overallScore, setoverallScore] = useState(60);

  return (
    <div className={styles.Sustainability}>
      <div className={styles.badgeheader}>
        <div className={styles.badgeheaderinfo1}>
          <h2>{companyName}</h2>
          <p>
            Location: <span>{companyLocation}</span>
          </p>
        </div>
        {overallScore >= 70 && (
          <Image
            src={verifiedLogo}
            width={200}
            height={200}
            alt="none"
            className={styles.susHeaderImg}
          />
        )}
        {overallScore < 70 && (
          <Image
            src={pendingLogo}
            width={200}
            height={200}
            alt="none"
            className={styles.susHeaderImg}
          />
        )}
      </div>

      <div className={styles.BadgeBody}>
        <div className={styles.BadgeBodyInfo}>
          <h2>My Sustainability Badge</h2>
          <p>
            A Badge of Approval is distributed to those IMPAKTER PRO customers
            that fulfill either of these criteria: Rating A or B scores. Pending
            Badge - Score C- as long as the company has shown an exceptional ESG
            track record compared to the average in its sector and is committed
            to the high-priority measures outlined by the ESG Progress Report.
            Clients who receive scores of D or F will not be eligible for a
            sustainability badge and therefore will not have access to the
            sustainability badge section.
          </p>
          <p>
          For clients who receive scores of A or
            B, they will have the ability to view and download their approval
            badge. Clients with a score of C can view and download a pending
            badge. We will need to consider how to handle the badge section for
            clients who receive scores of D or F. Either we dont show the
            section in the menu for them, or have some comms explaining them
            that they need to follow their action plan in order to get a better
            score and access the badge.
          </p>
        </div>
        <Esgscore percentage={60}/>
      </div>
      <Sustainabilitydatatable/>
    </div>
  );
};

export default Sustainability;
