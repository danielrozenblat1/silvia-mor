import React, { useEffect, useRef, useState } from 'react';
import styles from './Me.module.css';
import silvia from "../../images/סילביה מור גורג'י קוט.png";
import Stats from '../stats/Stats';
import silviaRecommends from "../../images/המלצות סילביה.png"
import FormScreen from '../form/FormScreen';
import { PointerIcon } from 'lucide-react';
import Popped from '../poppedUpWindow/Popped';

const AboutMe = () => {

   
  return (
    <>
    <div className={styles.background}>
      <div className={styles.header} id="מי אני">בואו נכיר</div>
      
      {/* חלק ראשון */}
      <div className={styles.sectionContainer}>
        <div className={styles.descriptionCenter}>
          נולדתי וגדלתי במושב בעמק האלה, להורים שעלו ממרוקו. 
          גדלתי בבית דתי עם ערכים שמלווים אותי עד היום. מגיל קטן תמיד נמשכתי לאומנות, 
          הייתי תלמידה קצת שובבה, אני זוכרת שהמורה הייתה מענישה אותי בזה שלא אכנס לשיעור מלאכת יד - היא ידעה ששם זה הכאב שלי.
        </div>
        
        <div className={styles.descriptionCenter}>
          עם השנים התחתנתי ונולדו לי 3 בנות. היה לי עסק לשמלות כלה במרכז ירושלים שלא צלח והכניס אותי למקומות כלכליים לא טובים, 
          אפשר לומר הייתי בתחתית. אבל לא התייאשתי. ידעתי לקום מזה כמו גדולה ולהמשיך. אחרי הנפילה של סלון הכלות חזרתי לעבוד במספרה שלי. 
          מאוד אהבתי את העבודה, אבל זו עבודה קשה ולצערי לא בהכרח מתגמלת כמו שצריך.
        </div>
        
        <div className={styles.descriptionCenter}>
          הייתי גם מסרקת כלות. למדתי אצל כל מי שנחשב בארץ בתעשייה אבל אף אחד לא נתן מענה לפרפקציוניזם שלי. שילמתי אלפי שקלים פה בארץ 
          ללמוד אבל תמיד יצאתי מתוסכלת פשוט לימדו אותי לסרק לפי שיטת העתק הדבק.. פחדתי לעשות תסרוקות מורכבות שחלילה לא יתפרק לכלה 
          פחדתי שאולי היא תבקש תסורוקת שלא אדע לעשות ואם יהיה לה שיער מורכב שלא אדע להתמודד איתו? תמיד זה הכניס אותי לפחד וחוסר ביטחון, 
          וגם לא העזתי לבקש הרבה כסף כי לא האמנתי שאני טובה.
        </div>
      </div>
      
      {/* מפריד בין החלקים */}
      <div className={styles.divider}></div>
      
      {/* חלק שני */}
      <div className={styles.sectionContainer}>
        <div className={styles.descriptionCenter}>
          ואז קרה נקודות המפנה בחיים שלי - טסתי לרוסיה לבית ספר של גיורגי קוט, ושם הבנתי שזה לא שאני לא טובה - 
          <span className={styles.highlight}>זה ששיטת הלימוד בארץ לקויה.</span> הרגשתי שמצאתי את הבית שלי שבו אני יכולה לצמוח ולהתפתח.
        </div>
        
        <div className={styles.descriptionCenter}>
          <span className={styles.highlight}>ואז זה קרה - </span>
          התחלתי להעביר השתלמויות למעצבי שיער מתוך תחושה של שליחות. אני רוצה לקדם קולגות שמרגישים כמו שאני הרגשתי. 
          שנמצאים במקום שאני הייתי. לא מגיע לכם להרגיש ככה - אתם טובים, אתם רק צריכים את הכלים הנכונים והביטחון, וההצלחה תגיע.
        </div>
      </div>
      
  

     
   
    </div>

    </>
  );
};

export default AboutMe;