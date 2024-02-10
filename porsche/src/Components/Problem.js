import React, { useState, useEffect } from 'react';

const Problem = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
    console.log(window.scrollY)
  };

  useEffect(() => {
    // Attach event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <p>Scroll Position: {scrollPosition}px</p>

      {/* Your content goes here */}
      <div style={{ height: '1000px', overflow: 'auto' }}>
        <p>Some content here...</p>
        <p>Some more content...</p>
      </div>
    </div>
  );
};

export default Problem;
