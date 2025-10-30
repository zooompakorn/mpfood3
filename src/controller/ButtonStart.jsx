import React from "react";
import { HiChevronDoubleDown } from "react-icons/hi2";

function ButtonStart() {
  return (
    <div className="w-[100%] h-[15vh]  absolute bottom-10 gap-10 flex justify-center items-center ">
      <a
        href="#product"
        className="
    relative px-10 py-4 text-white rounded-lg overflow-hidden font-[700] text-[30px] max-md:text-[15px]
    transition-colors duration-700 hover:text-black
    before:content-[''] before:absolute before:inset-0 before:bg-[#e6d2ac]
    before:-translate-y-full hover:before:translate-y-0
    before:transition-transform before:duration-700
  "
      >
        <span className="relative z-10 active:text-black">EXPLORE MORE</span>
      </a>
      <a
        href="#contact"
        className="
    relative px-10 py-4 text-white rounded-lg overflow-hidden font-[700] text-[30px] max-md:text-[15px]
    transition-colors duration-700 hover:text-black
    before:content-[''] before:absolute before:inset-0 before:bg-[#e6d2ac]
    before:-translate-y-full hover:before:translate-y-0
    before:transition-transform before:duration-700
  "
      >
        <span className="relative z-10 active:text-black">CONTACT US</span>
      </a>
    </div>
  );
}

export default ButtonStart;

//w-[320px] h-[90px]  max-md:w-[200px] max-md:h-[65px]  hover:bg-amber-200 duration-500 flex justify-center items-center text-[40px] max-md:text-[20px] text-white shadow-lg shadow-black
