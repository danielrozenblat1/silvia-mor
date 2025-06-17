import React, { useEffect, useState } from "react";
import styles from "./FirstScreen.module.css";
import silvia from "../../images/סילביה תמונה ראשית מאסטרקלאס.png";

import StickyCountdownComponent from "../../components/countdown/CountDown";
// Import your icons here or use inline SVGs

const FirstScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${styles.pageContainer} ${isVisible ? styles.visible : ''}`}>

      <div className={styles.englishTitle}>Hollywood Waves Masterclass</div>
   
      
      <div className={styles.container}>
        <div className={styles.bgPattern}></div>
        <div className={styles.bgGlow}></div>
        
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <div className={styles.becomeText}>מאסטר קלאס - גלי הוליווד</div>
            <h1 className={styles.mainTitle}>
              <div className={styles.titleContainer}>
                <span className={styles.fancyText}>כל הסודות והטכניקות שהבאתי מרוסיה</span>
                <span className={styles.fancyText}>
                <span className={styles.highlightedeText}>בתוך 8 שעות בלבד</span>
                  <div className={styles.underlineContainer}>
                    <div className={styles.underline}></div>
                    <div className={styles.underlineShadow}></div>
                  </div>
                </span>
              </div>
            </h1>
            
            <div className={styles.featuresContainer}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {/* New feminine hairstyle icon - thinner strokes */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <path d="M4 19c.96-3.5 2.58-6 5-6 1.65 0 3.13 1.2 4 3" />
                    <path d="M15 13c1.24-1.3 3.5-1.7 5-1 .5 3-1 6-1 6" />
                    <path d="M6 11c0-3.75 3-7.5 6-7.5s6 3.75 6 7.5c0 0-1.5 1.5-6 1.5s-6-1.5-6-1.5z" />
                    <path d="M12 3.5V3" />
                    <path d="M20 9c.6 0 1-.4 1-1S20.6 7 20 7s-1 .4-1 1 .4 1 1 1z" />
                    <path d="M4 9c.6 0 1-.4 1-1s-.4-1-1-1-1 .4-1 1 .4 1 1 1z" />
                  </svg>
                </div>
                <div className={styles.featureText}>2 תסרוקות על מודליסטית</div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {/* People icon - thinner strokes */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className={styles.featureText}>ערכת מתנה מקצועית</div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {/* Gift icon - thinner strokes */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <polyline points="20 12 20 22 4 22 4 12"></polyline>
                    <rect x="2" y="7" width="20" height="5"></rect>
                    <line x1="12" y1="22" x2="12" y2="7"></line>
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                </div>
                <div className={styles.featureText}>סרטון הדרכה במתנה</div>
              </div>
            </div>
            
  
            <button className={styles.ctaButton}>
              <span>לתפוס מקום במאסטר קלאס</span>
              <div className={styles.buttonGlow}></div>
            </button>

            <div className={styles.limitedSeatsNotice}>
              שימו לב - המאסטר קלאס יהיה עד 50 משתתפים בלבד !
            </div>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imagePlaceholder}>
              <img className={styles.image} src={silvia} alt="סילביה מאסטרקלאס" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstScreen;