import React, { useState } from "react";
import { product } from "../../utility/products";
import ProductDetail from "./ProductDetail";

function ProductList() {
  const [toggle, setToggle] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="h-[100px] flex justify-center items-center text-[80px] max-md:text-[65px] font-[700]">
        Our Product
      </div>
      <div className="relative w-[80%] p-10 flex gap-15 flex-wrap justify-center items-center ">
        {product.map((e) => (
          <div
            className="w-[35vh] h-[50vh] p-2 hover:scale-105 hover:duration-700 hover:bg-[#e6d2ac] rounded-4xl"
            key={e.id}
            onClick={() => setSelected(e.id)}
          >
            <img
              src={e.image}
              alt=""
              className="w-[100%] h-[100%] rounded-4xl  "
              onClick={() => setToggle(!toggle)}
            />
          </div>
        ))}
        <ProductDetail
          product={product}
          toggle={toggle}
          setToggle={setToggle}
          selected={selected}
        />
      </div>
    </>
  );
}

export default ProductList;
