import React, { useEffect, useRef, useState } from "react";

function TimelineCompany() {
  const wrapRef = useRef(null); // คอนเทนเนอร์สูง ๆ (เช่น 200vh)
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapRef.current) return;

      const start = wrapRef.current.offsetTop; // จุดเริ่มของคอนเทนเนอร์ (เทียบกับ document)
      const end = start + wrapRef.current.offsetHeight - window.innerHeight; // จุดจบเมื่อเลื่อนผ่านคอนเทนเนอร์

      const y = window.scrollY;
      const p = Math.min(1, Math.max(0, (y - start) / (end - start)));
      setProgress(p);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapRef} className="relative h-[200vh]">
      {/* section นี้จะติดอยู่กับหน้าจอ */}
      <section className="sticky top-0 h-screen flex items-center justify-center bg-amber-100">
        <div className="relative w-[6px] h-[70vh] bg-gray-300 rounded">
          <div
            className="absolute bottom-0 left-0 w-full bg-sky-500 rounded transition-[height] duration-200"
            style={{ height: `${progress * 100}%` }}
          />
        </div>
      </section>
    </div>
  );
}

export default TimelineCompany;
