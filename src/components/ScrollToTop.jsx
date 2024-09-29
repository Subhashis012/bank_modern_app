import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div
      onClick={scrollTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-blue-gradient text-white shadow-lg cursor-pointer transition-opacity duration-300 ${
        showScroll ? 'opacity-100' : 'opacity-0'
      } z-50`}
    >
      <FontAwesomeIcon icon={faArrowUp} className="text-xl" />
    </div>
  );
};

export default ScrollToTop;
