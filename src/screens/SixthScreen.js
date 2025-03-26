import React from 'react';
import { X, Check, PointerIcon, CheckCircle } from 'lucide-react';
import styles from './SixthScreen.module.css';
import FormScreen from '../components/form/FormScreen';
import {useEffect,useState,useRef} from "react"
import Popped from "../components/poppedUpWindow/Popped"
import Classes from '../components/recommends/Classes';
const SixthScreen = () => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false); // New state for Popped component

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = () => {
    setIsPoppedOpen(true); // Open the Popped component
  };

  const negativePoints = [
    "לאבד לקוחות פוטנציאליים בגלל חוסר ביטחון בתסרוקות מורכבות",
    "להרגיש תקועים עם אותן תסרוקות בסיסיות שוב ושוב",
    "לראות מתחרים גובים מחירים גבוהים בעוד אתם מתפשרים על המחיר שלכם",
    "לפספס הזדמנויות כי אתם לא מרגישים מספיק בטוחים ביכולות שלכם"
  ];

  const positivePoints = [
    "להיות בטוחים בעצמכם מול כל אתגר ותסרוקת שתתבקשו",
    "למשוך לקוחות חדשים באופן טבעי בזכות המוניטין המקצועי שלכם",
    "לדעת את הערך האמיתי שלכם ולגבות בהתאם - בלי להתנצל",
    "להיות מהשמות הראשונים שחושבים עליהם כשמחפשים מעצבי שיער לאירועים"
  ];

  // New points for the feature boxes
  const featurePoints = [
    "רוצים להגדיל נפח עבודה אבל אתם עדין מתקשים לקבל כלות חדשות",
    "עדיין חוששים מתסרוקות מורכבות",
    "עדין לא בטוחים לגבות מחיר ראוי ולא מקבלים מספיק פניות כמו שציפיתם"
  ];

  return <>
    <div className={styles.container}>
       <div className={styles.title}>גלו את התיאוריה הייחודית שהבאתי מרוסיה - והפכו למעצבי שיער ברמה בינלאומית! </div>
      <div className={styles.description} style={{fontFamily:"Assistant"}}>אתם מעצבי שיער מוכשרים ומקצועיים, אבל מרגישים שאתם צריכים להתמקצע קצת יותר.
      </div>

      <div className={styles.description}>אתם מרגישים שחסר לכם טכניקות שהתסרוקות שאתם רואים בפינטרסט ואצל מעצבי שיער עם שם נראות לכם מסובכות או מורכבות. אני חייבת שתבינו.

      </div>
      <div className={styles.subtitle}>שאין דבר כזה תסרוקת מסובכת.</div>
  
      <div className={styles.description}>
      כשעובדים עם תיאוריה וסדר פעולות נכון, היא ממש לא מסובכת
      </div>

      {/* תמונות של תסרוקות בהנפשה */}
      <div className={styles.title}>אז אם אתם</div>
      
      {/* New feature boxes with checkmarks */}
      <div className={styles.featureBoxesContainer}>
        {featurePoints.map((point, index) => (
          <div key={`feature-${index}`} className={styles.featureBox}>
            <div className={styles.featureIconContainer}>
              <CheckCircle className={styles.featureCheckIcon} size={28} color="#D4AF37" />
            </div>
            <div className={styles.featureText}>
              {point}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.description} style={{fontWeight:"bold"}} ><span className={styles.highlight} style={{fontFamily:"Assistant"}}>שורה תחתונה - </span>  אתם עדיין לא מצליחים להגיע לרמה של המעצבים המובילים שסוגרים יותר עבודות ובפחות מאמץ.</div>
      <div className={styles.description} style={{textDecoration:"underline" ,fontWeight:"bold"}}>זה לא חייב להיות ככה</div>
      <div className={styles.description}>יש דרך אחרת. עם התיאוריה הנכונה והכלים המקצועיים, תוכלו להיות בין המובילים בתחום.
      </div>
      <div className={styles.description}  style={{fontFamily:"Assistant",textDecoration:"underline"}}><span className={styles.highlight}>איך אני יודעת? </span></div>
      <div className={styles.description}>כי עברתי את זה בעצמי, וכבר עזרתי למאות מעצבי שיער להגיע לרמה הבאה.</div>
 
    </div>
    <Classes/>
      <button onClick={handleButtonClick} className={styles.ctaButton}>
                  <div className={styles.buttonContent}>
                    <span className={styles.buttonIcon}>
                      <PointerIcon size={24} strokeWidth={1.5} />
                    </span>
               
                    <span className={styles.buttonText}>בואו ללמוד לסרק בביטחון</span>
                  </div>
                  <div className={styles.buttonGlow} />
                </button>
 
           {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
</>
};

export default SixthScreen;