import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Nav({ id }) {
  return (
    <div className="w-[100%] h-[100px] bg-amber-300  " id={id}>
      <a href="#home">Home</a>
      <a href="#product">Product</a>
    </div>
  );
}

export default Nav;
