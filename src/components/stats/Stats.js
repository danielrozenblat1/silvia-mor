import { useState, useEffect, useRef } from 'react';
import styles from './Stats.module.css';

const Stats = () => {
  const stats = [
    {
      target: 500,
      text: 'בוגרים/ות מצליחים/ות עברו באקדמיה',
      prefix: 'מעל'
    },
    {
      target: 97,
      text: 'מהבוגרים/ות מדווחים/ות על עלייה בביטחון המקצועי',
      suffix: '%'
    },
    {
      target: 85,
      text: 'מהבוגרים/ות העלו את המחירים שלהם תוך 3 חודשים!!!',
      suffix: '%'
    },
    {
      target: 100,
      text: 'מהבוגרים/ות יכולים/ות לבצע כל תסרוקת שמראים להם',
      suffix: '%'
    }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      {
        threshold: 0.1 // Start animation when 10% of the component is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Don't start counting until visible

    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timers = stats.map((stat, index) => {
      let current = 0;
      const increment = stat.target / steps;
      
      return setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timers[index]);
        }
        
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.round(current);
          return newCounts;
        });
      }, interval);
    });

    // Cleanup function to clear all intervals
    return () => timers.forEach(timer => clearInterval(timer));
  }, [isVisible]); // Only run when isVisible changes

  return (
    <div className={styles.statsContainer} ref={containerRef}>
      {stats.map((stat, index) => (
        <div key={index} className={styles.statItem}>
          <div className={styles.number}>
            {stat.prefix && `${stat.prefix} `}
            {counts[index]}
            {stat.suffix && <span className={styles.plusSign}>{stat.suffix}</span>}
          </div>
          <div className={styles.text}>{stat.text}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;