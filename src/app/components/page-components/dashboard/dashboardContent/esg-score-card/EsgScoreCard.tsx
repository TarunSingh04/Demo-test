"use client"
import React, { useState, useEffect } from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';
import styles from "./styles.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

interface ProgressItem {
  label: string;
  value: number;
  color: string;
  description:string;
}

const progressData: ProgressItem[] = [
  { label: 'Environmental', value: 40, color: '#34D399', description: "Reflects stakeholder-approved sustainability policies." },
  { label: 'Social', value: 30, color: '#60A5FA',description:"Indicates progress on socially responsible practices."},
  { label: 'Governance', value: 30, color: '#F59E0B',description: "Shows the alignment of governance practices with updated policies."},
];

const CircularProgressItem: React.FC<ProgressItem> = ({ label, value, color,description }) => {
  const { value: countUpValue } = useCountUp({
    isCounting: true,
    end: value,
    duration: 2,
  });

  return (
      <div className={styles.progressiveContainer}>
      <CircularProgress
        size="lg"
        determinate
        value={value}
        sx={{
          '--CircularProgress-size': '94px',
          '--CircularProgress-trackThickness': '10px',
          '--CircularProgress-progressThickness': '9px',
          '--CircularProgress-trackColor': `${color}4D`,
          '--CircularProgress-progressColor': color,
          position: 'relative',
        }}
      >
        <Typography
          level="body-lg"
          fontWeight="xl"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: '700',
            fontSize: "23px",
            marginLeft: "5px",
            color:"#111"
          }}
        >
          {Math.round(Number(countUpValue))}%
        </Typography>
      </CircularProgress>
      <Typography level="body-sm" fontWeight="bold" sx={{
            color:"#111",
            marginLeft:"20px",
            fontSize: "18px"
          }}>
        {label}
        <p className={styles.scoreSubtext}>{description}</p>
      </Typography>
      <BsThreeDotsVertical className={styles.takeAction}/>
      </div>
  );
};

const CircularProgressCountUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
    className={styles.scorecard}
    >
        <h4>ESG scores</h4>
      {isVisible && progressData.map((item, index) => (
        <CircularProgressItem key={index} {...item} />
      ))}
    </div>
  );
};

export default CircularProgressCountUp;