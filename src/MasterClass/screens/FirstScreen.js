import React, { useEffect, useState } from "react";
import styles from "./FirstScreen.module.css";
import silvia from "../../images/סילביה מסך ראשי מאסטרקלאס.png";

import StickyCountdownComponent from "../../components/countdown/CountDown";

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
                <span className={styles.fancyText}>להפוך למעצבי שיער שעובדים בצורה נכונה ושולטים בכל תסרוקת</span>
                <span className={styles.fancyText}>
                <span className={styles.highlightedeText}>בתוך 8 שעות בלבד</span>
                  <div className={styles.underlineContainer}>
                    <div className={styles.underline}></div>
                    <div className={styles.underlineShadow}></div>
                  </div>
                </span>
              </div>
            </h1>

            {/* התמונה - תוצב מתחת לכותרת במסכי טלפונים */}
            <div className={styles.mobileImageSection}>
              <div className={styles.imagePlaceholder}>
                <img className={styles.image} src={silvia} alt="סילביה מאסטרקלאס" />
              </div>
            </div>
            
            <div className={styles.featuresContainer}>

              {/* תסרוקות על מודליסטית */}
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {/* אייקון מספריים - מתאים לתסרוקות */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={styles.icon}>
                    <circle cx="6" cy="6" r="3" />
                    <circle cx="18" cy="6" r="3" />
                    <line x1="8.12" y1="8.12" x2="12" y2="12" />
                    <line x1="15.88" y1="8.12" x2="12" y2="12" />
                    <line x1="12" y1="12" x2="12" y2="22" />
                  </svg>
                </div>
                <div className={styles.featureText}>2 תסרוקות על מודליסטית</div>
              </div>

              {/* ערכת מתנה מקצועית */}
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {/* אייקון תיק או קופסה - מתאים לערכה מקצועית */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7V6a4 4 0 10-8 0v1H4v13h16V7h-4zM8 6a4 4 0 118 0v1H8V6z" />
                  </svg>
                </div>
                <div className={styles.featureText}>ערכת מתנה מקצועית</div>
              </div>

              {/* סרטון הדרכה במתנה */}
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  {/* אייקון וידאו או פליי - מתאים לסרטון הדרכה */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" className={styles.icon}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75A1 1 0 007 8.25v7.5a1 1 0 001.234.982l6.518-3.75a1 1 0 000-1.764z" />
                    <rect width="20" height="14" x="2" y="5" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
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
          
          {/* התמונה המקורית - תוצג רק במסכי מחשב */}
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