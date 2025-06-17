import React, { useState, useEffect } from 'react';
import styles from './CountDown.module.css';

/**
 * קומפוננט ספירה לאחור מותאם אישית במיכל sticky עם אפקט זכוכית שמופיע בעת גלילה
 * @param {Date|string} targetDate - תאריך היעד לספירה לאחור
 * @param {string} title - כותרת לספירה לאחור
 * @param {string} buttonText - טקסט לכפתור
 * @param {string} buttonLink - קישור לכפתור
 */
const StickyCountdownComponent = ({
  targetDate,
  title = "עד המאסטרקלאס הבא:",
  buttonText = "להרשמה לחצו כאן!",
  buttonLink = "#signup"
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={`${styles.stickyContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.stickyContent}>
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

        <a href={buttonLink} className={`${styles.signupButton} ${isScrolled ? styles.scrolled : ''}`}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default StickyCountdownComponent;
