import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Loader from '../components/loader/Loader';
import styles from "./FirstScreen.module.css"
const FirstScreen = (props) => {
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  
  const topLeftImageRef = useRef(null);
  const topRightImageRef = useRef(null);
  const middleLeftImageRef = useRef(null);
  const middleRightImageRef = useRef(null);

  const images = {
    topLeft: '../images/סילביה מור תמונה שמאל.png',
    topRight: '../images/סילביה מור תמונה ימין.png',
    middleLeft: '../images/סילביה מור תמונה אמצע שמאל.png',
    middleRight: '../images/סילביה מור תמונה אמצע ימין.png'
  };

  const handleImageLoad = () => {
    setLoadedImagesCount(prev => {
      const newCount = prev + 1;
      if (newCount === Object.keys(images).length) {
        setAllImagesLoaded(true);
      }
      return newCount;
    });
  };

  useEffect(() => {
    // Load all images
    Object.values(images).forEach(src => {
      const img = new Image();
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad; // Count errors as loaded to prevent infinite loading
      img.src = src;
    });

    // Set background images after creating Image objects
    if (topLeftImageRef.current) {
      topLeftImageRef.current.style.backgroundImage = `url(${images.topLeft})`;
    }
    if (topRightImageRef.current) {
      topRightImageRef.current.style.backgroundImage = `url(${images.topRight})`;
    }
    if (middleLeftImageRef.current) {
      middleLeftImageRef.current.style.backgroundImage = `url(${images.middleLeft})`;
    }
    if (middleRightImageRef.current) {
      middleRightImageRef.current.style.backgroundImage = `url(${images.middleRight})`;
    }
  }, []);

  useEffect(() => {
    if (!allImagesLoaded) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (topLeftImageRef.current && topRightImageRef.current) {
        topLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${scrollY * 0.15}px)`;
        topRightImageRef.current.style.transform = `rotate(20deg) translateY(${scrollY * 0.15}px)`;
      }
      
      if (middleLeftImageRef.current && middleRightImageRef.current) {
        middleLeftImageRef.current.style.transform = `rotate(-20deg) translateY(${-scrollY * 0.15}px)`;
        middleRightImageRef.current.style.transform = `rotate(20deg) translateY(${-scrollY * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [allImagesLoaded]);

  if (!allImagesLoaded) {
    return <Loader />;
  }

  return (
    <>
      <div className={props.scrolled ? styles.introP : styles.intro}>
        *במיוחד עבור מי שמחפש/ת לצבור בטחון בביצוע כל תסרוקת, ליצור יתרון תחרותי בשוק ולהרחיב את סל השירותים*
      </div>
      <div className={styles.container}>
        <div className={styles.explainContainer}>
          <div className={styles.imageContainer}>
            <div ref={topLeftImageRef} className={styles.topLeftImage}></div>
            <div ref={topRightImageRef} className={styles.topRightImage}></div>
            <div ref={middleLeftImageRef} className={styles.middleLeftImage}></div>
            <div ref={middleRightImageRef} className={styles.middleRightImage}></div>
          </div>
          <div className={styles.explain}>
            לאחר אלפי תסרוקות, מאות תלמידים ו-5 הסמכות בינלאומיות
          </div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>סילביה מור מציגה</div>
            <div className={styles.description}>האקדמיה ללימודי תסרוקות</div>
          </div>
        </div>
        <div className={styles.arrowContainer}>
          <ChevronDown className={styles.bounceArrow} size={40} color="#472e1b" />
        </div>
      </div>
    </>
  );
};

export default FirstScreen;