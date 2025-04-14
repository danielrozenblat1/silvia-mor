import React from 'react';
import styles from './Works.module.css';

import result1 from "../../images/סילביה מור תסרוקות 1.png";
import result2 from "../../images/סילביה מור תסרוקות 2.png";
import result3 from "../../images/סילביה מור תסרוקות 3.png";
import result4 from "../../images/סילביה מור תסרוקות 4.png";
import result5 from "../../images/סילביה מור תסרוקות 5.png";
import result6 from "../../images/סילביה מור תסרוקות 6.png";
import result7 from "../../images/סילביה מור תסרוקות 7.png";
import result8 from "../../images/סילביה מור תסרוקות 8.png";
import result9 from "../../images/סילביה מור תסרוקות 9.png";
import result10 from "../../images/סילביה מור תסרוקות 10.png";
import result11 from "../../images/סילביה מור תסרוקות 11.png";
import result12 from "../../images/סילביה מור תסרוקות 12.png";
import result13 from "../../images/סילביה מור תסרוקות 13.png";
import result14 from "../../images/סילביה מור תסרוקות 14.png";
import result15 from "../../images/סילביה עבודות חדשות 1.png";
import result16 from "../../images/סילביה עבודות חדשות 2.png";

const Works = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result7, result8,
    result9, result10, result11, result12,
    result13, result14, result15, result16
  ];

  return (
    <div className={styles.container}>
      <div className={styles.scrollTrack}>
        {/* First set of images */}
        {images.map((img, index) => (
          <div key={`first-${index}`} className={styles.imageWrapper}>
            <img
              src={img}
              alt={`סילביה מור תסרוקות ${index + 1}`}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
        
        {/* Duplicate set for seamless looping */}
        {images.map((img, index) => (
          <div key={`second-${index}`} className={styles.imageWrapper}>
            <img
              src={img}
              alt={`סילביה מור תסרוקות ${index + 1}`}
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

export default Works;
