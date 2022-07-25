import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Title from './../Title/Title'
import Style from './fetures.module.css'
function Features() {
  return (
        <div className={Style.feturesItems}>
        <Title item="Features" name="features" />
        <div className="row">
        <ProductCard image={require('../../asset/images/home/product1.jpg')} price={50} description="Easy Polo Black Edition" id="1" />
        <ProductCard image={require('../../asset/images/home/product2.jpg')} price={60} description="Easy Polo Black Edition" id="2"/>
        <ProductCard image={require('../../asset/images/home/product3.jpg')} price={65} description="Easy Polo Black Edition" id="3"/>
        <ProductCard image={require('../../asset/images/home/product4.jpg')} price={95} description="Easy Polo Black Edition" id="4"/>
        <ProductCard image={require('../../asset/images/home/product5.jpg')} price={20} description="Easy Polo Black Edition" id="5"/>
        <ProductCard image={require('../../asset/images/home/product6.jpg')} price={5} description="Easy Polo Black Edition" id="6"/>
        </div>
        </div>
  )
}

export default Features