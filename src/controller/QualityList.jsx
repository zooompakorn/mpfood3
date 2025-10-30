import React from "react";
import { quality } from "../../utility/quality";

function QualityList() {
  return (
    <div className="w-[80vw] h-[auto]  flex justify-evenly items-center max-lg:flex-col">
      {quality.map((e) => (
        <div
          className="w-[20vh] h-[20vh]  flex justify-center items-center "
          key={e.id}
        >
          <img src={e.image} alt="" className="w-[100%] h-[100%]" />
        </div>
      ))}
    </div>
  );
}

export default QualityList;
