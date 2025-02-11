import React from 'react';
import { X, Check, ChevronDown } from 'lucide-react';
import styles from './SeventhScreen.module.css';
import FormScreen from '../components/form/FormScreen';
import students from "../images/סילביה מור תלמידים.png"
import Stats from '../components/stats/Stats';
import all from "../images/סילביה מור כולם.png"
const SeventhScreen = () => {
  const negativePoints = [
    "מאבדים לקוחות פוטנציאליים בגלל חוסר ביטחון בתסרוקות מורכבות",
    "מרגישים תקועים עם אותן תסרוקות בסיסיות שוב ושוב",
    "רואים מתחרים גובים מחירים גבוהים בעוד אתם מתפשרים על המחיר שלכם",
    "מפספסים הזדמנויות כי אתם לא מרגישים מספיק בטוחים ביכולות שלכם"
  ];

  const positivePoints = [
    "להיות בטוחים בעצמכם מול כל אתגר ותסרוקת שתתבקשו",
    "למשוך לקוחות חדשים באופן טבעי בזכות המוניטין המקצועי שלכם",
    "לדעת את הערך האמיתי שלכם ולגבות בהתאם - בלי להתנצל",
    "להיות מהשמות הראשונים שחושבים עליהם כשמחפשים מעצבי שיער לאירועים"
  ];

  return <>
    <div className={styles.background}>
<div className={styles.title}>הנתונים מדברים בעד עצמם</div>
  
    <Stats/>
      <h3 className={styles.subtitle}>אם אתם מזהים את עצמכם באחד מאלה:</h3>
      <div className={styles.listContainer}>
        {negativePoints.map((point, index) => (
          <div key={`negative-${index}`} className={styles.listItem}>
            <X className={styles.negativeMark} size={24} />
            <p>{point}</p>
          </div>
        ))}
      </div>

      <h3 className={styles.subtitle}>חשוב לי שתדעו שאפשר אחרת! אתם יכולים:</h3>
      <div className={styles.listContainer}>
        {positivePoints.map((point, index) => (
          <div key={`positive-${index}`} className={styles.listItem}>
            <Check className={styles.positiveMark} size={24} />
            <p>{point}</p>
          </div>
        ))}
      </div>

        <div className={styles.title}>אבל המשותף לכולם הוא</div>
      <div className={styles.middle}><img className={styles.image} src={all} alt="סילביה מור תלמידים"/></div>
      <div className={styles.title}>שהם התחילו כאן</div>
   <div className={styles.description}>השאירי פרטים בטופס הבא ונדאג לחזור אלייך בימים הקרובים לשיחת ייעוץ חינמית!</div>
   <div className={styles.arrowContainer}>
          <ChevronDown className={styles.bounceArrow} size={40} color="#D4AF37" />
        </div>
      <FormScreen/>
    </div>

  </>
};

export default SeventhScreen;