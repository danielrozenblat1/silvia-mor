import React, { useEffect, useRef } from 'react';
import styles from './MasterclassSilabus.module.css';
import { Clock, Scissors, Coffee, Settings, MessageCircle, Gift, Book, Award, Users } from 'lucide-react';
import { Player } from '@lordicon/react';
import arrive from "../../Icons/wired-outline-1871-red-carpet-hover-pinch.json"
import hair1 from "../../Icons/wired-outline-1570-hair-dryer-hover-pinch.json"
import breaks from "../../Icons/wired-outline-22-play-pause-morph-rotation.json"
import hair2 from "../../Icons/wired-outline-1591-hair-brush-hover-pinch.json"
import question from "../../Icons/wired-outline-424-question-bubble-hover-wiggle.json" 
const WorkshopSection = () => {
      const handleComplete = () => {
          setTimeout(() => {
            playerRef1?.current?.playFromBeginning();
          }, 2500); // play again after 2.5 seconds
        };
        const playerRef1 = useRef(null);
      useEffect(()=>{
        playerRef1?.current?.playFromBeginning();
      },[])
  return (
    <div className={styles.container} style={{background: '#000', padding: '30px'}}>
      <div className={styles.glassCard}>
        <div className={styles.scheduleSection}>
          <h2 className={styles.title}>אזזז.. מה הולך לקרות ביום עצמו</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                <div className={styles.icon}><Player  icon={arrive} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
                </div>
                <div className={styles.timelineContent}>
                  <p>הגעה + רישום</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                <div className={styles.icon}><Player  icon={hair1} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
                </div>
                <div className={styles.timelineContent}>
                  <p>תסרוקת ראשונה</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                <div className={styles.icon}><Player  icon={breaks} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
                </div>
                <div className={styles.timelineContent}>
                  <p>הפסקה</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                <div className={styles.icon}><Player  icon={hair2} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
                </div>
                <div className={styles.timelineContent}>
                  <p>תסרוקת שנייה</p>
                </div>
              </div>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                <div className={styles.icon}><Player  icon={question} ref={playerRef1} size="100%" onComplete={handleComplete}></Player></div>
                </div>
                <div className={styles.timelineContent}>
                  <p>שאלות ותשובות</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.title}>מה אתם הולכים לקבל ביום הזה?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Clock className={styles.featureIcon} />
              </div>
              <div className={styles.benefitContent}>
                <p>8 שעות של למידה- שממנו תצאו עם כלים ביד.</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Book className={styles.featureIcon} />
              </div>
              <div className={styles.benefitContent}>
                <p>חשיפה לשיטה שהבאתי מרוסיה - סדר פעולות ברור, חוקים, תיאוריה – שיטה שעובדת.</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Settings className={styles.featureIcon} />
              </div>
              <div className={styles.benefitContent}>
                <p>טכניקות מתקדמות וטיפים - כל מה שלא מלמדים בקורסים רגילים.</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Award className={styles.featureIcon} />
              </div>
              <div className={styles.benefitContent}>
                <p>עולם מקצועי חדש שלא הכרתם- תבינו מה מבדל אתכם כאנשי מקצוע – ואיך לפרוץ באמת.</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Users className={styles.featureIcon} />
              </div>
              <div className={styles.benefitContent}>
                <p>קהילה וחוויה מעצימה יום עם אנשים כמוכם שרוצים לגדול, ללמוד ולהתפתח.</p>
              </div>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <Gift className={styles.featureIcon} />
              </div>
              <div className={styles.benefitContent}>
                <p>מתנה ממני לסיום- הפתעה שתחכה לכם – כי מגיע לכם לזכור את היום הזה.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopSection;