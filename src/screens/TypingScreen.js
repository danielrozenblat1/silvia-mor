import React, { useState, useEffect } from 'react';
import styles from './EightScreen.module.css';

const TypingEffect = ({ quotes }) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentQuote = quotes[currentQuoteIndex];
    
    // Handle typing and deleting effect
    if (!isDeleting && displayedText === currentQuote) {
      // Pause at the end of the sentence
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && displayedText === '') {
      // Move to the next quote
      setIsDeleting(false);
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      return;
    }

    // Set the typing/deleting speed
    const speed = isDeleting ? 50 : typingSpeed;

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Delete characters
        setDisplayedText(prevText => prevText.substring(0, prevText.length - 1));
      } else {
        // Add characters
        setDisplayedText(prevText => 
          currentQuote.substring(0, prevText.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentQuoteIndex, displayedText, isDeleting, quotes, typingSpeed]);

  return (
    <blockquote className={styles.quote}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </blockquote>
  );
};

export default TypingEffect;