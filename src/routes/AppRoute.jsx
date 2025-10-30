import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "../pages/Home/Home";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
