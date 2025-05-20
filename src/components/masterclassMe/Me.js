import React from 'react';
import { useState, useEffect } from 'react';
import styles from './Me.module.css';
import imageSrc from "../../images/סילביה וגורג'י.jpeg";

const Who = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={styles.whoContainer}>
      <div className={styles.bgGlow}></div>
      
      {/* תוכן טקסטואלי - צד ימין */}
      <div className={`${styles.contentSection} ${isVisible ? styles.fadeIn : ''}`}>
        <h1 className={styles.name}>
          נעים להכיר, אני <span className={styles.highlightedText}>סילביה מור</span>.
        </h1>
        
        <div className={styles.quote}>
          לאורך השנים השתתפתי באינספור קורסים והשתלמויות – ותמיד חזרתי עם אותה תחושה:
          <br />
          <span className={styles.emphasisText}>כולם מלמדים את אותו הדבר, בלי עומק, בלי שיטה אמיתית, בלי שפה מקצועית.</span>
        </div>
        
        <div className={styles.description}>
          <p className={styles.paragraph}>
            כבוגרת <span className={styles.highlightedWord}>שנקר</span> בעיצוב אופנה, לא הצלחתי להבין –
            <br />
            איך לכל שמלה יש גזרה, מבנה וסדר עבודה... ולשיער? אין כלום. רק <span className={styles.highlightedWord}>אינטואיציה</span>.
          </p>
          
          <p className={styles.paragraph}>
            הכול השתנה כשנסעתי לרוסיה והגעתי אל <span className={styles.highlightedWord}>גיאורגי קוט</span>.
            <br />
            שם הבנתי שיש דרך אחרת:
          </p>
          
          <div className={styles.principlesContainer}>
            <div className={styles.principleItem}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#e5bf9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className={styles.principle}>שיטה</span>
            </div>
            <div className={styles.principleItem}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#e5bf9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="9" y1="9" x2="15" y2="15"/>
                  <line x1="15" y1="9" x2="9" y2="15"/>
                </svg>
              </div>
              <span className={styles.principle}>חוקים</span>
            </div>
            <div className={styles.principleItem}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#e5bf9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <span className={styles.principle}>תיאוריה</span>
            </div>
            <div className={styles.principleItem}>
              <div className={styles.principleIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#e5bf9e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="22" y1="12" x2="18" y2="12"/>
                  <line x1="6" y1="12" x2="2" y2="12"/>
                  <line x1="12" y1="6" x2="12" y2="2"/>
                  <line x1="12" y1="22" x2="12" y2="18"/>
                </svg>
              </div>
              <span className={styles.principle}>דיוק</span>
            </div>
          </div>
          
          <div className={styles.glassPanel}>
            <p className={styles.panelText}>
              הבנתי שאפשר ללמוד לסרק מתוך <span className={styles.accentText}>הבנה מלאה</span> – ולא מתוך ניסוי וטעייה.
              <br />
              מאז אני עובדת באותה שיטה שהבאתי מרוסיה – כזו שמעניקה <span className={styles.accentText}>שליטה</span>, <span className={styles.accentText}>ביטחון</span> ותוצאות ברמה הגבוהה ביותר.
            </p>
            <div className={styles.invitationText}>
              והיום – אני מזמינה גם אותך ללמוד אותה...
            </div>
          </div>
        </div>
      </div>
      
      {/* תמונה - צד שמאל */}
      <div className={`${styles.imageSection} ${isVisible ? styles.slideIn : ''}`}>
        <div className={styles.imageFrame}>
          <img 
            src={imageSrc} 
            alt="סילביה מור" 
            className={styles.profileImage} 
          />
          <div className={styles.imageBorder}></div>
        </div>
      </div>
    </div>
  );
};

export default Who;