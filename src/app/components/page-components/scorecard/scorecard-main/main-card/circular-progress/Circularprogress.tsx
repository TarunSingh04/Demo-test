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
}

const progressData: ProgressItem[] = [
  { label: 'Environmental', value: 40, color: '#34D399' },
  { label: 'Social', value: 30, color: '#60A5FA' },
  { label: 'Governance', value: 30, color: '#F59E0B' },
];

const CircularProgressItem: React.FC<ProgressItem> = ({ label, value, color }) => {
  const { value: countUpValue } = useCountUp({
    isCounting: true,
    end: value,
    duration: 2,
  });

  return (
      <div className={styles.progressiveBox}>
     <div className={styles.progressiveContainer}>
     <CircularProgress
        size="lg"
        determinate
        value={value}
        sx={{
          '--CircularProgress-size': '180px',
          '--CircularProgress-trackThickness': '30px',
          '--CircularProgress-progressThickness': '22px',
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
            fontSize: "35px",
            marginLeft: "5px",
            color:"#111"
          }}
        >
          {Math.round(Number(countUpValue))}%
        </Typography>
      </CircularProgress>
     </div>
      <Typography level="body-sm" fontWeight="bold" sx={{
            color:"#111",
            fontSize: "18px",
            marginTop:"12px"
          }}>
        {label}
      </Typography>
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
      {isVisible && progressData.map((item, index) => (
        <CircularProgressItem key={index} {...item} />
      ))}
    </div>
  );
};

export default CircularProgressCountUp;