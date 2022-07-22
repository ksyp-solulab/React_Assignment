import React from "react";
import headerMid from "./headerMid.module.css";
import {
  BsFillPersonFill,
  BsFillStarFill,
  BsCartFill,
  BsFillLockFill,
} from "react-icons/bs";
import './dropDown.css'
import { BiCrosshair } from "react-icons/bi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderMid() {
  const cartQuantity = useSelector((state) => state.cart.totalQuntitY);
  return (
    <React.Fragment>
      <div className={headerMid.headerMid}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo float-start">
                <Link to="/">
                  <img src={require("./../../images/home/logo.png")} alt="" />
                </Link>
              </div>
              <div className="float-end">
                <div className="dropdown">
                  <button className="dropbtn">USA</button>
                  <div className="dropdown-content">
                    <a href="#">Canada</a>
                    <a href="#">UK</a>
                  </div>
                </div>
                <div className="dropdown">
                  <button className="dropbtn">Dollor</button>
                  <div className="dropdown-content">
                    <a href="#">Canada Dollor</a>
                    <a href="#">Pound</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={headerMid.shopMenu}>
                <ul>
                  <li>
                    <Link to="/">
                      <BsFillPersonFill /> Account
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <BsFillStarFill /> Wishlish
                    </Link>
                  </li>
                  <span className={headerMid.cartQuantity}>{cartQuantity}</span>
                  <li>
                    <Link to="/cart">
                      <BiCrosshair /> Cart
                    </Link>
                  </li>
                  <li>
                    <Link to="/checkout">
                      <BsCartFill /> Checkout{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/login">
                      <BsFillLockFill /> Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default HeaderMid;
