import React from "react";
import Testimonials from "../components/newRecommends/NewRecommends";
import headerImage from "../images/סילביה וגורג'י.jpeg"
// Import all testimonial images
import recommend1 from "../images/סילביה מור המלצות הודעות 1.png";
import recommend2 from "../images/סילביה מור המלצות הודעות 2.png";
import recommend3 from "../images/סילביה מור המלצות הודעות 3.png";
import recommend4 from "../images/סילביה מור המלצות הודעות 4.png";
import recommend5 from "../images/סילביה מור המלצות הודעות 5.png";
import recommend6 from "../images/סילביה מור המלצות הודעות 6.png";
import recommend7 from "../images/סילביה מור המלצות הודעות 7.png";
import recommend8 from "../images/סילביה מור המלצות הודעות 8.png";
import recommend9 from "../images/סילביה מור המלצות הודעות 9.png";
import styles from "./RecommendsScreen.module.css";

const RecommendsScreen = () => {
  // Create array of testimonial images
  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },
    { src: recommend8 },
    { src: recommend9 }
  ];

  return (
    <>
      <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
        <div className={styles.rightSection}>
          <h2 className={styles.title}>תשמעו מהתלמידים שעשו את הצעד</h2>
          <div className={styles.headerImageContainer}>
            <img 
              src={headerImage} 
              alt="תמונת כותרת" 
              className={styles.headerImage} 
            />
          </div>
        </div>
        
        <div className={styles.leftSection}>
          <Testimonials testimonialImages={testimonialImages} />
        </div>
      </div>
    </>
  );
};

export default RecommendsScreen;