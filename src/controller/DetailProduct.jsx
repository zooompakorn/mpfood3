import React from "react";

function DetailProduct({ select }) {
  return (
    <div className="w-[100%] h-[100%] flex flex-col justify-center items-center font-[700] gap-5">
      <div className="relative text-[30px] before:content-[''] before:w-[100%] before:h-[5px] before:bg-black  before:absolute before:-bottom-1">
        {select?.productName}
      </div>
      <img
        src={select?.image}
        alt=""
        className="w-[35%] h-[50%]  max-md:w-[85%] rounded-2xl"
      />
      <div className="text-[18px] text-center">{select?.detail}</div>
      <a
        href="#contact"
        className="border-2 border-black px-10 py-3 hover:text-white hover:bg-black active:bg-black hover:border-white active:text-white"
      >
        Contact
      </a>
    </div>
  );
}

export default DetailProduct;
