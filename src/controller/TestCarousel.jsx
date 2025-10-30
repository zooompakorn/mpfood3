import React from "react";
const n = [1, 2, 3, 4, 5];

function TestCarousel() {
  const item = [...n, ...n];
  return (
    <div className="w-[100%] h-[300px] bg-amber-200  flex justify-center items-center ">
      <div className="w-[600px]  overflow-hidden py-10">
        <div className="flex w-max gap-3 animation-scroll">
          {item.map((e, index) => (
            <div
              className="w-[200px] h-[100px] flex-none bg-amber-300 "
              key={index}
            >
              {e}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TestCarousel;
