import React from 'react'
import styles from "./styles.module.scss";
import { BsBuildingsFill } from "react-icons/bs";
import Image from 'next/image';
import marketPlace from "../../../../assets/marketplace.png"
import { useRouter } from 'next/navigation';

const Marketplace = () => {
  const navigate = useRouter();
  const navigateTo = ()=>{
    navigate.push("/pages/marketplace");
  }
  return (
    <div className={styles.Marketplace}>
        <h4>IMPAKTER Marketplace</h4>
        <div className={styles.marketplacesubcont}>
          <Image src={marketPlace} width={180} height={180} alt='none' className={styles.marketIcon}/>
          <h1>Green your Supply Chain and Grow Your Profit</h1>
          <button onClick={()=>{navigateTo()}}>Subscribe Now</button>
        </div>
    </div>
  )
}

export default Marketplace