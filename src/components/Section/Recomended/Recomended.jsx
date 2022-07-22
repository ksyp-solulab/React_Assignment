import React from 'react'
import Style from './../Blog/blog.module.css'
import RecomdedCard from './RecomdedCard';
import Carousel from 'react-bootstrap/Carousel';
function Recomended() {
  return (
    <div className="recomendedItems" style={{paddingBottom:'20px'}}>
        <h2  className={Style.title}>recommended items</h2>
              <Carousel>
                <Carousel.Item>
                <div className="row">
                <RecomdedCard image={require('./../../../images/home/recommend1.jpg')} price={50} />
                <RecomdedCard image={require('./../../../images/home/recommend1.jpg')} price={50} />
                <RecomdedCard image={require('./../../../images/home/recommend1.jpg')} price={50} />
                </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="row">
                <RecomdedCard image={require('./../../../images/home/recommend1.jpg')} price={50} />
                <RecomdedCard image={require('./../../../images/home/recommend1.jpg')} price={50} />
                <RecomdedCard image={require('./../../../images/home/recommend1.jpg')} price={50} />
                </div>
                </Carousel.Item>
              </Carousel>
    </div>
  )
}

export default Recomended