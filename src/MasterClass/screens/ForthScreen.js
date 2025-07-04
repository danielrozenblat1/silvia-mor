import React from 'react';
import { GraduationCap, BookOpen, Clock, Shield, Award, Zap } from 'lucide-react';
import styles from './ForthScreen.module.css';

const ForthScreen = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.bgGlow}></div>
      <div className={styles.bgImageTop}></div>
      <div className={styles.bgImageBottom}></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <p className={styles.becomeText}>
              המאסטר קלאס הזה נולד כדי לפתוח לכם את הדלת לעבודה <span className={styles.highlightedWord}>מקצועית באמת</span>.
            </p>
            
            <p className={styles.becomeText}>
              אני עושה את זה מתוך רצון לחשוף את <span className={styles.highlightedWord}>השיטה</span>, להעביר אותה הלאה, ולתת לכם את הכלים שלא קיבלתם באף קורס אחר.
            </p>
            
            <p className={styles.becomeText}>
              בדיוק בגלל זה, לשבועיים הקרובים בלבד, אתם יכולים להירשם <span className={styles.highlightedWord}>במחיר השקה מיוחד</span>.
            </p>
            
            <p className={styles.becomeText}>
              כי חשוב לי שתבואו, שתכירו את הדרך – ותתחילו סוף סוף לסרק מתוך <span className={styles.highlightedWord}>ביטחון, שיטה ותוצאה מדויקת</span>.
            </p>
            
            <p className={styles.becomeText}>
              זה לא אתם – זו הדרך שלימדו אתכם.
            </p>
            
            <p className={styles.becomeText}>
              וכמו שלא בונים בניין בלי תוכניות – אי אפשר לעשות תסרוקת בלי סדר פעולות ברור.
            </p>
          </div>
          
          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                  <GraduationCap className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <p>שיטה מקצועית ומדויקת</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                  <BookOpen className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <p>ידע שלא תמצאו בשום מקום אחר</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                  <Clock className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <p>קיצור זמני עבודה משמעותי</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className={styles.ctaButton}>
            להרשמה במחיר הטבה – לחצו כאן
            <div className={styles.buttonGlow}></div>
          </button>
          
          <div className={styles.valueSection}>
            <h2 className={styles.valueTitle}>אז כמה זה באמת שווה??</h2>
            <p className={styles.valueText}>
              הידע שתצאו איתו שווה הרבה 
            </p>
            <p className={styles.valueText}>
              מדובר בידע <span className={styles.highlightedWord}>פרקטי, יישומי ומעמיק</span> – כזה שבאמת יאפשר לכם להרגיש מקצועניים,
              להעלות מחירים בביטחון, לקצר זמני עבודה, ולתת תוצאה שפשוט נראית אחרת.
            </p>
            <p className={styles.valueText}>
              וזה לא רק עניין של כסף – זה הערך שאתם מביאים לעצמכם, לעסק שלכם, ולביטחון שלכם כאנשי מקצוע.
            </p>
          </div>
          
          <div className={styles.timelineContainer}>
            <div className={styles.timeline}>
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                  <Shield className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <p>ביטחון מקצועי אמיתי</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                  <Award className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <p>תסרוקות ברמה אחרת</p>
                </div>
              </div>
              
              <div className={styles.timelineItem}>
                <div className={styles.iconContainer}>
                  <Zap className={styles.icon} />
                </div>
                <div className={styles.timelineContent}>
                  <p>טכניקות עבודה יעילות יותר</p>
                </div>
              </div>
            </div>
          </div>
          
          <button className={styles.ctaButton}>
            להרשמה במחיר הטבה – לחצו כאן
            <div className={styles.buttonGlow}></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForthScreen;