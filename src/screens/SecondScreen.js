import React from 'react';
import { AlertTriangle, ChevronDown, EyeOff, Unplug } from 'lucide-react';
import NewBox from "../components/NewBox/NewBox";
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
      <div className={styles.title}>כמה פעמים יצא לך</div>
      
      <div className={styles.row}>
        <NewBox 
          title="להלחץ מבקשות מורכבות"
          description="בקשות חדשות של לקוחות פוטנציאלים, תסרוקת שמתפרקת באמצע האירוע או שיטות חדשות שעוד לא יצא לך להתעסק איתן - ואיתן, הלחץ מתחיל"
          icon={stress}
        />
        
        <NewBox 
          title="להמנע משיער לא מוכר"
          description="יש לך מומחיות בכמה סוגי שיער ספציפים אבל ברגע שמגיעים סוגים שונים של שיער שלא עבדת איתם /של מגזרים שונים - את/ה מעדיף להמנע"
          icon={prevent}
        />
        
        <NewBox 
          title="להתבייש לפרסם עבודות"
          description="פרסום העבודות שלך יכול להכפיל את ההכנסות שלך אם תעשה/י את זה בצורה נכונה! החשש לפרסם את העבודות כי הן חוזרות על עצמן/לא מספיק טובות (בעיניך) מונע ממך להתקדם"
          icon={social}
        />
      </div>  
      <div className={styles.title}>ואז מגיעות המחשבות</div>
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
      </div>
      <FormScreen/>
      <AboutMe/>
    </>
  );
};

export default SecondScreen;