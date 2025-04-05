import React, { useRef, useEffect, useState } from 'react';
import styles from './FixedFirstScreen.module.css';
import silvia from "../images/סילביה מעיל שחור.png";
import { PointerIcon } from 'lucide-react';
import Popped from '../components/poppedUpWindow/Popped';

const FixedFirstScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  useEffect(() => {
    // Add a small delay for the animation to be more noticeable
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <div className={`${styles.content} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.mainContent}>
            <div className={styles.contentGrid}>
              <div className={`${styles.imageContainer} ${isVisible ? styles.slideIn : ''}`}>
                <div className={styles.imageWrapper}>
                  <img
                    src={silvia}
                    alt="סילביה מור"
                    className={styles.heroImage}
                  />
                  <div className={styles.imageGlow} />
                </div>
              </div>

              <div className={`${styles.textContent} ${isVisible ? styles.fadeIn : ''}`}>
                <h1 className={styles.mainTitle}>
                  <span>להצטרף לקורס שישנה לך את הקריירה</span>
                  <span className={styles.highlightText}> ב-4 מפגשים בלבד</span>
                </h1>
                
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>
                    השתלמות תסרוקות מקצועית בת 4 מפגשים בהדרכת סילביה מור שתגרום לך להפסיק לפחד מתסרוקות מורכבות, ללמוד להכין סוגי שיער שונים, להפסיק להסתכל על מעצבי השיער האחרים שעובדים חזק ובביטחון מלא, ותיתן לך את כל הכלים להפוך למעצבי שיער מובילים בתחום.
                  </p>
                  <p className={styles.description}>
                    <strong style={{fontFamily:"Assistant"}}>
                      בקורס תקבלו את התיאוריה הייחודית שהבאתי מרוסיה, שתיתן לכם ביטחון מקצועי מלא ויכולת לבצע כל תסרוקת לכל סוג שיער.
                    </strong>
                  </p>
                </div>

                <button onClick={handleButtonClick} className={styles.ctaButton}>
                  <div className={styles.buttonContent}>
                    <span className={styles.buttonIcon}>
                      <PointerIcon size={24} strokeWidth={1.5} />
                    </span>
                    <span className={styles.buttonText}>בואו ללמוד לסרק בביטחון</span>
                  </div>
                  <div className={styles.buttonGlow} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </div>
  );
};

export default FixedFirstScreen;