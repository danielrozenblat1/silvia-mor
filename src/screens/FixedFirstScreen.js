import React, { useRef, useEffect, useState } from 'react';
import styles from './FixedFirstScreen.module.css';
import silvia from "../images/סילביה מור ראשית.png"
import background from "../components/videos/סרטון זהב.mp4"
import { PointerIcon } from 'lucide-react';
const FixedFirstScreen = () => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={styles.video}
          >
            <source src={background} type="video/mp4" />
          </video>
          <div className={styles.overlay} />
        </div>

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
                <div className={styles.decorativeLine} />
                <h1 className={styles.mainTitle}>
                  <span>הקורס שימלא לך את היומן</span>
                  <span className={styles.highlightText}> ויזניק את הקריירה שלך תוך 4 מפגשים</span>
                </h1>
                
                <div className={styles.descriptionContainer}>
                  <p className={styles.description}>
               
                    במהלך הקורס תקבלי כלים לדעת להכין סוגי שיער שונים, להפסיק להסתכל על מעצבות השיער האחרות שעובדות חזק ובביטחון מלא, להתמודד בקלות עם תסרוקות מורכבות וכל מה שאת צריכה כדי להפוך למעצבת שיער מובילה בתחום.
                  </p>
                  <p className={styles.description}>
                      <strong style={{fontFamily:"Assistant", }}>בקורס תקבלי את התיאוריה הייחודית שהבאתי מרוסיה </strong>שתיתן לך ביטחון מקצועי מלא ויכולת לבצע כל תסרוקת לכל סוג שיער.
                  </p>
                </div>

                <button onClick={scrollToForm} className={styles.ctaButton}>
                  <div className={styles.buttonContent}>
                  <span className={styles.buttonIcon}>
               <PointerIcon size={24} strokeWidth={1.5} />
          </span>
                    <span className={styles.buttonText}>מוכנה למלא את היומן לעונת החתונות הבאה?</span>
                  </div>
                  <div className={styles.buttonGlow} />
                </button>

               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedFirstScreen;