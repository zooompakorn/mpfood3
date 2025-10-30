import React from "react";
import { customers } from "../../utility/customers";

function CustomerCarousel() {
  const customer = [...customers, ...customers];
  return (
    <div className="w-full h-[30vh] bg-[#dcd0bf] flex flex-col justify-center items-center ">
      <div className="text-[45px] font-semibold mb-[15px]">Our Customers</div>
      <div className=" w-[45vw] overflow-hidden  max-md:w-[60vw]">
        <div className="flex w-max gap-5 animation-scroll ">
          {customer.map((e, i) => (
            <div
              className={`w-[10vw] h-[15vh] bg-white   rounded-2xl max-md:w-[25vw]`}
              key={i}
            >
              <img
                src={e.image}
                alt=""
                className={` object-fill w-[100%] h-[100%]  `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerCarousel;
