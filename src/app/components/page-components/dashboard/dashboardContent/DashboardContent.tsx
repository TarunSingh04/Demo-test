import React from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import styles from "./styles.module.scss";
import EsgScorecard from './esg-score-card/EsgScoreCard';
import Esgnews from './esg-news/Esgnews';
import Taskmanger from './task-manager/Taskmanger';
import Finance from './finance/Finance';
import Esgscore from './esg-score/Esgscore';
import Questionaire from './questionaire/Questionaire';
import Certificate from './certificate/Certificate';
import Ultilitysupplier from './utilities-supplier/Ultilitysupplier';
import Marketplace from './marketplace/Marketplace';
import AIassistant from './ai-assistant/AIassistant';

// Define the data structure
interface DataItem {
  name: string;
  value: number;
}

const ScoreCard = [
  {
    cardName: "Environmental",
    percentageCovered: "27",
    cardIcon: ""
  },
  {
    cardName: "Social",
    percentageCovered: "62",
    cardIcon: ""
  },
  {
    cardName: "Governance",
    percentageCovered: "31",
    cardIcon: ""
  },
]

const DashboardContent = () => {
  return (
    <div className={styles.dashboardContent}>
         <h1>Welcome to Impakter Pro !</h1>
         <h4>Your Gateway to Sustainable Innovation and Global Change !</h4>
        <div className={styles.DashboardBox1}>
          <Esgscore percentage={60}/>
          <Questionaire/>
          <EsgScorecard/>
        </div>
        <div className={styles.DashboardBox1}>
          <Taskmanger/>
          <Finance/>
          <Certificate/>
        </div>
        <div className={styles.DashboardBox1}>
          <Ultilitysupplier/>
          <Marketplace/>
          <AIassistant/>
        </div>
        <Esgnews/>
    </div>
  )
}

export default DashboardContent;