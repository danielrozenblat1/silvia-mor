import React from 'react';
import { Check, X } from 'lucide-react';
import styles from './Fit.module.css';

const CourseEligibility = () => {
    const suitable = [
      { text: "למעצבי שיער שרוצים לדעת לבצע כל סוג תסרוקת בביטחון מלא" },
      { text: "למי שמוכן להשקיע בעצמו ולהגיע לרמה הגבוהה ביותר" },
      { text: "למי שרוצה לדעת להכין כל סוג שיער בצורה מקצועית" },
      { text: "למי שחולם לעבוד עם כלות אבל חושש מתסרוקות מורכבות" },
      { text: "למי שרוצה להפסיק להתמקד רק במוברש ולהרחיב את היכולות שלו" },
      { text: "למי שמבין שצריך תיאוריה מקצועית כדי להצליח בשוק תחרותי" },
      { text: "למי שרוצה שהלקוחות יבואו אליו במקום לרדוף אחריהם" },
      { text: "למי שרוצה סוף סוף להרוויח כמו שמגיע לו" },
      { text: "למי שמוכן לצאת מאזור הנוחות ולהגיע לתוצאות אמיתיות" },
      { text: "למי שרוצה להיות מעצב שיער מוביל בתחומו" }
    ];
  
    const notSuitable = [
      { text: "למי שחושב שאפשר להצליח בלי להשקיע בלימודים מקצועיים" },
      { text: "למי שמחכה שהכלות פשוט יגיעו אליו בלי להתמקצע" },
      { text: "למי שלא מוכן לצאת מאזור הנוחות וללמוד שיטות חדשות" },
      { text: "למי שחושב שאפשר להיות מוביל בתחום בלי תיאוריה מקצועית" },
      { text: "למי שמפחד להתמודד עם תסרוקות מורכבות ולא מוכן ללמוד איך לבצע אותן נכון" }
    ];
  
    return (
      <div className={styles.container}>
        {/* Suitable Section */}
        <div className={styles.card}>
          <h2 className={styles.title}>למי הקורס מתאים</h2>
          <div className={styles.itemsContainer}>
            {suitable.map((item, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.text}>{item.text}</span>
                <div className={styles.checkIcon}>
                  <Check />
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Not Suitable Section */}
        <div className={styles.card}>
          <h2 className={styles.title}>למי הקורס לא מתאים</h2>
          <div className={styles.itemsContainer}>
            {notSuitable.map((item, index) => (
              <div key={index} className={styles.item}>
                <span className={styles.text}>{item.text}</span>
                <div className={styles.xIcon}>
                  <X />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseEligibility;
