import React from 'react'
import Style from './notFound.module.css'
import {Link} from 'react-router-dom'

function NotFound404() {
  return (
    <div className="container text-center">
        <div className={Style.logo404}>
            <Link to="/"><img src={require('./../../asset/images/home/logo.png')} alt="" /></Link>
        </div>
        <div className={Style.content404}>
        <img src={require('./../../asset/images/404/404.png')} alt="" />
        <h1><b>OPPS!</b> We Couldn’t Find this Page</h1>
			<p>Uh... So it looks like you brock something. The page you are looking for has up and Vanished.</p>
			<h2><Link to="/">Bring me back Home</Link></h2>
        </div>
    </div>
  )
}

export default NotFound404