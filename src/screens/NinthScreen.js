import React from 'react';

import styles from "./NinthScreen.module.css";

import FormScreen from '../components/form/FormScreen';
import CourseEligibility from '../components/fit/Fit';
import Button from '../components/button/Button';
import YoutubeCarousel from '../components/youtubeCarousel/Shorts';

const NinthScreen = () => {
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
<div className={styles.title}>מחכה לכם כאן</div>
<FormScreen/>
<div className={styles.title}>לפני שאנחנו מדברים</div>
<div className={styles.description}>תגללו בין הסרטונים שלי מדברת על הנושאים הכי חשובים היום בעולם התסרוקות</div>
<YoutubeCarousel videoIds={videoIds} />
 </div>
                
   </>
};

export default NinthScreen;