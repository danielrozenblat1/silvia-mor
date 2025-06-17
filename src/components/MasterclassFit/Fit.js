import React from 'react';
import styles from './Fit.module.css';
import { Check } from 'lucide-react';

const Fit = () => {
  return (
    <div className={styles.fitContainer}>
      {/* Background elements */}
      <div className={styles.bgGlow}></div>
   
      
      {/* Main Content */}
      <div className={styles.contentWrapper}>
   
        <div className={styles.sectionTitle}>
          <span className={styles.fancyTitle}>ושנייה לפני שאתם נרשמים..</span>
        </div>
        
        {/* Target Audience Section */}
        <div className={styles.targetAudienceContainer}>
          <p className={styles.description}>
            המאסטרקלאס מתאים אך ורק ל 
        
   
          </p>
          
          {/* Features Grid */}
          <div className={styles.featuresContainer}>
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                מעצבי שיער, ספרים, ספריות ומאפרות שרוצים להתחיל לסרק
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                מי שרוצה לחזק את הביטחון המקצועי שלו
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                מי שרוצה להרים את הרמה המקצועית שלו
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                מי שרוצה לבקש יותר מבחינת המחיר עבור העבודה שלו
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                מי שרוצה להפסיק להלחץ מול לקוחות שמבקשים משהו חדש
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                למי שזקוק לרענון וטכניקות חדשות אחרי קורס
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                למי שרוצה לקצר את זמן העבודה עם טכניקות מתקדמות
              </div>
            </div>
            
            <div className={styles.featureItem}>
              <div className={styles.cornerTopRight}></div>
              <div className={styles.cornerBottomLeft}></div>
              <div className={styles.featureIcon}>
                <Check color="#d8b49a" />
              </div>
              <div className={styles.featureText}>
                למי שרוצה ללמוד טכניקות חדשות ולהתרענן
              </div>
            </div>
          </div>
        </div>
        
        {/* Pricing Section */}
        <div className={styles.pricingSection}>
          <div className={styles.sectionTitle}>
            <span className={styles.fancyTitle}>מחיר המאסטרקלאס</span>
          </div>
          
          <div className={styles.priceContainer}>
            <div className={styles.largeCornerTopRight}></div>
            <div className={styles.largeCornerBottomLeft}></div>
            <div className={styles.priceTitle}>מחיר מיוחד לנרשמים עכשיו</div>
            <div className={styles.priceAmount}>₪497</div>
            <div className={styles.pricingNote}>* המחיר יעלה בחצות</div>
          </div>
          
          <button className={styles.ctaButton}>
            הרשמו עכשיו למאסטרקלאס
          </button>
        </div>
      </div>
    </div>
  );
};

export default Fit;