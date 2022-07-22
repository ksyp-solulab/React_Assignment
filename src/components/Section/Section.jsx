import React from "react";
import LeftSlider from "../Sliders/LeftSlider";
import SlideBar from "../Sliders/SlideBar";
import Category from "./Category";
import Features from "./Features";
import Recomended from "./Recomended/Recomended";
import Style from "./section.module.css";

function Section() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <SlideBar />
          <div className="col-sm-3" style={{marginTop:'50px'}}>
            <LeftSlider />
          </div>
          <div className="col-sm-9" style={{marginTop:'50px'}}>
            <Features />
            
            <div className="row">
              <Category />
              <Recomended />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
