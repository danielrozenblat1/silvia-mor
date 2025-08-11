import React, { useState, useEffect } from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';
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

  const handlePhoneCall = () => {
    window.open('tel:0524463555', '_self');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/silvia.mor.academy/', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('היי סילביה הגעתי מהדף, אשמח לשמוע עוד על המאסטר קלאס הקרוב');
    window.open(`https://wa.me/972524463555?text=${message}`, '_blank', 'noopener,noreferrer');
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
              
              {/* שורת אייקונים */}
              <div className={styles.socialIcons}>
                <div 
                  className={styles.iconWrapper}
                  onClick={handlePhoneCall}
                  title="התקשרו אלינו"
                  role="button"
                  tabIndex={0}
                >
                  <Phone size={20} strokeWidth={1} />
                </div>
                <div 
                  className={styles.iconWrapper}
                  onClick={handleInstagram}
                  title="עקבו באינסטגרם"
                  role="button"
                  tabIndex={0}
                >
                  <Instagram size={20} strokeWidth={1} />
                </div>
                <div 
                  className={styles.iconWrapper}
                  onClick={handleWhatsApp}
                  title="שלחו הודעה בווטסאפ"
                  role="button"
                  tabIndex={0}
                >
                  <MessageCircle size={20} strokeWidth={1} />
                </div>
              </div>
              
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