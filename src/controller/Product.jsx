import React from "react";
import ProductList from "./ProductList";

function Product({ id }) {
  return (
    <div
      id={id}
      className="w-[100%] h-[auto]  pt-[50px] flex-wrap  pb-[135px] flex flex-col justify-center items-center"
    >
      <ProductList />
    </div>
  );
}

export default Product;
