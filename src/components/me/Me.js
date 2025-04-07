import React from 'react';
import styles from './Me.module.css';
import silvi from "../../images/סילבי תדמית.jpeg";
import silvii from "../../images/סילבי תדמית 2.jpeg";
import silviii from "../../images/סילביה וגורג'י.jpeg"
const AboutMe = () => {
  return (
    <>
    <div className={styles.background}>
      <div className={styles.header} id="אודות">בואו נכיר</div>
      
      {/* חלק ראשון - תמונה וטקסט */}
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={silvi} alt="תמונה שלי" className={styles.image} />
        </div>
        <div className={styles.content}>
          <p className={styles.description}>
            נולדתי וגדלתי במושב בעמק האלה, להורים שעלו ממרוקו. 
            גדלתי בבית דתי עם ערכים שמלווים אותי עד היום. מגיל קטן תמיד נמשכתי לאומנות, 
            הייתי תלמידה קצת שובבה, אני זוכרת שהמורה הייתה מענישה אותי בזה שלא אכנס לשיעור מלאכת יד - היא ידעה ששם זה הכאב שלי.
          </p>
        
          <p className={styles.description}>
            עם השנים התחתנתי ונולדו לי 3 בנות. היה לי עסק לשמלות כלה במרכז ירושלים שלא צלח והכניס אותי למקומות כלכליים לא טובים, 
            אפשר לומר הייתי בתחתית. אבל לא התייאשתי. ידעתי לקום מזה כמו גדולה ולהמשיך. אחרי הנפילה של סלון הכלות חזרתי לעבוד במספרה שלי. 
            מאוד אהבתי את העבודה, אבל זו עבודה קשה ולצערי לא בהכרח מתגמלת כמו שצריך.
          </p>
        </div>
      </div>
      
      {/* מפריד בין החלקים */}
      <div className={styles.divider}></div>
      
      {/* חלק שני - טקסט ותמונה */}
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.description}>
            הייתי גם מסרקת כלות. למדתי אצל כל מי שנחשב בארץ בתעשייה אבל אף אחד לא נתן מענה לפרפקציוניזם שלי. שילמתי אלפי שקלים פה בארץ 
            ללמוד אבל תמיד יצאתי מתוסכלת פשוט לימדו אותי לסרק לפי שיטת העתק הדבק.. פחדתי לעשות תסרוקות מורכבות שחלילה לא יתפרק לכלה 
            פחדתי שאולי היא תבקש תסורוקת שלא אדע לעשות ואם יהיה לה שיער מורכב שלא אדע להתמודד איתו? תמיד זה הכניס אותי לפחד וחוסר ביטחון, 
            וגם לא העזתי לבקש הרבה כסף כי לא האמנתי שאני טובה.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <img src={silvii} alt="תמונה נוספת" className={styles.image} />
        </div>
      </div>
      
      {/* מפריד בין החלקים */}
      <div className={styles.divider}></div>
      
      {/* חלק שלישי - טקסט במרכז ותמונה למטה */}
      <div className={styles.sectionContainer}>
        <div className={styles.descriptionCenter}>
          ואז קרתה נקודות המפנה בחיים שלי - טסתי לרוסיה לבית ספר של גיורגי קוט, ושם הבנתי שזה לא שאני לא טובה - 
          <span className={styles.highlight}>זה ששיטת הלימוד בארץ לקויה.</span> הרגשתי שמצאתי את הבית שלי שבו אני יכולה לצמוח ולהתפתח.
        </div>
        
        <div className={styles.bottomImageContainer}>
          <img src={silviii} alt="תמונה תחתונה" className={styles.bottomImage} />
        </div>
        
        <div className={styles.titleC}>
          ואז זה קרה
        </div>
        
        <div className={styles.descriptionCenter}>
          התחלתי להעביר השתלמויות למעצבי שיער מתוך תחושה של שליחות. אני רוצה לקדם קולגות שמרגישים כמו שאני הרגשתי. 
          שנמצאים במקום שאני הייתי. לא מגיע לכם להרגיש ככה - אתם טובים, אתם רק צריכים את הכלים הנכונים והביטחון, וההצלחה תגיע.
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;