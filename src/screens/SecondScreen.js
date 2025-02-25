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
 
    
       
      <div className={styles.row}>
      <Box 
        title="ביטחון מקצועי"
        description="הכרת סוגי שיער והכנה נכונה  - 90 אחוז מהצלחה של תסרוקות מושלמת "
        icon={stress}
      />
      
      <Box 
        title="תעודת הסמכה בינלאומית"
        description="לימוד תיאוריה ייחודית מרוסיה, שתפתח לך דלתות בעולם התסרוקות המקצועי"
        icon={prevent}
      />
      
      <Box 
        title="כלים פרקטיים להצלחה"
        description="סודות מקצועיים, טכניקות מתקדמות ותיאוריה מדויקת"
        icon={social}
      />
      
      <Box 
        title="ליווי אישי וצמיחה"
        description="ליויי אישי וזמינות מלאה גם אחרי הקורס - כי ההצלחה שלך חשובה לי"
        icon={social}
      />
      </div>
                

     

   
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