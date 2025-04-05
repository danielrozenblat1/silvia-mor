import React, { useEffect, useRef, useState } from 'react';
import styles from './NewAboutMe.module.css';
import allStudents from "../../images/סילביה מור כולם.png";
import silvia from "../../images/סילביה מעיל שחור.png";
import Works from '../recommends/Works';

const AboutMe = () => {
  const portraitRef = useRef(null);
  const containerRef = useRef(null);
  const bottomImageRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!portraitRef.current || !bottomImageRef.current || !containerRef.current) return;
      
      // Get container and image positions
      const containerRect = containerRef.current.getBoundingClientRect();
      const bottomImageRect = bottomImageRef.current.getBoundingClientRect();
      
      // Calculate how far we've scrolled into the section
      const scrollPosition = window.scrollY;
      
      // Add 100px delay to the start of the scroll effect
      const startScroll = containerRect.top + window.scrollY - window.innerHeight + 100;
      const scrollDistance = window.innerHeight + containerRect.height;
      
      // Calculate the stop point - 400px above the bottom image
      const stopDistance = bottomImageRect.top - 0;
      
      // Apply transform based on scroll position
      if (scrollPosition > startScroll) {
        const scrollPercentage = Math.min(1, (scrollPosition - startScroll) / scrollDistance);
        
        // Calculate the maximum translation needed to position the image 400px above bottom image
        const maxTranslateY = stopDistance - portraitRef.current.getBoundingClientRect().top;
        
        // Calculate the translation based on scroll percentage, but limit it to the maximum
        const translateY = Math.min(scrollPercentage * containerRect.height, maxTranslateY);
        
        // Apply the transform, ensuring we don't go beyond the stopping point
        portraitRef.current.style.transform = `translateY(${translateY}px)`;
      } else {
        portraitRef.current.style.transform = 'translateY(0)';
      }
    };
    
    // Only add scroll event listener if not on mobile
    if (windowWidth > 750) {
      window.addEventListener('scroll', handleScroll);
      // Initial position calculation
      handleScroll();
      
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [windowWidth]);
  
  // For screens wider than 750px, render the original desktop layout
  if (windowWidth > 750) {
    return <>
      <div className={styles.aboutMeContainer} ref={containerRef}>
        <div className={styles.topSection}>
          <div className={styles.leftSection}>
            <div className={styles.header}>
              <p className={styles.description} style={{margin:"0 auto"}}>הנציגה הרשמית של ג'ורגי קוט בישראל</p>
              <p className={styles.greeting}><strong>נעים מאוד</strong></p>
              <p className={styles.name}><strong>סילביה מור</strong></p>
            </div>
          </div>
          
          <div className={styles.centerSection}>
            <div className={styles.centerImageContainer} style={{ marginTop: '-400px' }}>
              <img 
                ref={portraitRef}
                src={silvia} 
                alt="סילביה מור" 
                className={styles.centerImage}
              />
            </div>
          </div>
          
          <div className={styles.rightSection}>
            <div className={styles.description}>
              <p>
                כשאתם רואים את העבודות שלי ושל התלמידים שלי אתם בטח חושבים 'היא מוכשרת, לכן יוצאות לה כאלה עבודות'.
              </p>
              <p>
                אבל האמת? זה לא רק כישרון - זו תיאוריה מקצועית שכל אחד יכול ללמוד ולהוציא תוצאות כאלה מדהימות!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fullWidthImageContainer} ref={bottomImageRef}>
        <Works/>
      </div>
    </>;
  }
  
  // For mobile screens (750px or less), render the mobile layout
  return <>
    <div className={styles.aboutMeContainer} ref={containerRef}>
      <div className={styles.topSection}>
        <div className={styles.mobileLayout}>
          <div className={styles.mobileHeader}>
            <p className={styles.description} style={{margin:"0 auto"}}>הנציגה הרשמית של ג'ורגי קוט בישראל</p>
            <p className={styles.greeting}><strong>נעים מאוד</strong></p>
            <p className={styles.name}><strong>סילביה מור</strong></p>
          </div>
          
          <div className={styles.mobileImageContainer}>
            <img 
              src={silvia} 
              alt="סילביה מור" 
              className={styles.centerImage}
            />
          </div>
          
          <div className={styles.mobileDescription}>
            <p>
              כשאתם רואים את העבודות שלי ושל התלמידים שלי אתם בטח חושבים 'היא מוכשרת, לכן יוצאות לה כאלה עבודות'.
            </p>
            <p>
              אבל האמת? זה לא רק כישרון - זו תיאוריה מקצועית שכל אחד יכול ללמוד ולהוציא תוצאות כאלה מדהימות!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.fullWidthImageContainer} ref={bottomImageRef}>
      <Works/>
    </div>
  </>;
};

export default AboutMe;