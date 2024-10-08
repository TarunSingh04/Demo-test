"use client";
import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import styles from "./styles.module.scss";
import { IoInformationCircleOutline } from "react-icons/io5";

interface EsgScoreProps {
  percentage: number;
}

const Esgscore: React.FC<EsgScoreProps> = ({ percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to control hover

  const getColor = () => {
    if (currentPercentage > 80) {
      return "#6e8e7f";
    } else if (currentPercentage > 69) {
      return "#b0d1ab";
    } else if (currentPercentage > 39) {
      return "#ecce1d";
    } else if (currentPercentage > 30) {
      return "#ed8a38";
    } else if (currentPercentage > 15) {
      return "#ea5556";
    } else {
      return "#ea5556";
    }
  };

  const getGrade = () => {
    if (currentPercentage > 80) {
      return "A";
    } else if (currentPercentage > 69) {
      return "B";
    } else if (currentPercentage > 39) {
      return "C";
    } else if (currentPercentage > 30) {
      return "D";
    } else if (currentPercentage > 15) {
      return "E";
    } else {
      return "F";
    }
  };

  const getProductInfo = () => {
    if (currentPercentage > 80) {
      return "Congratulation! You've achieved top-tier sustainability. You've earned the Sustainability Badge, and we are proud to partner with you to push you to even greater heights.";
    } else if (currentPercentage > 69) {
      return "Impressive Progress! Your score indicates that you are close to achieving full sustainability! You've earned the Sustainability Badge, and we are excited to help you reach your full potential and advance to the next level.";
    } else if (currentPercentage > 39) {
      return "Great Progress! You've established a strong foundation in sustainability practices and have been awarded the Sustainability Badge! Let's help you advance further and achieve sustainability leadership.";
    } else if (currentPercentage > 30) {
      return "You're on the Right Path! Your score indicates room for growth. Let's get you started turning your commitment into sustainability progress.";
    } else if (currentPercentage > 15) {
      return "Let's Make a Positive Change Together! Your score is just a starting point. We understand this might seem overwhelming, but we are here to guide you on your sustainability progress every step of the way.";
    } else {
      return "Let's Make a Positive Change Together! Your score is just a starting point. We understand this might seem overwhelming, but we are here to guide you on your sustainability progress every step of the way.";
    }
  };

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      setCurrentPercentage((prev) => {
        if (prev < percentage) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 15);
  }, [percentage]);

  const data = [
    { name: "Progress", value: currentPercentage },
    { name: "Remaining", value: 100 - currentPercentage },
  ];

  return (
    <div className={styles.container}>
      <h4>Overall Sustainability Score</h4>
      <div className={styles.subcontainer}>
        <div className={styles.progressRingWrapper}>
          <PieChart width={250} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={110}
              startAngle={90}
              endAngle={-270}
              paddingAngle={2}
              dataKey="value"
              animationDuration={500}
              animationEasing="ease-out"
            >
              <Cell key="progress" fill={getColor()} />
              <Cell key="remaining" fill="#e6e6e6" />
            </Pie>
          </PieChart>

          <div className={styles.percentageText}>
            <p>{getGrade()}</p>
            <p className={styles.percentageCovered}>{currentPercentage}%</p>
          </div>
        </div>

        <div className={styles.note}>
          <p>{getProductInfo()}</p>
        </div>
      </div>
    </div>
  );
};

export default Esgscore;
