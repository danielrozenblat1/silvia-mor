import React, { useState, useEffect, useCallback } from 'react';
import styles from './NavBarNew.module.css';
import logo from "../../images/סילביה מור לוגו 2.png";
import { FaTimes } from 'react-icons/fa';
import Popped from '../poppedUpWindowMasterclass/Popped';

const NavBarNew = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPoppedOpen, setIsPoppedOpen] = useState(false);

  // פונקציה לגלילה חלקה משלנו
  const smoothScrollTo = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  useEffect(() => {
    let timeoutId = null;
    
    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > 200);
      }, 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsClosing(false);
      }, 500);
    } else {
      setIsMenuOpen(true);
    }
  };

  const handleClosePoppedForm = () => {
    setIsPoppedOpen(false);
    // מחזיר את הנייבבר לפי מיקום הגלילה כשהטופס נסגר
    const scrollPosition = window.scrollY;
    setIsVisible(scrollPosition > 200);
  };

  const openWhatsApp = () => {
    const phone = '972526255255';
    const message = 'היי סילביה הגעתי מהדף, אשמח לשמוע עוד על המאסטר קלאס הבא';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/silvia.mor.academy/', '_blank');
  };

  const handleMenuItemClick = (elementId, offset, action = null) => {
    if (action === 'whatsapp') {
      openWhatsApp();
    } else if (action === 'instagram') {
      openInstagram();
    } else if (action === 'registration') {
      setIsPoppedOpen(true);
      setIsVisible(false); // מסתיר את הנייבבר כשהטופס נפתח
    } else if (elementId) {
      smoothScrollTo(elementId, offset);
    }
    toggleMenu();
  };

  const menuItems = [
    { name: 'שעות', id: 'שעות', offset: -100 },
    { name: 'מיקום', id: 'מיקום', offset: -100 },
    { name: 'הרשמה', action: 'registration' },
    { name: 'לווצאפ ישיר איתי', action: 'whatsapp' },
    { name: 'לאינסטגרם שלי', action: 'instagram' }
  ];

  return (
    <>
      <nav className={`
        ${styles.navbar} 
        ${isVisible ? styles.visible : styles.hidden}
      `}>
        <div className={styles.navbarInner}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" />
          </div>

          <button className={styles.menuButton} onClick={toggleMenu}>
            <div className={styles.buttonContent}>
              <span className={styles.buttonText}>לפתיחת התפריט</span>
            </div>
          </button>
        </div>
      </nav>

      {(isMenuOpen || isClosing) && (
        <div className={`${styles.mobileMenu} ${isClosing ? styles.closing : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.closeButton} onClick={toggleMenu}>
              <FaTimes />
            </div>
            <div className={styles.mobileMenuLogo}></div>
          </div>

          <div className={styles.mobileMenuContent}>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleMenuItemClick(item.id, item.offset, item.action)}
                className={styles.mobileMenuItem}
              >
                {item.name}
              </button>
            ))}

            <div className={styles.center}>
              <img className={styles.centerLogo} src={logo} alt="סילביה מור לוגו" />
            </div>
          </div>
        </div>
      )}
      
      {isPoppedOpen && <Popped onClose={handleClosePoppedForm} />}
    </>
  );
};

export default NavBarNew;