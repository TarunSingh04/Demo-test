"use client"
import React, { useState } from 'react';
import styles from "./style.module.scss";

const Achievement = () => {
    return (
      <div>
        <h2>Achievement</h2>
        <p>Content for the Achievement tab goes here.</p>
      </div>
    );
  };
  
  
  const Measurement = () => {
    return (
      <div>
        <h2>Measurement</h2>
        <p>Content for the Measurement tab goes here.</p>
      </div>
    );
  };
  
  
  const Pathway = () => {
    return (
      <div>
        <h2>Pathway</h2>
        <p>Content for the Pathway tab goes here.</p>
      </div>
    );
  };
  
  
  const Inprogress = () => {
    return (
      <div>
        <h2>Inprogress</h2>
        <p>Content for the Inprogress tab goes here.</p>
      </div>
    );
  };

const Overview = () => {
    const [activeTab, setActiveTab] = useState<string>('Achievement');
    const renderComponent = () => {
      switch (activeTab) {
        case 'Achievement':
          return <Achievement />;
        case 'Measurement':
          return <Measurement />;
        case 'Pathway':
          return <Pathway />;
        case 'Inprogress':
          return <Inprogress />;
        default:
          return <Achievement />;
      }
    };
  
    return (
      <div className={styles.overviewContainer}>
        <div className={styles.overviewtabs}>
          <button onClick={() => setActiveTab('Achievement')} className={activeTab === 'Achievement' ? styles.activeTab : ''}>Achievement</button>
          <button onClick={() => setActiveTab('Measurement')} className={activeTab === 'Measurement' ? styles.activeTab : ''}>Measurement</button>
          <button onClick={() => setActiveTab('Pathway')} className={activeTab === 'Pathway' ? styles.activeTab : ''}>Pathway</button>
          <button onClick={() => setActiveTab('Inprogress')} className={activeTab === 'Inprogress' ? styles.activeTab : ''}>Inprogress</button>
        </div>
        <div className={styles.content}>
          {renderComponent()}
        </div>
      </div>
    );
  };

export default Overview