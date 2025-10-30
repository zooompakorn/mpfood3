import React, { useEffect, useRef, useState } from "react";
import { steps } from "../../utility/step";
import TextStep from "./TextStep";
import MediaStep from "./MediaStep";
import { AnimatePresence, motion } from "framer-motion";

const clamp = (n) => Math.max(0, Math.min(1, n));

function ScrollSteps({ vhPerStep, bottomOffsetVh, topOffsetVh }) {
  const secRef = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!secRef.current) return;

      const wrap = secRef.current;
      const viewH = window.innerHeight;
      const top = wrap.offsetTop;
      const eHight = wrap.offsetHeight;

      const start = top + (bottomOffsetVh / 100) * viewH;
      const end = top + eHight - viewH + (topOffsetVh / 100) * viewH;

      const scrollY = window.scrollY;
      const p = clamp((scrollY - start) / (end - start));
      const i = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(p * steps.length))
      );

      setProgress(i);
    };

    const reSize = () => onScroll();

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", reSize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", reSize);
    };
  }, [vhPerStep, bottomOffsetVh, topOffsetVh]);
  return (
    <div
      ref={secRef}
      className="relative "
      style={{ height: `${steps.length * vhPerStep}vh` }}
    >
      <div
        className={`sticky top-20 w-[85vw] h-[70vh]  left-[50%]  -translate-x-[8%] mt-30 `}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={progress}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`${
              steps[progress].id === 0 || steps[progress].id === 4
                ? "flex-col-reverse "
                : steps[progress].id % 2 !== 0
                ? "flex-row-reverse"
                : "flex-row"
            } absolute inset-0 flex  items-center justify-center max-lg:flex-col-reverse `}
          >
            <div className=" flex gap-5 justify-center items-center  w-[100%] h-[90%] flex-wrap ">
              <MediaStep
                type={steps[progress]?.type}
                image={steps[progress]?.image}
                Icon={steps[progress]?.icon}
              />
            </div>
            <div className="flex gap-1 flex-col   justify-center items-center  w-[100vw] h-[20vh]">
              <TextStep
                title={steps[progress]?.title}
                desc={steps[progress]?.desc}
                id={steps[progress].id}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ScrollSteps;
