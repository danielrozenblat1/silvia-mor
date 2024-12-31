import React from 'react';
import styles from './Me.module.css';
import silvi from "../../images/סילביה מור תסרוקות 14.png";
import silvia from "../../images/סילביה מור גורג'י קוט.png";
import Stats from '../stats/Stats';
import Recommends from '../recommends/Recommends';

const AboutMe = () => {
  return (
    <>
      <div className={styles.header} id="מי אני">בואי נכיר</div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={silvi} alt="סילביה מור" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>סילביה מור</h1>
          <div className={styles.subtitle}>"בטחון בתחום הזה שווה המון!"</div>
    
          <div className={styles.description}>למדתי אצל כל מי שנחשב בתעשייה אבל אף אחד לא נתן מענה לפרפקציוניזם שלי. שילמתי אלפי שקלים פה בארץ ללמוד אבל תמיד יצאתי מתוסכלת. פחדתי לעשות תסרוקות מורכבות שאולי יתפרקו לכלה בערב, או שאם היא תבקש תסרוקת שלא אדע לבצע אותה. תמיד זה הכניס אותי לפחד וחוסר ביטחון, וגם לא העזתי לבקש הרבה כסף כי לא האמנתי שאני טובה.</div>
          <div className={styles.description}>את ההכשרות שלי עברתי בחו''ל והיום אני מלמדת מתוך שליחות להעביר הלאה את הידע בצורה הכי פרקטית שאפשר</div>
       

        

        </div>
      </div>
      <div className={styles.descriptionC} style={{textDecoration:"underline"}}>הייתי בדיוק במקום שלך לפני 20 שנה!</div>
      <div className={styles.titleC}>הרגשתי שאני צריכה להשתפר</div>
      <div className={styles.descriptionC}>חיפשתי בכל מקום איך לצבור עוד טכניקות ועוד שיטות חדשות כדי להתקדם אבל לא באמת נתקלתי במקום שסיפק לי את הדברים בצורה פרקטית!</div>
      <div className={styles.titleC}>והגעתי למסקנה</div>
      <div className={styles.descriptionC}>שאם אני לא מצליחה למצוא מקום שיספק לי את הידע בארץ</div>
      <div className={styles.titleC}>אני אעלה על מטוס</div>
      <div className={styles.descriptionC}>וזה מה שקרה! טסתי לרוסיה ללמוד אצל גורג'י קוט ושם הבנתי שזה לא שאני לא טובה - זה ששיטת הלימוד בארץ לקויה. הרגשתי שמצאתי את הייעוד שלי, את הבית שלי שבו אני יכולה לצמוח ולהתפתח.</div>
      <div className={styles.center}>
        <img className={styles.image} alt="סילביה מור" src={silvia}/>
      </div>
      <div className={styles.descriptionC}>
לקחתי כל את הידע שצברתי והחלטתי שזה הזמן להעביר אותו הלאה ולספק את מה שהיה לי חסר!  <br/> והיום:
      </div>
<Stats/>
<Recommends/>
    </>
  );
};

export default AboutMe;