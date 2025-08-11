import React, { useState, useEffect } from 'react';
import styles from './Floating.module.css';

const FloatingMasterclass = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 500);
    };

    window.addEventListener('scroll', handleScroll);
    
    // בדיקה ראשונית במקרה שהדף כבר נגלל
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const handleReservation = () => {
    // פתיחת הקישור בחלון חדש
    window.open('https://secure.cardcom.solutions/EA/EA5/rBHGNxddek6HJ87ottzr4w/PaymentSP', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.demoContainer}>
  
  
       
      {/* הסקשן הצף */}
      {isVisible && (
        <div className={styles.floatingSection}>
          <div className={styles.ctaContainer}>
            <div className={styles.glassWrapper}>
              <div className={styles.masterclassInfo}>
                המאסטר קלאס הקרוב ב-<span className={styles.dateHighlight}>7.9.25</span>
              </div>
              <button className={styles.ctaButton} onClick={handleReservation}>
                לחצו כדי לשריין מקום
              </button>
                {/* <div className={styles.masterclassInfo}>
               מספר טלפון לבירורים<span className={styles.dateHighlight}> 0524463555</span>
              </div> */}
            </div>
             
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingMasterclass;