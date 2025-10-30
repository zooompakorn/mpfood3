import React, { useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import DetailProduct from "./DetailProduct";

function ProductDetail({ product, setToggle, toggle, selected }) {
  const select = product.find((e) => Number(e.id) === selected);

  useEffect(() => {
    const scroll = () => {
      setToggle(false);
    };

    document.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, [toggle]);
  return (
    <>
      <div
        className={`z-[999] w-[100%] h-[100%] fixed top-0 bg-black/60 backdrop-blur-sm transition-all flex justify-center items-center duration-400 ${
          toggle ? "opacity-100   " : "opacity-0  pointer-events-none  "
        }`}
        onClick={() => setToggle(false)}
      >
        <div
          className={`w-[65%] h-[80%] max-md:w-[85%]  max-md:h-[80%] bg-[#dcd0bf] transition-scale duration-500 rounded-4xl relative ${
            toggle ? "scale-100 " : " scale-80  "
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <IoCloseSharp
            className="absolute right-3 top-3 text-[50px]  hover:text-white active:text-white"
            onClick={() => setToggle(!toggle)}
          />
          <DetailProduct select={select} />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
