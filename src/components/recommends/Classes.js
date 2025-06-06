import React from 'react';
import styles from './Students.module.css';

import result1 from "../../images/סילביה תמונות מחזור 1.png";
import result2 from "../../images/סילביה תמונות מחזור 2.png";
import result3 from "../../images/סילביה תמונות מחזור 3.png";
import result4 from "../../images/סילביה תמונות מחזור 4.png";
import result5 from "../../images/סילביה תמונות מחזור 5.png";
import result6 from "../../images/סילביה תמונות מחזור 6.png";
import result7 from "../../images/סילביה תמונות מחזור 7.png";

const Classes = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result7,
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {/* סט ראשון */}
        {images.map((img, index) => (
          <div key={`slide-${index}`} className={styles.slide}>
            <img
              src={img}
              alt={`תמונת מחזור ${index + 1}`}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}

        {/* סט כפול ללופ חלק */}
        {images.map((img, index) => (
          <div key={`slide-duplicate-${index}`} className={styles.slide}>
            <img
              src={img}
              alt={`תמונת מחזור ${index + 1}`}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
