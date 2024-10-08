"use client"
import React from 'react';
import styles from "./styles.module.scss";
import { FaCircleCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const cardData = [
    {
        priceType:"Basic",
        price:"Free",
        priceDescription: "A standard package for those just starting out.",
        cardFeatures:["3 devices", "Full HD resolution","Watching online"]
    },
    {
        priceType:"Starter",
        price: "250$",
        priceDescription:"The most popular version, includes all the necessary functions of the app.",
        cardFeatures:["3 devices", "Full HD resolution","Watching online"]
    },
    {
        priceType:"Premium",
        price:"450$",
        priceDescription: "A version of grouped users and users with custom features",
        cardFeatures:["3 devices", "Full HD resolution","Watching online"]
    }
];

const Pricing = () => {
    const router = useRouter();
    const PaytoProceed = (price:any,dashboard:any)=>{
        router.push("/pages/dashboard");
    }
  return (
    <div className={styles.pricing}>
        <div className={styles.pricingBox}>
        <div className={styles.header}>
            <div className={styles.priceHead1}>PRICING</div>
            <div className={styles.AuthHeader}>
            <p>
                Impakter <span>PRO</span>
            </p>
            </div>
            <div className={styles.priceHead3}>Choose a package according to your personal needs.</div>
        </div>
        <div className={styles.pricingContainer}>
            {
                cardData.map((items:any, index:any)=>{
                    return(
                        <div className={styles.cards} key={index}>
                            <div className={styles.tabContainer}>
                            <div className={styles.tag}>popular</div>
                            </div>
                            <div className={styles.priceType}>{items.priceType}</div>
                            <div className={styles.price}>
                                {items.price}<span>/a month</span>
                            </div>
                            <div className={styles.subline}>{items.priceDescription}</div>
                            <div className="cardFeatures">
                                {
                                  items.cardFeatures.map((cardItems:any, index:any)=>{
                                    return(
                                        <p className={styles.cardFeatures} key={index}>
                                          <FaCircleCheck className={styles.checklogo}/>
                                          <p>{cardItems}</p>
                                        </p>
                                    )
                                  })
                                }
                            </div>
                            <button className={styles.pricingbtn} onClick={()=>{PaytoProceed(items.price,index)}}>Get started</button>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Pricing