import React from "react";
import { BsArrowBarUp } from "react-icons/bs";

function BackToTop() {
  return (
    <div className=" bg-gray-400 flex justify-center items-center w-[5%] h-[8%] rounded-[50%] fixed bottom-5  right-10 max-md:w-[11%] max-md:h-[8%]">
      <a
        href="#welcome"
        className="w-[100%] h-[100%] flex flex-col justify-evenly items-center"
      >
        <BsArrowBarUp className="text-white w-[50%] h-[50%] " />
      </a>
    </div>
  );
}

export default BackToTop;
