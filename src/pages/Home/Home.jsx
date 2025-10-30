import React from "react";
import Nav from "../../controller/Nav";
import CompanyIntro from "../../controller/CompanyIntro";
import Product from "../../controller/Product";
import ProgressBar from "../../controller/ProgressBar";
import ButtonStart from "../../controller/ButtonStart";
import QualitySystem from "../../controller/QualitySystem";
import TestCarousel from "../../controller/TestCarousel";
import CustomerCarousel from "../../controller/CustomerCarousel";
import TimelineCompany from "../../controller/TimelineCompany";
import ScrollSteps from "../../controller/ScrollSteps";
import Contact from "../../controller/Contact";
import BackToTop from "../../controller/BackToTop";
function Home() {
  return (
    <div className="">
      <div className="relative">
        <CompanyIntro id="welcome" />
        <ButtonStart />
      </div>

      <Product id="product" />

      <CustomerCarousel />
      <QualitySystem />

      <ScrollSteps vhPerStep={80} bottomOffsetVh={10} topOffsetVh={0} />
      <Contact id="contact" />
      <BackToTop />
    </div>
  );
}

export default Home;
