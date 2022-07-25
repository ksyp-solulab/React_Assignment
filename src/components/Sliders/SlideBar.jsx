import React,{useRef} from "react";
import Carousel from 'react-bootstrap/Carousel';
import Style from "./slideBar.module.css";
import SliderCars from "./SliderCard/SliderCars";
function SlideBar() {
  
  return (
              <Carousel>
                <Carousel.Item>
                <SliderCars image={require('./../../asset/images/home/girl1.jpg')} image2={require('./../../asset/images/home/pricing.png')} />
                </Carousel.Item> 
                <Carousel.Item>
                <SliderCars image={require('./../../asset/images/home/girl2.jpg')} image2={require('./../../asset/images/home/pricing.png')} />
                </Carousel.Item>
                <Carousel.Item>
                <SliderCars image={require('./../../asset/images/home/girl3.jpg')} image2={require('./../../asset/images/home/pricing.png')} />
                </Carousel.Item>
              </Carousel>
  
  );
}

export default SlideBar;
