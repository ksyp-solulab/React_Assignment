import React from 'react'
import headerTop from './headerTop.module.css'
import {BsFillTelephoneFill} from 'react-icons/bs';
import {GrMail} from 'react-icons/gr'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'
import {FaLinkedinIn} from 'react-icons/fa'
import {TiSocialGooglePlus} from 'react-icons/ti'
import {BsDribbble} from 'react-icons/bs'



function HeaderTop() {
  return (
    <React.Fragment>
        <div className={headerTop.header_top}>
            <div className="container">
                <div className="row">
                <div className="col-sm-6" style={{margin:'auto'}}>
                    <div>
                        <ul className="nav">
                            <li><a href="#"><BsFillTelephoneFill /> +2 95 01 88 821</a></li>
                            <li><a href="#"><GrMail /> info@domain.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className={headerTop.soical}>
                        <ul className="nav">
                            <li><a href="#"><FaFacebookF /></a></li>
                            <li><a href="#"><BsTwitter /></a></li>
                            <li><a href="#"><FaLinkedinIn /></a></li>
                            <li><a href="#"><BsDribbble /></a></li>
                            <li><a href="#"><TiSocialGooglePlus /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default HeaderTop