import React from 'react';
import { Check } from 'lucide-react';
import styles from './SeventhScreenFixed.module.css';
import silvia from "../images/סילביה מור תדמית.jpg"
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
              אחרי שהכשירה
              <br />
              מאות מעצבי
              <br />
              שיער מובילים
              <br />
              סילביה מור חושפת
              <br />
              את התיאוריה הייחודית
              <br />
              שהביאה מרוסיה
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