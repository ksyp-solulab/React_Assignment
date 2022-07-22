import React from 'react'
import {header} from './header.module.css'
import HeaderBottom from './HeaderBottom'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'
function Header() {
  return (
    <div className="header">
      <HeaderTop />
      <HeaderMid />
      <HeaderBottom />
    </div>
  )
}

export default Header