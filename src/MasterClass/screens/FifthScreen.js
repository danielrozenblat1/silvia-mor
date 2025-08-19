import React, { useState } from 'react';
import { GraduationCap, BookOpen, Clock, Shield, Award, Zap } from 'lucide-react';
import styles from './FifthScreen.module.css';
import PrivacyPolicy from '../../components/privacy/Privacy';
import Popped from '../../components/poppedUpWindowMasterclass/Popped';

const FifthScreen = () => {
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPoppedOpen(true);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bgGlow}></div>
      <div className={styles.bgImageTop}></div>
      <div className={styles.bgImageBottom}></div>
      
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <p className={styles.becomeText}>
              לכל שאלה נוספת ולבירורים נוספים על המאסטר קלאס 
            </p>
          </div>
          
          <button className={styles.ctaButton} onClick={handleButtonClick}>
            לחצו כאן ונדבר
            <div className={styles.buttonGlow}></div>
          </button>

          <PrivacyPolicy 
            ownerName="סילביה מור" 
            email="silvimorart@gmail.com" 
            phone="+972 52-625-5255" 
            domain="https://silviamor.co.il/" 
          />
        </div>
      </div>
      
      {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
    </div>
  );
};

export default FifthScreen;