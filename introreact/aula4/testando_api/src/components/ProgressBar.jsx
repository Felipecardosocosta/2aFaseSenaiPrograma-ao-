// ProgressBar.jsx
import { useEffect, useState } from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) return 0; 
        return old + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
}


// PulsingLoader.jsx


export function PulsingLoader() {
  return (
    <div className="pulsing-container">
      <div className="pulsing"></div>
      <div className="pulsing"></div>
      <div className="pulsing"></div>
    </div>
  );
}




export  function SquareDotsLoader() {
  return (
       <div className="stretch-loader">
      <div className="s-dot d1"></div>
      <div className="s-dot d2"></div>
      <div className="s-dot d3"></div>
    </div>
  );
}
