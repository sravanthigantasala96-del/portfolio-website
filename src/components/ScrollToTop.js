import React, { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-danske-blue text-white border-none w-12 h-12 md:w-12 md:h-12 rounded-full text-2xl cursor-pointer shadow-lg z-[1000] transition-all duration-300 flex items-center justify-center animate-fade-in-up hover:bg-danske-blue-light hover:-translate-y-1 hover:shadow-xl active:translate-y-0"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
