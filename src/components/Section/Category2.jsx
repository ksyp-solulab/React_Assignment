import React, { useState } from "react";
import Style from "./category.module.css";
import CategoryProduct from "./CategoryProduct";
import { BsFillPersonFill, BsCalendarEvent, BsClock } from "react-icons/bs";

function Category2() {
  const [data, setData] = useState("D");
  return (
    <div className={Style.category}>
      <ul className="nav">
        <li
          onClick={() => {
            setData("D");
          }}
        >
          <a> Details</a>
        </li>
        <li
          onClick={() => {
            setData("C");
          }}
        >
          <a> Compney</a>
        </li>
        <li
          onClick={() => {
            setData("T");
          }}
        >
          <a> Tag</a>
        </li>
        <li
          onClick={() => {
            setData("R");
          }}
        >
          <a> Reviews(5)</a>
        </li>
      </ul>
      <div>
        {data === "D" ? (
          <div className="row">
            <CategoryProduct
              image={require("../../asset/images/home/gallery1.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery2.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery3.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery4.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
          </div>
        ) : data === "C" ? (
          <div className="row">
            <CategoryProduct
              image={require("../../asset/images/home/gallery4.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery3.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery1.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery4.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
          </div>
        ) : data === "T" ? (
          <div className="row">
            <CategoryProduct
              image={require("../../asset/images/home/gallery3.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery4.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery1.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
            <CategoryProduct
              image={require("../../asset/images/home/gallery2.jpg")}
              price="$56"
              description="Easy Polo Black Edition"
            />
          </div>
        ) : (
          <div className={Style.reviews + " "+ "row"}>
            <ul>
              <li>
                <BsFillPersonFill className={Style.gold}/>
                <span>EUGEN</span>
                
              </li>
              <li>
                <BsClock className={Style.gold}/>
                <span>11:11 PM</span>
                
              </li>
              <li>
                <BsCalendarEvent className={Style.gold}/>
                <span>DEC 15,2013</span>
                
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              <b>Write Your Review</b>
            </p>
            <form action="#">
              <span>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
              </span>
              <textarea name=""></textarea>
              <b>Rating: </b>{" "}
              <img src={require('./../../asset/images/product-details/rating.png')} alt="" />
              <button type="button" className="float-end">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category2;
