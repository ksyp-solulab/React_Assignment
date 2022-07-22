import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Style from "./slideBar.module.css";
import SliderCars from "./SliderCard/SliderCars";
function SlideBar() {
  const settings = {
    dots: true,
      slidesToShow: 1,
  };
  return (
              <Carousel>
                <Carousel.Item>
                <SliderCars image={require('./../../images/home/girl1.jpg')} image2={require('./../../images/home/pricing.png')} />
                </Carousel.Item> 
                <Carousel.Item>
                <SliderCars image={require('./../../images/home/girl2.jpg')} image2={require('./../../images/home/pricing.png')} />
                </Carousel.Item>
                <Carousel.Item>
                <SliderCars image={require('./../../images/home/girl3.jpg')} image2={require('./../../images/home/pricing.png')} />
                </Carousel.Item>
              </Carousel>
  
  );
}

export default SlideBar;
