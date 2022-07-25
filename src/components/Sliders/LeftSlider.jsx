import React from "react";
import Title from "../Title/Title";
import Accordion from "react-bootstrap/Accordion";
import Style from "./leftSlider.module.css";
function LeftSlider() {
  return (
    <div className="leftSideBar">
      <Title name="category" item="CATEGORY" />
      <div className={Style.categoryBar}>
        <Accordion className={Style.border}>
          <ul className={Style.list}>
            <Accordion.Item eventKey="0" className={Style.remove}>
              <Accordion.Header>
                <li className={Style.pullLeft}>SPORTSWEAR</li>
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  <a href="#">Nike </a>
                </li>
                <li>
                  <a href="#">Under Armour </a>
                </li>
                <li>
                  <a href="#">Adidas </a>
                </li>
                <li>
                  <a href="#">Puma</a>
                </li>
                <li>
                  <a href="#">ASICS </a>
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className={Style.remove}>
              <Accordion.Header>
                <li className={Style.pullLeft}>MENS</li>
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  <a href="#">Fendi</a>
                </li>
                <li>
                  <a href="#">Guess</a>
                </li>
                <li>
                  <a href="#">Valentino</a>
                </li>
                <li>
                  <a href="#">Dior</a>
                </li>
                <li>
                  <a href="#">Versace</a>
                </li>
                <li>
                  <a href="#">Armani</a>
                </li>
                <li>
                  <a href="#">Prada</a>
                </li>
                <li>
                  <a href="#">Dolce and Gabbana</a>
                </li>
                <li>
                  <a href="#">Chanel</a>
                </li>
                <li>
                  <a href="#">Gucci</a>
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className={Style.remove}>
              <Accordion.Header>
                <li className={Style.pullLeft}>WOMENS</li>
              </Accordion.Header>
              <Accordion.Body>
                <li>
                  <a href="#">Fendi</a>
                </li>
                <li>
                  <a href="#">Guess</a>
                </li>
                <li>
                  <a href="#">Valentino</a>
                </li>
                <li>
                  <a href="#">Dior</a>
                </li>
                <li>
                  <a href="#">Versace</a>
                </li>
              </Accordion.Body>
            </Accordion.Item>
            <li>
              <a href="#">KIDSs</a>
            </li>
            <li>
              <a href="#">FASHION</a>
            </li>
            <li>
              <a href="#">HOUSEHOLDS</a>
            </li>
            <li>
              <a href="#">INTERIORS</a>
            </li>
            <li>
              <a href="#">CLOTHING</a>
            </li>
            <li>
              <a href="#">BAGS</a>
            </li>
            <li>
              <a href="#">SHOES</a>
            </li>
          </ul>
        </Accordion>
      </div>
      <Title name="category" item="BRANDS" />
      <div className={Style.brandsBar}>
        <ul>
                <li><a href="#"> Acne <span className="float-end">(50)</span></a></li>
									<li><a href="#"> Grüne Erde <span className="float-end">(56)</span></a></li>
									<li><a href="#"> Albiro <span className="float-end">(27)</span></a></li>
									<li><a href="#"> Ronhill <span className="float-end">(32)</span></a></li>
									<li><a href="#">Oddmolly <span className="float-end">(5)</span></a></li>
									<li><a href="#">Boudestijn <span className="float-end">(9)</span></a></li>
									<li><a href="#">Rösch creative culture <span className="float-end">(4)</span></a></li>
        </ul>
      </div>
      <div className={Style.priceRange}>
							<Title name="category" item="Price Range" />
							<div className={Style.well}>
								 <input type="range" className={Style.span2} data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
								 <b className="float-start">$ 0</b> <b className="float-end">$ 600</b>
							</div>
						</div>
      <div className={Style.shipping}>
          <img src={require("./../../asset/images/home/shipping.jpg")} alt="" />
      </div>
    </div>
  );
}

export default LeftSlider;