import React from "react";
import ProductCard from "../../ProductCard/ProductCard";
import LeftSlider from "../../Sliders/LeftSlider";
import Title from "../../Title/Title";
import Pagination from "../Pagination/Pagination";
import Style from "./products.module.css";
function Products() {
  return (
    <React.Fragment>
      <section className={Style.advertise}>
        <div className="container">
          <img src={require("../../../asset/images/shop/advertisement.jpg")} alt="" />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <LeftSlider />
            </div>
            <div className="col-sm-9">
              <Title item="Features" name="features" />
              <div className="row">
              <ProductCard
                  image={require("../../../asset/images/shop/product12.jpg")}
                  price={15}
                  id="12"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/shop/product11.jpg")}
                  price={25}
                  id="11"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/shop/product10.jpg")}
                  price={10}
                  id="10"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/shop/product9.jpg")}
                  price={40}
                  id="9"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/shop/product8.jpg")}
                  price={5}
                  id="8"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/shop/product7.jpg")}
                  price={46}
                  id="7"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/home/product1.jpg")}
                  price={50}
                  id="1"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/home/product2.jpg")}
                  price={60}
                  id="2"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/home/product3.jpg")}
                  price={65}
                  id="3"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/home/product4.jpg")}
                  price={95}
                  id="4"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/home/product5.jpg")}
                  price={20}
                  id="5"
                  description="Easy Polo Black Edition"
                />
                <ProductCard
                  image={require("../../../asset/images/home/product6.jpg")}
                  price={5}
                  id="6"
                  description="Easy Polo Black Edition"
                />

                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Products;
