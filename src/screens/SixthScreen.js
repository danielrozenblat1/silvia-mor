import React from 'react';
import { X, Check,PointerIcon } from 'lucide-react';
import styles from './SixthScreen.module.css';
import FormScreen from '../components/form/FormScreen';
import {useEffect,useState,useRef} from "react"
import Popped from "../components/poppedUpWindow/Popped"
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

  return (
    <div className={styles.container}>
       <div className={styles.title}>גלו את התיאוריה הייחודית שהבאתי מרוסיה - והפכו למעצבי שיער ברמה בינלאומית! </div>
      <div className={styles.description} style={{fontFamily:"Assistant"}}>אתם מעצבי שיער מוכשרים ומקצועיים, אבל למדתם במקום שלא מיקצע אתכם.
      </div>

      <div className={styles.description}><span className={styles.highlight} style={{textDecoration:"underline"}}>זה לא שאתם לא טובים</span> זו שיטת הלימוד בארץ שלא נכונה.
 כולם מלמדים אותו הדבר , לעשות סגנון אחד של תסרוקות - מוברש.
בתור מעצבי שיער אתם צריכים לדעת לבצע את כלל הסגנונות.

      </div>
      <div className={styles.subtitle}>אין דבר כזה תסרוקת מסובכת.</div>
  
      <div className={styles.description}>
      כשעובדים עם תיאוריה וסדר פעולות נכון, היא ממש לא מסובכת
      </div>

{/* תמונות של תסרוקות בהנפשה */}
<div className={styles.title}>אז אם אתם</div>
<div className={styles.description}>
רוצים להגדיל נפח עבודה, אבל אתם עדיין מתקשים לקבל כלות חדשות, עדיין חוששים מתסרוקות מורכבות, עדיין לא בטוחים לגבות מחיר ראוי ולא מקבלים מספיק פניות כמו שציפיתם
      </div>
      <div className={styles.description}><span className={styles.highlight}>שורה תחתונה - </span>  אתם עדיין לא מצליחים להגיע לרמה של המעצבים המובילים שסוגרים יותר עבודות ובפחות מאמץ.</div>
      <div className={styles.title}>זה לא חייב להיות ככה</div>
      <div className={styles.description}>יש דרך אחרת. עם התיאוריה הנכונה והכלים המקצועיים, תוכלו להיות בין המובילים בתחום.
      </div>
      <div className={styles.description}  style={{fontFamily:"Assistant",textDecoration:"underline"}}><span className={styles.highlight}>איך אני יודעת? </span></div>
      <div className={styles.description}>כי עברתי את זה בעצמי, וכבר עזרתי למאות מעצבי שיער להגיע לרמה הבאה.</div>
      <button onClick={handleButtonClick} className={styles.ctaButton}>
                  <div className={styles.buttonContent}>
                    <span className={styles.buttonIcon}>
                      <PointerIcon size={24} strokeWidth={1.5} />
                    </span>
                    <span className={styles.buttonText}>בואו ללמוד לסרק בביטחון</span>
                  </div>
                  <div className={styles.buttonGlow} />
                </button>
      {/* <h3 className={styles.subtitle}>אם אתם מזהים את עצמכם באחד מאלה:</h3>
      <div className={styles.listContainer}>
        {negativePoints.map((point, index) => (
          <div key={`negative-${index}`} className={styles.listItem}>
            <X className={styles.negativeMark} size={24} />
            <p>{point}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.subtitle}>דעו שאפשר אחרת:</h3>
      <div className={styles.listContainer}>
        {positivePoints.map((point, index) => (
          <div key={`positive-${index}`} className={styles.listItem}>
            <Check className={styles.positiveMark} size={24} />
            <p>{point}</p>
          </div>
        ))}
      </div> */}
           {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </div>
  );
};

export default SixthScreen;