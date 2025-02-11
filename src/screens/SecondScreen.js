import React from 'react';
import { AlertTriangle, ChevronDown, EyeOff, Unplug } from 'lucide-react';
import Box from "../components/box/Box";
import styles from "./SecondScreen.module.css";
import stress from "../Icons/wired-outline-712-woman-style-10-hover-pinch.json"
import prevent from "../Icons/wired-outline-719-woman-style-17-hover-pinch.json"
import social from "../Icons/wired-outline-962-social-media-marketing-hover-pinch (2).json"

import FormScreen from '../components/form/FormScreen';
import Students from '../components/recommends/Students';
import AboutMe from '../components/me/Me';
const SecondScreen = () => {
  return (
    <>

    <div className={styles.background}>
      <div className={styles.title}>אצלי תקבלו</div>
      
       
      <div className={styles.row}>
        <Box 
          title="בטחון בכל סוג תסרוקת שתעשי"
          description="את תקבלי את הכלים והביטחון לבצע כל סוג של תסרוקת, גם כאלו שלא התנסית בהן קודם. הידע המקיף והטכניקות המתקדמות יאפשרו לך להתמודד בהצלחה עם כל אתגר ובקשה של לקוחה"
          icon={stress}
        />
        
        <Box 
          title="תעודת הסמכה בינלאומית"
          description="תקבלי תעודה מוכרת בינלאומית שתאפשר לך לעבוד בכל מקום בעולם. ההסמכה מעידה על רמה מקצועית גבוהה ומאפשרת לך להתמודד עם כל סוגי השיער והתסרוקות"
          icon={prevent}
        />
      </div>
                
      <div className={styles.row}>
        <Box 
          title="ידע מקצועי שלא קיים בארץ"
          description="תלמדי טכניקות ושיטות עבודה ייחודיות שלמדתי בעצמי ברוסיה! ידע שלא מלמדים בארץ. הידע המקצועי שתרכשי יבדל אותך ממעצבי שיער אחרים ויתן לך יתרון משמעותי בשוק"
          icon={social}
        />
        
        <Box 
          title="זמינות והזדמנויות עבודה גם לאחר הקורס"
          description="תקבלי ליווי מקצועי והזדמנויות עבודה גם לאחר סיום הקורס. נשמור על קשר רציף, נעזור לך להשתלב בשוק העבודה ונעדכן אותך בהצעות עבודה רלוונטיות"
          icon={social}
        />     
      </div>
          <FormScreen title="תשאירו פרטים כאן ונחזור אליכם בהקדם"/>
      </div>  
      {/* <div className={styles.title}>ואז מגיעות המחשבות</div>
      <div className={styles.quates}>
      <div className={styles.quate}>"אולי אני לא מספיק טובה"</div>
      <div className={styles.quate}>"אולי התחום הזה לא באמת בשבילי כמו שחשבתי"</div>
      </div>
      <div className={styles.description}>אז בואי אספר לך משהו חשוב : <strong>את לא הבעיה! את מצויינת!</strong></div>
      <div className={styles.description}>הבעיה היא בשיטות הלימוד בארץ. מלמדים לסרק מתוך אינטואיציה, בלי תיאוריה אמיתית, בלי הבנה מעמיקה.</div>
      <div className={styles.description}>גם אני הייתי שם - שנים של תסכול וחוסר ביטחון. אבל לא ויתרתי. כשהגעתי לרוסיה, גיליתי עולם חדש: בדיוק כמו שלמעצב אופנה יש גזרות מדויקות, גם לתסרוקות יש תיאוריה שלמה ומדויקת!.</div>
 
      <Students/>
      <div className={styles.description}>כמה פרטים ואני חוזרת אלייך</div>
      <div className={styles.arrowContainer}>
        <ChevronDown className={styles.bounceArrow} size={40} strokeWidth={1} />
      </div> */}
{/*  
      <AboutMe/> */}
    
    </>
  );
};

export default SecondScreen;