import React, { useEffect, useState } from 'react';
import styles from './EightScreen.module.css';
import image1 from "../images/סילביה מור תסרוקות 11.png"
import image2 from "../images/סילביה מור תסרוקות 12.png"
import image3 from "../images/סילביה מור תסרוקות 4.png"
import image4 from "../images/סילביה מור תסרוקות 9.png"
import people from "../Icons/wired-outline-314-three-avatars-icon-calm-loop-smooth.json"
import teach from "../Icons/wired-outline-689-speaker-lecturer-female-hover-pinch.json"
import IconTextComponent from '../components/can/Can';
import barbershop from "../Icons/wired-outline-712-woman-style-10-hover-pinch.json"
import AboutMe from '../components/me/Me';
const ParallaxQuote = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('parallax-container');
      if (element) {
        const rect = element.getBoundingClientRect();
        const scrollPercentage = -rect.top / (rect.height - window.innerHeight);
        setScrollPosition(scrollPercentage * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <>
    <div id="parallax-container" className={styles.container}>
      <img 
        src={image1} 
        alt="Decorative 1"
        className={styles.image1}
        style={{
          transform: `translateY(${scrollPosition * 0.005}px)`,
          transition: 'transform 1.2s ease-out'
        }}
      />
      <img 
        src={image2} 
        alt="Decorative 2"
        className={styles.image2}
        style={{
          transform: `translateY(${scrollPosition * -0.008}px)`,
          transition: 'transform 1.2s ease-out'
        }}
      />
      <img 
        src={image3} 
        alt="Decorative 3"
        className={styles.image3}
        style={{
          transform: `translateY(${scrollPosition * 0.007}px)`,
          transition: 'transform 1.2s ease-out'
        }}
      />
      <img 
        src={image4} 
        alt="Decorative 4"
        className={styles.image4}
        style={{
          transform: `translateY(${scrollPosition * -0.006}px)`,
          transition: 'transform 1.2s ease-out'
        }}
      />
      
      <blockquote className={styles.quote}>
        "אני לא מוכרת חלומות - אני מלמדת תיאוריות שעובדות"
      </blockquote>
    </div>

    <div className={styles.subtitle}>עברתי את מה שאת עוברת – ולמדתי איך להפוך את החוסר ביטחון למומחיות אמיתית.</div>
    <div className={styles.description}>על בשרי חוויתי את השינוי. הייתי בדיוק איפה שאתם נמצאים - חסרת ביטחון, מתוסכלת, מפחדת מתסרוקות מורכבות , לא היה פניות של כלות  עד שגיליתי את התיאוריה הייחודית ברוסיה שהפכה את הקריירה שלי לבינלאומית .</div>
    <div className={styles.row}>
        <IconTextComponent text="ממספרה קטנה הפכתי לאקדמיה מובילה בתחום התסרוקות " icon={barbershop}/>
        <IconTextComponent text="ממעצבת שיער מתוסכלת הפכתי למורה בינלאומית" icon={teach}/>
        <IconTextComponent text="הכשרתי מאות בוגרים מצליחים ברחבי הארץ" icon={people}/>
    </div>
    <AboutMe/>
    </>
};

export default ParallaxQuote;