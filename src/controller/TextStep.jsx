import React from "react";

function TextStep({ title, desc, id }) {
  return (
    <>
      <div
        className={`${
          id === 0
            ? "font-semibold text-[40px] mb-[40px] max-lg:text-[30px]"
            : "text-4xl font-semibold"
        }  `}
      >
        {title}
      </div>
      <div
        className={`${id === 0 ? "font-semibold text-[27px]" : "text-2xl"}  `}
      >
        {desc}
      </div>
    </>
  );
}

export default TextStep;
