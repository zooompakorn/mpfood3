import React, { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHight = document.documentElement.scrollHeight;
      const presentage = (window.scrollY / (docHight - windowHeight)) * 100;
      setProgress(presentage);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="h-[10px] w-[100%] sticky top-0 z-50">
      <div
        className={`h-[100%]  bg-[#000000]`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
