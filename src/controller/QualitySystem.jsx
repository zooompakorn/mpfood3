import React from "react";
import QualityList from "./QualityList";

function QualitySystem() {
  return (
    <div className="w-[100%] h-[auto] bg-[#e7e5df] py-[50px] flex flex-col justify-center items-center ">
      <div className="h-[100px] flex justify-center items-center text-[50px] max-md:text-[30px] font-[700]  ">
        Quality & Reward
      </div>
      <QualityList />
    </div>
  );
}

export default QualitySystem;
