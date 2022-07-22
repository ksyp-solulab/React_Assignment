import React from 'react'
import footerBottom from './footerBottom.module.css'

function FooterBottom() {
  return (
    <div className={footerBottom.footorBottom}>
        <div className="container">
            <div className="row">
            <p className="col-sm-6 pullLeft">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
            <p className="col-sm-6 " style={{justifyContent: "end", display: "flex"}}>Designed by <span><a href="#">Themeum</a></span></p>
            </div>
        </div>
    </div>
  )
}

export default FooterBottom