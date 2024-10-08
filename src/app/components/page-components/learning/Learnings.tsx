import React from 'react';
import styles from "./styles.module.scss";
import Image from 'next/image';
import ComingSoonLogo from "../../assets/commingsoon1.png";

const Learnings = () => {
  return (
    <div className={styles.Learnings}>
      <Image src={ComingSoonLogo} width={400} height={400} alt='none' className={styles.commingsoonImg}/>
      <h2>Launching Soon</h2>
      <span>Our E-Learning Modules</span>
        <p  className={styles.learningdesc2}>Our E-learning platform is designed to deliver industry-related updates, webinars, and learning materials your company needs to become a true sustainability champion!</p>
      <button>Subscribe Now</button>
    </div>
  )
}

export default Learnings