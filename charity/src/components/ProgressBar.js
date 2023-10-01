import React, { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 54) {
          clearInterval(progressInterval);
          return prevProgress;
        } else {
          return prevProgress + 6;
        }
      });
    }, 1000);

    return () => {
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%` }}>
        <div className="progressText" style={{ transform: `translateX(${progress}%)` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;