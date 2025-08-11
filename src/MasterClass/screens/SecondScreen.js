import React from 'react';
import styles from './SecondScreen.module.css';
import { SquareScissors, ListChecks, DollarSign } from 'lucide-react';

const MasterClass = () => {
  const handleButtonClick = () => {
    window.open('https://secure.cardcom.solutions/EA/EA5/rBHGNxddek6HJ87ottzr4w/PaymentSP', '_blank');
  };

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
              אתם <span className={styles.highlightedWord}>משקיעים</span>, <span className={styles.highlightedWord}>לומדים</span>, <span className={styles.highlightedWord}>מוציאים הרבה כסף</span> אבל עדיין מרגישים שמשהו חסר שמשהו לא הולך שיש דברים שעדיין לא למדתם.
              היומן שלכם לא מלא כמו שרציתם ועדיין אין לכם את הביטחון לקבל כלה? בקיצור הבנתם.
            </p>
            <p className={styles.becomeText}>
              כמעצבת שיער גם אני חוויתי את אותן תחושות הייתי שם ואז הבנתי שאני זו לו הבעיה.
            </p>
            
            <div className={styles.mainTitle}>
              <span className={styles.fancyText}>
                אתם יודעים שאתם רוצים לעלות רמה – אבל לא יודעים לשים את הנקודה על מה באמת חסר לכם?
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
                אני הולכת לחשוף בפניכם את השיטה שחיפשתי שנים.
              </span>
            </div>

            <div className={styles.featuresContainer}>
              <div className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <SquareScissors className={styles.icon} />
                </div>
                <p className={styles.featureText}>איך להתחיל לסרק כלות בביטחון</p>
              </div>
              
              <div className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <ListChecks className={styles.icon} />
                </div>
                <p className={styles.featureText}>איך לעבוד לפי סדר פעולות ברור</p>
              </div>
              
              <div className={styles.featureRow}>
                <div className={styles.featureIcon}>
                  <DollarSign className={styles.icon} />
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
     
            <button className={styles.ctaButton} onClick={handleButtonClick}>
              לחצו כאן לשריין מקום במאסטר קלאס
              <div className={styles.buttonGlow}></div>
            </button>
                   
            <p className={styles.limitedSeats}>
              שימו לב - המאסטר קלאס יהיה עד 20 משתתפים בלבד
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClass;