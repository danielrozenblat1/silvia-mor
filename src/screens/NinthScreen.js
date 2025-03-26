import React, { useEffect, useRef, useState } from 'react';

import styles from "./NinthScreen.module.css";

import FormScreen from '../components/form/FormScreen';
import CourseEligibility from '../components/fit/Fit';
import Button from '../components/button/Button';
import YoutubeCarousel from '../components/youtubeCarousel/Shorts';
import StudentsWorks from '../components/recommends/StudentsWorks';
import AboutMe from '../components/me/NewAboutMe';
import AboutMee from '../components/me/Me';
import { PointerIcon } from 'lucide-react';
import Popped from '../components/poppedUpWindow/Popped';
const NinthScreen = () => {
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false); // New state for Popped component

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    setIsPoppedOpen(true); // Open the Popped component
  };
  const videoIds = [
        'KiY5DUxsVa4',
        'tbDtkNuCwiA',
        'ObWTy840sww',
        'R2I-0QLQ8c0',
        'zysVYy6BHuw',
        'BRXvYnpldog',
        '4-uK8sTv1Ew',
        '8PfqK_KEsmw'
      ]
  return   <> <div className={styles.background}>
      
<div className={styles.title}>אם הגעתם לכאן</div>
<div className={styles.description}>סימן שאתם באמת רציניים לגבי העסק שלכם,אז בואו נהיה כנים</div>
<CourseEligibility/>
{/* <div className={styles.title}>אצלי יוצאים עם תוצאות!</div>
<div className={styles.description}>הכנתי מקבץ עבודות של מעצבי שיער לאחר שעברו את הקורס</div>
<StudentsWorks/> */}

<AboutMe/>
<AboutMee/>
<div className={styles.title}>לפני שאנחנו מדברים</div>

<div className={styles.description}>תגללו בין הסרטונים שלי מדברת על הנושאים הכי חשובים היום בעולם התסרוקות</div>

<YoutubeCarousel videoIds={videoIds} />
<button onClick={handleButtonClick} className={styles.ctaButton}>
                  <div className={styles.buttonContent}>
                    <span className={styles.buttonIcon}>
                      <PointerIcon size={24} strokeWidth={1.5} />
                    </span>
                    <span className={styles.buttonText}>בואו ללמוד לסרק בביטחון</span>
                  </div>
                  <div className={styles.buttonGlow} />
                </button>
 </div>

 <div className={styles.description}>אני כאן כדי להוכיח לכם שאתם עובדים עם דרך וחוקים מאוד ברורים - 
תתפסו את מקומכם 
למה? כי כשאני אומרת לימודים איתי, זה באמת לימודים איתי! אתם תקבלו את כל הידע, כל הסודות וכל הטכניקות שהבאתי מרוסיה.
תצפו להרבה תשומת לב והדרכה צמודה, כי אני לא מוותרת עד שכל אחד מגיע לתוצאות מושלמות.
מחכה לכם בקורס הקרוב ❤️ סילביה
</div>

 {isPoppedOpen && <Popped onClose={() => setIsPoppedOpen(false)} />}
   </>
};

export default NinthScreen;