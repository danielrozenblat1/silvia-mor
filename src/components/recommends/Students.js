import React from 'react';
import styles from './Students.module.css';


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
const Students = () => {
  const images = [
    result1, result2, result3, result4,
    result5, result6, result7, result8, result9, result10, result11, result12, result13, result14
  ];

  return (
    <>
      <div className={styles.title}>הדרך שלנו מתחילה כאן</div>
      <div className={styles.explain}>גם את יכולה להוציא תסרוקות ברמה הזו! מלאי את הטופס שלמטה כדי לקבל שיחת ייעוץ חינמית ממני </div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`סילביה מור תלמידה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`סילביה מור תסרוקות ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Students;