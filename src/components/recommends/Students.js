import React from 'react';
import styles from './Students.module.css';

import result1 from "../../images/סילביה מור גורג'י קוט 1.png";
import result2 from "../../images/סילביה מור גורג'י קוט 2.png";
import result3 from "../../images/סילביה מור גורג'י קוט 3.png";
import result4 from "../../images/סילביה מור גורג'י קוט 4.png";
import result5 from "../../images/סילביה מור גורג'י קוט 5.png";
import result6 from "../../images/סילביה מור גורג'י קוט 6.png";
import result7 from "../../images/סילביה מור גורג'י קוט 7.png";

const Students = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result7,
  ];

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {/* First set of images */}
        {images.map((img, index) => (
          <div key={`slide-${index}`} className={styles.slide}>
            <img
              src={img}
              alt={`סילביה מור גורג'י קוט ${index + 1}`}
              className={styles.image}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
        {/* Duplicate set of images for seamless loop */}
        {images.map((img, index) => (
          <div key={`slide-duplicate-${index}`} className={styles.slide}>
            <img
              src={img}
              alt={`סילביה מור גורג'י קוט ${index + 1}`}
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

export default Students;
