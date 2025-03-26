import React from 'react';
import { 
  Scissors, 
  Trophy, 
  Sparkles, 
  HeartHandshake, 
  Brush, 
  GraduationCap, 
  Users, 
  DollarSign, 
  Rocket, 
  Crown, 
  Ban, 
  UserX, 
  PencilRuler, 
  BookX, 
  AlertTriangle
} from 'lucide-react';
import styles from './Fit.module.css';

const CourseEligibility = () => {
    const suitable = [
      { 
        text: "למעצבי שיער שרוצים לדעת לבצע כל סוג תסרוקת בביטחון מלא",
        icon: <Scissors />
      },
      { 
        text: "למי שמוכן להשקיע בעצמו ולהגיע לרמה הגבוהה ביותר", 
        icon: <Trophy />
      },
      { 
        text: "למי שרוצה לדעת להכין כל סוג שיער בצורה מקצועית", 
        icon: <Sparkles />
      },
      { 
        text: "למי שחולם לעבוד עם כלות אבל חושש מתסרוקות מורכבות", 
        icon: <HeartHandshake />
      },
  
  
    
 
    
      { 
        text: "למי שרוצה להיות מעצב שיער מוביל בתחומו", 
        icon: <Crown />
      }
    ];
  
    const notSuitable = [
      { 
        text: "למי שחושב שאפשר להצליח בלי להשקיע בלימודים מקצועיים", 
        icon: <Ban />
      },
      { 
        text: "למי שמחכה שהכלות פשוט יגיעו אליו בלי להתמקצע", 
        icon: <UserX />
      },
      { 
        text: "למי שלא מוכן לצאת מאזור הנוחות וללמוד שיטות חדשות", 
        icon: <PencilRuler />
      },
      { 
        text: "למי שחושב שאפשר להיות מוביל בתחום בלי תיאוריה מקצועית", 
        icon: <BookX />
      },
      { 
        text: "למי שמפחד להתמודד עם תסרוקות מורכבות ולא מוכן ללמוד איך לבצע אותן נכון", 
        icon: <AlertTriangle />
      }
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
                  {item.icon}
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
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CourseEligibility;