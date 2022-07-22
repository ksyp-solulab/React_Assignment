import React from 'react'
import {footer} from './footer.module.css'
import FooterBottom from './FooterBottom'
import FooterTop from './FooterTop'


function Footer() {
  return (
    <div className="footer">
        <FooterTop />
        <FooterBottom />
    </div>
  )
}

export default Footer