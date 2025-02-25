import React from 'react';
import styles from './Students.module.css';

import result1 from "../../images/סילביה מור עבודות של מעצבים 1.png";
import result2 from "../../images/סילביה מור עבודות של מעצבים 2.png";
import result3 from "../../images/סילביה מור עבודות של מעצבים 3.png";
import result4 from "../../images/סילביה מור עבודות של מעצבים 4.png";

const StudentsWorks = () => {
  const images = [
    result1, result2, result3, result4,
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {/* First set of images */}
        {images.map((img, index) => (
          <div key={`slide-${index}`} className={styles.slide}>
            <img
              src={img}
              alt={`סילביה מור ${index + 1}`}
              className={styles.image}
              loading="lazy" // הוספת טעינה מושהית לשיפור ביצועים
            />
          </div>
        ))}
        {/* Duplicate set of images for seamless loop */}
        {images.map((img, index) => (
          <div key={`slide-duplicate-${index}`} className={styles.slide}>
            <img
              src={img}
              alt={`סילביה מור ${index + 1}`}
              className={styles.image}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsWorks;