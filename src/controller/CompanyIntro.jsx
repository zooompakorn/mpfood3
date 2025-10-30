import React from "react";

function CompanyIntro({ id }) {
  return (
    <div
      id={id}
      className="w-[99vw] h-[100vh] bg-amber-200 flex justify-center items-center relative"
    >
      <img
        src="/product/welcome.png"
        alt=""
        className="w-[100%] h-[100%] object-fill"
      />
      <div className="absolute font-semibold text-[100px] max-md:text-[29px] max-2xl:text-[50px] text-white text-shadow-lg/85 text-shadow-black duration-800 ">
        "เพราะเราใส่ใจ สดใหม่ทุกวัน"
      </div>
    </div>
  );
}

export default CompanyIntro;
