import React from 'react';
import { Check } from 'lucide-react';
import styles from './SeventhScreenFixed.module.css';
import silvia from "../images/סילביה אצל גורגי.png"
import Stats from '../components/stats/Stats';

const StyledLayout = () => {
  const listItems = [
    'איך להפסיק לפחד מתסרוקות מורכבות?',
    'איך להפוך למעצב שיער מבוקש?',
    'איך לגבות מחיר ראוי על העבודה שלכם?'
  ];

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Text Content - Right Side */}
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              <span className={styles.titleText}>אחרי שהכשירה</span>
              <span className={styles.titleBreak}></span>
              <span className={styles.titleText}>מאות מעצבי</span>
              <span className={styles.titleBreak}></span>
              <span className={styles.titleText}>שיער מובילים</span>
              <span className={styles.titleBreak}></span>
              <span className={styles.titleText}>סילביה מור חושפת</span>
              <span className={styles.titleBreak}></span>
              <span className={styles.titleText}>את התיאוריה הייחודית</span>
              <span className={styles.titleBreak}></span>
              <span className={styles.titleText}>שהביאה מרוסיה</span>
            </h2>
          </div>

          {/* Image Section - Center */}
          <div className={styles.imageSection}>
            <img
              src={silvia}
              alt="Portrait"
              className={styles.mainImage}
            />
          </div>

          {/* Checkmarks - Left Side, Vertical */}
          <div className={styles.checkmarksContainer}>
            {listItems.map((text, index) => (
              <div key={index} className={styles.checkmarkItem}>
                <div className={styles.checkmarkIcon}>
                  <Check className={styles.checkmark} />
                </div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Stats/>
    </div>
  );
};

export default StyledLayout;