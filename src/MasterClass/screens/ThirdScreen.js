import FAQItem from "../../components/masterclassQuestions/Questions"
import styles from "./ThirdScreen.module.css"

const ThirdScreen = () => {
    return (
        <>
          <div className={styles.background}>
            <div className={styles.title}>שאלות נפוצות</div>
            <FAQItem 
                question="למי זה מתאים?" 
                answer="למעצבי ומעצבות שיער שרוצים להרגיש ביטחון, דיוק ולשלוט באמת בתסרוקות שהם יוצרים – גם מתחילים וגם מתקדמים."
            />
            <FAQItem 
                question="אני מאפרת – זה רלוונטי לי?" 
                answer="כן! אם את מתעסקת גם בשיער, המאסטר קלאס יתן לך כלים לייעל את העבודה ולהיראות הרבה יותר מקצועית."
            />
            <FAQItem 
                question="מה אם עשיתי קורס בסיסי והוא לא עזר לי?" 
                answer="זו בדיוק הסיבה שהמאסטר קלאס קיים – כאן תקבלי סדר, שיטה והבנה עמוקה שתשנה את הדרך שאת מסרקת"
            />
            </div>
        </>
    )
}

export default ThirdScreen