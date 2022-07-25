import React, { useState } from "react";
import Style from "./header.module.css";
import { useSelector } from "react-redux";
import './dropDown.css'
import { GrMail } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import {
  BsDribbble,
  BsFillPersonFill,
  BsFillStarFill,
  BsCartFill,
  BsFillLockFill,
  BsFillTelephoneFill,
  BsTwitter,
} from "react-icons/bs";
import { BiCrosshair } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "../Search/Search";
function Header() {
  const [subMenu, setSubMenu] = useState(false);
  const [blogSubmenu, setBlogSubMenu] = useState(false);
  const [toggel, setToggel] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.totalQuntitY);
  return (
    <div className="header">
      <div className={Style.contactHeader}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ margin: "auto" }}>
              <div>
                <ul className="nav">
                  <li>
                    <a href="#">
                      <BsFillTelephoneFill /> +2 95 01 88 821
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <GrMail /> info@domain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={Style.soical}>
                <ul className="nav">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <TiSocialGooglePlus />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.headerMain}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logo float-start">
                <Link to="/">
                  <img src={require("./../../asset/images/home/logo.png")} alt="" />
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
              <div className={Style.shopMenu}>
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
                  <span className={Style.cartQuantity}>{cartQuantity}</span>
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
      <div className={Style.headerLinks}>
        <div className="container">
          <div
            className="row"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="col-sm-9" style={{ position: "relative" }}>
              <div
                className={Style.mainMenu}
                id={toggel ? Style["hidden"] : ""}
              >
                <ul className={Style.navBar}>
                  <li>
                    <NavLink
                      to="/"
                      className={Style.navLink}
                      activeClassName={Style.activeLink}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li
                    className={Style.dropdown}
                    onMouseEnter={() => {
                      setSubMenu(true);
                    }}
                    onMouseLeave={() => {
                      setSubMenu(false);
                    }}
                  >
                    <NavLink
                      to="/"
                      className={Style.navLink}
                      activeClassName={Style.activeLink}
                    >
                      {" "}
                      Shop <AiOutlineDown />{" "}
                    </NavLink>
                    {subMenu && (
                      <ul role="menu" className={Style.subMenu}>
                        <li>
                          {" "}
                          <NavLink
                            to="/products"
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Products
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/productdetails"
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Product Details
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/checkout"
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Checkout
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/cart"
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Cart
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/login"
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Login
                          </NavLink>{" "}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li
                    className={Style.dropdown}
                    onMouseEnter={() => {
                      setBlogSubMenu(true);
                    }}
                    onMouseLeave={() => {
                      setBlogSubMenu(false);
                    }}
                  >
                    <NavLink
                      to="/"
                      className={Style.navLink}
                      activeClassName={Style.activeLink}
                    >
                      Blog <AiOutlineDown />
                    </NavLink>
                    {blogSubmenu && (
                      <ul role="menu" className={Style.subMenu}>
                        <li>
                          {" "}
                          <NavLink
                            to="/blog"
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Blog List
                          </NavLink>{" "}
                        </li>
                        <li>
                          {" "}
                          <NavLink
                            to="/singleblog
                              "
                            className={Style.navLink}
                            activeClassName={Style.activeLink}
                          >
                            Single Blog
                          </NavLink>{" "}
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <NavLink
                      to="/456789"
                      className={Style.navLink}
                      activeClassName={Style.activeLink}
                    >
                      404
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={Style.navLink}
                      activeClassName={Style.activeLink}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
              <GiHamburgerMenu
                size={50}
                className={Style.btn}
                onClick={() => {
                  setToggel(!toggel);
                }}
              />
            </div>
            <div className="col-sm-3">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
