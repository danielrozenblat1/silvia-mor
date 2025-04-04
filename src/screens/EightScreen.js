import React from 'react';
import styles from './EightScreen.module.css';
import { Building2, GraduationCap, Users, FileText } from 'lucide-react';
import backgroundvideo from "../components/videos/סילביה וגורג'י חותמים.mp4";
import Students from '../components/recommends/Students';
import TypingEffect from './TypingScreen';

const IconText = ({ icon: Icon, text }) => (
  <div className={styles.iconTextContainer}>
    <Icon className={styles.icon} size={32} strokeWidth={1} color="white" />
    <span className={styles.text}>{text}</span>
  </div>
);

const EightScreen = () => {
  // Array of quotes to cycle through
  const quotes = [
    "אני לא מוכרת חלומות - אני מלמדת תיאוריות שעובדות",

  ];
  // "כל אחד יכול להיות מעצב שיער מוביל - עם השיטה הנכונה",
  // "אקדמיה לתסרוקות - לא עוד קורס, אלא דרך חיים מקצועית",
  // "ביטחון מקצועי נרכש דרך טכניקה מושלמת"
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.container}>
        <div className={styles.overlay}></div>
        <video 
          className={styles.backgroundVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={backgroundvideo} type="video/mp4" />
        </video>

        {/* Replace static quote with typing effect component */}
        <TypingEffect quotes={quotes} />
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.subtitle}>
          עברתי את מה שאת עוברת – ולמדתי איך להפוך את החוסר ביטחון למקצועיות 
        </div>
        <div className={styles.description}>
          הייתי בדיוק איפה שאתם נמצאים - חסרת ביטחון, מתוסכלת, מפחדת מתסרוקות מורכבות , לא היה פניות של כלות  שילמתי אלפי שקלים להשתלמויות וקורסים 
        </div>
        <div className={styles.subtitle}>
          עד שגיליתי את התיאוריה הייחודית ברוסיה שהפכה את הקריירה שלי לבינלאומית .
        </div>
        <div className={styles.iconTextList}>
          <IconText 
            icon={Building2} 
            text="ממספרה קטנה הפכתי לאקדמיה מובילה בתחום התסרוקות"
          />
          <IconText 
            icon={GraduationCap} 
            text="ממעצבת שיער מתוסכלת למורה בינלאומית"
          />
          <IconText 
            icon={Users} 
            text="מאות בוגרים מצליחים ברחבי הארץ"
          />
          <IconText 
            icon={FileText} 
            text="תיק עבודות עשיר והמלצות חמות מכלות"
          />
        </div>
        <div className={styles.subtitle}>
          אני לא אומרת את זה כדי להתפאר - אני אומרת את זה כי כל אחד מסוגל להיות ברמה גבוהה 
        </div>
        <div className={styles.description}>
          אחרי שנים של לימודים בארץ ובחו"ל, הכשרות מקצועיות, ולימוד התיאוריה הייחודית מהמאסטר גיורגי קוט, אני יכולה לומר בפה מלא: 
יש לי את כל הכלים להפוך אתכם למעצבי שיער מובילים, להעניק לכם ביטחון מקצועי מלא, וללמד אתכם איך לבצע כל תסרוקת בצורה מושלמת.
        </div>
        <Students/>
        <div className={styles.subtitle}>
          הקורס שלי מדבר בעד עצמו – וזה מה שהתלמידים שלי מספרים
        </div>
        {/* סרטוני המלצות */}
      </div>
    </div>
  );
};

export default EightScreen;