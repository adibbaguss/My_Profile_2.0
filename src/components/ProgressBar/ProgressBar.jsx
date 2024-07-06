import React, { useRef, useEffect, useState } from 'react';

const ProgressBar = ({ skillName, progress }) => {
  const progressBarRef = useRef(null);
  const [animatedWidth, setAnimatedWidth] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProgressBar();
          } else {
            // Reset progress when leaving section
            setAnimatedWidth(0);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(progressBarRef.current);

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  const animateProgressBar = () => {
    let progressWidth = 0;
    const interval = setInterval(() => {
      if (progressWidth < progress) {
        progressWidth += 1; // Adjust increment speed as needed
        setAnimatedWidth(progressWidth);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust interval time as needed
  };

  let levelText = 'Novice'; // Default level text

  if (progress >= 80) {
    levelText = 'Expert';
  } else if (progress >= 60) {
    levelText = 'Proficient';
  } else if (progress >= 40) {
    levelText = 'Competent';
  } else if (progress >= 20) {
    levelText = 'Advance Beginner';
  } else {
    levelText = 'Novice';
  }

  return (
    <div className="my-0" ref={progressBarRef}>
      <h3 className="text-white text-sm">{skillName}</h3>
      <div className="w-full h-5 bg-gray-200 rounded-md overflow-hidden">
        <div className="pl-2 h-full bg-green progress-bar text-primary-color whitespace-nowrap text-xs" style={{ width: `${animatedWidth}%` }}>
          {levelText}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
