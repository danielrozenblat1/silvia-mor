import React, { useState, useEffect } from 'react';
import styles from './CountDown.module.css';

/**
 * קומפוננט ספירה לאחור מותאם אישית שמתחיל כחלק רגיל מהדף ונהפך ל-sticky בעת גלילה
 * @param {Date|string} targetDate - תאריך היעד לספירה לאחור
 * @param {string} title - כותרת לספירה לאחור
 * @param {string} buttonText - טקסט לכפתור
 * @param {string} buttonLink - קישור לכפתור
 * @param {string} message - הודעת וואטסאפ מותאמת אישית
 */
const StickyCountdownComponent = ({
  targetDate,
  title = "עד המאסטרקלאס הבא:",
  buttonText = "להרשמה לחצו כאן!",
  buttonLink = "#signup",
  message
}) => {
  // חישוב זמן שנותר
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isScrolled, setIsScrolled] = useState(false);
  const [containerHeight, setContainerHeight] = useState(125);

  // עדכון הזמן כל שנייה
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // האזין לאירוע גלילה
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // מדידת גובה הקומפוננט
    const handleResize = () => {
      const element = document.querySelector('[class*="countdownContainer"]');
      if (element) {
        setContainerHeight(element.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // מדידה ראשונית
    handleResize();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // פונקציה לפתיחת וואטסאפ
  const handleWhatsAppClick = () => {
    const phoneNumber = "+972526255255";
    const whatsappMessage = message ? message : "היי סילביה ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  // פונקציה לפתיחת אינסטגרם
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/silvia.mor.academy/", "_blank");
  };

  // מציג ספרה הפוכה (יחידות ואז עשרות)
  const renderDigit = (value, unit) => {
    const formattedValue = value.toString().padStart(2, '0');

    return (
      <div className={styles.timeUnit}>
        <div className={styles.digits}>
          {/* ספרת יחידות (ימין) */}
          <div className={styles.digitContainer}>
            <div className={styles.digitCard}>
              {formattedValue[1]}
            </div>
          </div>
          {/* ספרת עשרות (שמאל) */}
          <div className={styles.digitContainer}>
            <div className={styles.digitCard}>
              {formattedValue[0]}
            </div>
          </div>
        </div>
        <div className={styles.unitLabel}>{unit}</div>
      </div>
    );
  };

  return (
    <>
      {/* Placeholder שמחזיק את המקום כשהקומפוננט הופך ל-fixed */}
      {isScrolled && <div style={{ height: `${containerHeight}px` }} />}
      
      <div className={`${styles.countdownContainer} ${isScrolled ? styles.sticky : ''}`}>
        <div className={styles.countdownContent}>
        <div className={`${styles.countdownWrapper} ${isScrolled ? styles.scrolled : ''}`}>
          <div className={styles.countdownTitle}>{title}</div>
          {timeLeft.days !== undefined ? (
            <div className={styles.timerDisplay}>
              {renderDigit(timeLeft.seconds, "שניות")}
              {renderDigit(timeLeft.minutes, "דקות")}
              {renderDigit(timeLeft.hours, "שעות")}
              {renderDigit(timeLeft.days, "ימים")}
            </div>
          ) : (
            <div className={styles.expired}>ההרשמה הסתיימה!</div>
          )}
        </div>

        {/* אייקונים חברתיים */}
        <div className={`${styles.socialIcons} ${isScrolled ? styles.scrolled : ''}`}>
          <button 
            onClick={handleWhatsAppClick}
            className={`${styles.socialIcon} ${styles.whatsappIcon} ${isScrolled ? styles.scrolled : ''}`}
            aria-label="פתח וואטסאפ"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516"/>
            </svg>
          </button>

          <button 
            onClick={handleInstagramClick}
            className={`${styles.socialIcon} ${styles.instagramIcon} ${isScrolled ? styles.scrolled : ''}`}
            aria-label="פתח אינסטגרם"
          >
            <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </button>
        </div>

        <a href={buttonLink} className={`${styles.signupButton} ${isScrolled ? styles.scrolled : ''}`}>
          {buttonText}
        </a>
      </div>
    </div>
    </>
  );
};

export default StickyCountdownComponent;