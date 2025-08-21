import React from 'react';
import styles from './Location.module.css';
import { FaMapMarkerAlt, FaTrain, FaCar, FaParking } from 'react-icons/fa';

const LocationSection = () => {
  const handleButtonClick = () => {
    window.open('https://secure.cardcom.solutions/EA/EA5/rBHGNxddek6HJ87ottzr4w/PaymentSP', '_blank');
  };

  return (
    <div className={styles.pageContainer} id="מיקום">
      {/* Background blurry images */}
      <div className={styles.bgImageTop}></div>
      <div className={styles.bgImageBottom}></div>
      
      <div className={styles.container}>
        <div className={styles.bgGlow}></div>
        
        <div className={styles.contentWrapper}>
          {/* Main Title */}
          <div className={styles.textSection}>
            <h2 className={styles.locationTitle}>
              <span className={styles.highlightedWord}>מיקום</span> המאסטר קלאס
            </h2>
          </div>

          {/* Address Section */}
          <div className={styles.addressSection}>
            <div className={styles.addressCard}>
              <div className={styles.iconContainer}>
                <FaMapMarkerAlt className={styles.icon} />
              </div>
              <div className={styles.addressContent}>
                <h3 className={styles.addressTitle}>כתובת</h3>
                <p className={styles.addressText}>
                  מגדל מילניה (בניין B), קומה 17<br />
                  מתחם האלף, שדרות הראשונים 23<br />
                  ראשון לציון
                </p>
              </div>
            </div>
          </div>

          {/* Transportation Options */}
          <div className={styles.transportationSection}>
            <h3 className={styles.sectionTitle}>אפשרויות <span className={styles.highlightedWord}>הגעה</span></h3>
            
            <div className={styles.transportationGrid}>
              {/* Public Transportation */}
              <div className={styles.transportCard}>
                <div className={styles.iconContainer}>
                  <FaTrain className={styles.icon} />
                </div>
                <div className={styles.transportContent}>
                  <h4 className={styles.transportTitle}>תחבורה ציבורית</h4>
                  <p className={styles.transportText}>
                    רכבת: ירידה בתחנת "משה דיין"<br />
                    משם הליכה של כ-5 דקות למתחם
                  </p>
                </div>
              </div>

              {/* Private Car */}
              <div className={styles.transportCard}>
                <div className={styles.iconContainer}>
                  <FaCar className={styles.icon} />
                </div>
                <div className={styles.transportContent}>
                  <h4 className={styles.transportTitle}>רכב פרטי</h4>
                  <p className={styles.transportText}>
                    ניתן להזין בוויז:<br />
                    "מגדל מילניה, שדרות הראשונים 23, ראשון לציון"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Parking Section */}
          <div className={styles.parkingSection}>
            <div className={styles.parkingCard}>
              <div className={styles.iconContainer}>
                <FaParking className={styles.icon} />
              </div>
              <div className={styles.parkingContent}>
                <h4 className={styles.parkingTitle}>אפשרויות חניה</h4>
                <p className={styles.parkingText}>
                יש חניון במתחם
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            <span className={styles.buttonGlow}></span>
       לחצו כאן לשריין מקום במאסטר קלאס
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;