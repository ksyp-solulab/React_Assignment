import React,{ useState} from 'react'
import Style from './headerBottom.module.css';
import {NavLink} from 'react-router-dom'
import {AiOutlineDown} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi'

function HeaderBottom() {
  const [subMenu,setSubMenu] = useState(false);
  const [blogSubmenu,setBlogSubMenu] = useState(false);
  const [toggel, setToggel] = useState(false);
  return (
    <div className={Style.headerBottom}>
        <div className="container">
            <div className="row" style={{display: 'flex', alignItems: 'center'}}>
                <div className='col-sm-9' style={{position: 'relative'}}>
                    <div className={Style.mainMenu} id={toggel ? Style["hidden"] : ""}>
                        <ul className={Style.navBar}>
                          <li><NavLink to="/" className={Style.navLink} activeClassName={Style.activeLink}>Home</NavLink></li>
                          <li className={Style.dropdown} onMouseEnter={() =>{ setSubMenu(true)}} onMouseLeave={() =>{ setSubMenu(false)}}><NavLink to="/" className={Style.navLink} activeClassName={Style.activeLink}> Shop <AiOutlineDown/>  </NavLink>
                            {
                              subMenu && <ul role="menu" className={Style.subMenu}>
                              <li> <NavLink to="/products" className={Style.navLink} activeClassName={Style.activeLink}>Products</NavLink> </li>
                              <li> <NavLink to="/productdetails" className={Style.navLink} activeClassName={Style.activeLink}>Product Details</NavLink> </li>
                              <li> <NavLink to="/checkout" className={Style.navLink} activeClassName={Style.activeLink}>Checkout</NavLink> </li>
                              <li> <NavLink to="/cart" className={Style.navLink} activeClassName={Style.activeLink}>Cart</NavLink> </li>
                              <li> <NavLink to="/login" className={Style.navLink} activeClassName={Style.activeLink}>Login</NavLink> </li>
                            </ul>
                            }
                          </li>
                          <li className={Style.dropdown}  onMouseEnter={() =>{ setBlogSubMenu(true)}} onMouseLeave={() =>{ setBlogSubMenu(false)}}><NavLink to="/" className={Style.navLink} activeClassName={Style.activeLink}>Blog <AiOutlineDown /></NavLink>
                            {
                              blogSubmenu && <ul role="menu" className={Style.subMenu}>
                              <li> <NavLink to="/blog" className={Style.navLink} activeClassName={Style.activeLink}>Blog List</NavLink> </li>
                              <li> <NavLink to="/singleblog
                              " className={Style.navLink} activeClassName={Style.activeLink}>Single Blog</NavLink> </li>
                            </ul>
                            }
                          </li>
                          <li><NavLink to="/456789" className={Style.navLink} activeClassName={Style.activeLink}>404</NavLink></li>
                          <li><NavLink to="/contact" className={Style.navLink} activeClassName={Style.activeLink}>Contact</NavLink></li>
                        </ul>
                    </div>
                    <GiHamburgerMenu size={50} className={Style.btn} onClick={() => { setToggel(!toggel)}}/>
                </div>
                <div className="col-sm-3">
                  <div className={Style.searchBox + " "+ "float-end"}>
                    <input type="text" placeholder="Search"/>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderBottom