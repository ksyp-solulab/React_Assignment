import React from "react";
import Style from './sliderCard.module.css'
function SliderCars(props) {
  return (
    <div className={Style.item}>
    <div className="row">
      <div className="col-sm-6">
        <h1>
          <span>E</span>-SHOPPER
        </h1>
        <h2>Free E-Commerce Template</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <button>
          Get it now
        </button>
      </div>
      <div className="col-sm-6">
        <img src={props.image} className={Style.girl + " "+ "img-fluid"}/>
        <img src={props.image2} className={Style.pricing + " "+ "img-fluid"} />
      </div>
      </div>
    </div>
  );
}

export default SliderCars;
