import React from "react";
import LeftSlider from "./../../Sliders/LeftSlider";
import Style from './productDetails.module.css';
import Carousel from 'react-bootstrap/Carousel';
import Recomended from "../Recomended/Recomended";
import Category2 from "../Category2";
    function ProductDetail() {
    return (
        <section>
        <div className="container">
            <div className="row">
            <div className="col-sm-3">
                <LeftSlider />
            </div>
            <div className="col-sm-9">
                <div className={Style.productDetails + " "+ "row"}>                    
                    <div className="col-sm-5">
                        <div className={Style.viewProduct}>
                            <img src={require('./../../../images/product-details/1.jpg')} alt="" />
                            <h3>ZOOM</h3>
                        </div>
                        <div className={Style.similarProducts}>
                            <Carousel>
                                <Carousel.Item>
                                    <img src={require("./../../../images/product-details/similar1.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar2.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar3.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar1.jpg")} alt="" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={require("./../../../images/product-details/similar2.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar3.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar1.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar2.jpg")} alt="" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={require("./../../../images/product-details/similar3.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar2.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar1.jpg")} alt="" />
                                    <img src={require("./../../../images/product-details/similar3.jpg")} alt="" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className={Style.productInformation} >
                            <img src={require('./../../../images/product-details/new.jpg')} className={Style.newArrives} alt="" />
                            <h2>Anne Klein Sleeveless Colorblock Scuba</h2>
								<p>Web ID: 1089772</p>
								<img src={require("./../../../images/product-details/rating.png")} alt="" />
								<span>
									<span>US $59</span>
									<label>Quantity:</label>
									<input className={Style.spanInput} type="text" />
									<button className={Style.spanBtn}>
										Add to cart
									</button>
								</span>
								<p><b>Availability:</b> In Stock</p>
								<p><b>Condition:</b> New</p>
								<p><b>Brand:</b> E-SHOPPER</p>
								<a href=""><img src={require("./../../../images/product-details/share.png")} class="share img-responsive"  alt="" /></a>
                        </div>
                    </div>
                    <Category2 />
                    <Recomended />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
    }

    export default ProductDetail;
