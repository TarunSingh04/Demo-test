import React from 'react';
import styles from "./styles.module.scss";

const certificates_Data = [
    {
        certificateName: "flowers and Ornamentals sustainability Standard - KFC Gold and Silver Level",
        maxPrice: 90000,
        minPrice: 5000,
    },
    {
        certificateName: "Environmental",
        maxPrice: 90000,
        minPrice: 25000,
    },
    {
        certificateName: "Social",
        maxPrice: 80000,
        minPrice: 45000,
    },
    {
        certificateName: "Governance",
        maxPrice: 20000,
        minPrice: 10000,
    },
];

const Finance = () => {
    const calculateMean = (data:any, key:any) => {
        const total = data.reduce((sum:any, item:any) => sum + item[key], 0);
        return total / data.length;
    };

    const meanMaxPrice = calculateMean(certificates_Data, 'maxPrice');
    const meanMinPrice = calculateMean(certificates_Data, 'minPrice');

    return (
        <div className={styles.Finance}>
            <h4>My Savings</h4>
            <div className={styles.cumulativeBalance}>
                <div className={styles.priceCont}>    
                    <div className={styles.pricebox}>
                    <p className={styles.amount}>{meanMinPrice.toFixed(0)}<span>€</span></p>
                    <p className={styles.desc}>Lowest Certificate Price</p>
                    </div>
                    <div className={styles.pricebox1}>
                    <p className={styles.amount}>{meanMaxPrice.toFixed(0)}<span>€</span></p>
                    <p className={styles.desc}>Highest Certificate Price</p>
                    </div>
                </div>
            </div>
            <div className={styles.certificatesprice}>
                <div className={styles.certificateBox}>
                    <div className={styles.certificatesdataheader}>
                        <p className={styles.certificatesName}>Certificates</p>
                        <div className={styles.certificateAmount}>Min price<span>Max price</span></div>
                    </div>
                    {
                        certificates_Data.map((data, index) => {
                            return (
                                <div key={index} className={styles.certificatesdata}>
                                    <p className={styles.certificateNumber}>{index+1}.</p> 
                                    <p className={styles.certificatesName}>{data.certificateName}</p>
                                    <div className={styles.certificateAmount}>€ {data.minPrice} <span>€ {data.maxPrice}</span></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Finance;
