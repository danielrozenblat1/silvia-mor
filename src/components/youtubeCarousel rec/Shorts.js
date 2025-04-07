// YoutubeCarousel.jsx
import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Shorts.module.css';

const YoutubeCarousel = ({ videoIds }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const itemWidth = container.children[0].offsetWidth;
      
      // Check if we're at the start of the original items
      if (container.scrollLeft <= 0) {
        // Jump to the duplicate set without animation
        container.scrollLeft = container.scrollWidth / 2;
      }
      
      // Then scroll one item left with animation
      container.scrollBy({
        left: -itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleNextClick = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const itemWidth = container.children[0].offsetWidth;
      const totalWidth = container.scrollWidth;
      const viewportWidth = container.offsetWidth;
      
      // Check if we're at the end of the original items
      if (container.scrollLeft + viewportWidth >= totalWidth / 2) {
        // Jump to the start of original items without animation
        container.scrollLeft = 0;
      }
      
      // Then scroll one item right with animation
      container.scrollBy({
        left: itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - distance;
  };

  // Handle infinite scroll
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = element;
      const maxScroll = scrollWidth - clientWidth;
      
      // If we reach the end of the duplicate set
      if (scrollLeft >= maxScroll - 10) {
        // Jump to the start of the original set
        element.scrollLeft = 0;
      }
      // If we reach the start and going backwards
      else if (scrollLeft <= 10) {
        // Jump to the start of the duplicate set
        element.scrollLeft = maxScroll / 2;
      }
    };

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={carouselRef}
        className={styles.carousel}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseUp}
        onTouchMove={handleTouchMove}
      >
        {/* Original videos + Duplicate videos for infinite scroll */}
        {[...videoIds, ...videoIds, ...videoIds].map((videoId, index) => (
          <div
            key={`${videoId}-${index}`}
            className={styles.videoWrapper}
          >
            <iframe
              className={styles.videoFrame}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video player ${index + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      <button
        onClick={handlePrevClick}
        className={`${styles.navButton} ${styles.prevButton}`}
        aria-label="Previous video"
      >
        <ChevronLeft className={styles.navIcon} />
      </button>
      
      <button
        onClick={handleNextClick}
        className={`${styles.navButton} ${styles.nextButton}`}
        aria-label="Next video"
      >
        <ChevronRight className={styles.navIcon} />
      </button>
    </div>
  );
};

export default YoutubeCarousel;