import React from 'react';
import styles from './SecondScreen.module.css';
import { Camera, Calendar, Star } from 'lucide-react';

const MasterClass = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.bgGlow}></div>
      
      {/* Background images */}
      <div className={styles.bgImageTop}></div>
      <div className={styles.bgImageBottom}></div>
      
     
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <p className={styles.becomeText}>
              את <span className={styles.highlightedWord}>משקיעה</span>, <span className={styles.highlightedWord}>לומדת</span>, <span className={styles.highlightedWord}>מוציאה הרבה כסף</span> אבל עדיין מרגישה שמשהו חסר שמשהו לא הולך שיש דברים שעדיין לא למדת.
              היומן שלך לא מלא כמו שרצית ועדיין אין לך את הביטחון לקבל כלה? בקיצור הבנת.
            </p>
            <p className={styles.becomeText}>
              כמעצבת שיער גם אני חוויתי את אותן תחושות הייתי שם ואז הבנתי שאני זו לו הבעיה.
            </p>
            
            <div className={styles.mainTitle}>
              <span className={styles.fancyText}>
                את יודעת שאת רוצה לעלות רמה – אבל לא יודעת לשים את הנקודה על מה באמת חסר לך?
              </span>
            </div>
            
            <p className={styles.becomeText}>
              לא כל יום אני עושה מאסטר קלאס<br />
              אבל כשאני עושה, הוא חייב להיות מיוחד וברמה הכי גבוהה.<br />
              כבן אדם שהוא פרפקציוניסט אין אצלי באמצע.
            </p>

            <div className={styles.mainTitle}>
              <span className={styles.becomeText}>במאסטר קלאס הקרוב</span>
              <span className={styles.fancyText}>
                אני הולכת לחשוף בפנייך את השיטה שחיפשתי שנים.
              </span>
            </div>

            <div className={styles.featuresContainer}>
              <div className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <Camera className={styles.icon} />
                </div>
                <p className={styles.featureText}>איך להתחיל לסרק כלות בביטחון</p>
              </div>
              
              <div className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <Calendar className={styles.icon} />
                </div>
                <p className={styles.featureText}>איך לעבוד לפי סדר פעולות ברור</p>
              </div>
              
              <div className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <Star className={styles.icon} />
                </div>
                <p className={styles.featureText}>איך להתחיל לעלות מחירים</p>
              </div>
            </div>

            <p className={styles.joinText}>והכי חשוב</p>
            
            <div className={styles.mainTitle}>
              <span className={styles.fancyText}>
                איך לבלוט בתחום שמלא במעצבי שיער וכולם נראים אותו הדבר.
              </span>
            </div>
            
            <button className={styles.ctaButton}>
              הרשמי עכשיו
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClass;