import React from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import ComingSoonLogo from "../../assets/marketplace.png";

const Marketplace = () => {
  return (
    <div className={styles.Marketplace}>
    <Image src={ComingSoonLogo} width={400} height={400} alt='none' className={styles.commingsoonImg}/>
    <h2>Launching Soon</h2>
    <span>Our Green Marketplace</span>
    <p>Green your supply chain and grow your profits by sourcing from verified sustainable suppliers and supplying to eco-conscious businesses. Suscribe now to be the first to get notified!</p>
    <button>Subscribe Now</button>
  </div>
  )
}

export default Marketplace