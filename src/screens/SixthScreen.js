import React from 'react';
import { X, Check } from 'lucide-react';
import styles from './SixthScreen.module.css';
import FormScreen from '../components/form/FormScreen';

const SixthScreen = () => {
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
      <div className={styles.description}>
        אתם מעצבי שיער <span className={styles.highlight}>מוכשרים</span> ו<span className={styles.highlight}>מקצועיים</span>. 
        יש לכם את כל הכישרון והתשוקה, אבל משהו חסר. הבעיה היא לא בכם - 
        זו <span className={styles.highlight}>שיטת ההכשרה</span> המיושנת בארץ. 
        כולם מלמדים אותו דבר, מתמקדים בסגנון אחד בלבד, ומשאירים אתכם לא מוכנים לאתגרים האמיתיים.
      </div>

      <div className={styles.description}>
        הגיע הזמן לשבור את התקרה הזו. להיות מסוגלים ליצור כל תסרוקת שתרצו: 
        ניפוחים מושלמים, תסרוקות אסופות מורכבות, וכל מה שנראה לכם בלתי אפשרי עד היום. 
        עם <span className={styles.highlight}>שיטה מוכחת</span> וטכניקות נכונות, הכל הופך פשוט ואפשרי.
      </div>

      <h3 className={styles.description}>
        אם אתם רוצים להעלות את העסק שלכם לרמה הבאה, אבל עדיין מרגישים תקועים - 
        אם אתם יודעים שמגיע לכם יותר, אבל לא בטוחים איך להגיע לשם
      </h3>

      <div className={styles.subtitle}>ובשורה התחתונה</div>
      <div className={styles.description}>
        אתם רואים מעצבים אחרים מצליחים יותר, סוגרים יותר עבודות, ונהנים מהצלחה שגם לכם מגיעה.
      </div>

      <div className={styles.title}>זה הזמן שלכם לפרוץ קדימה</div>
      <FormScreen/>

    
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
    </div>
  );
};

export default SixthScreen;