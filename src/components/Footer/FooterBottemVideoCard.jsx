import React from 'react'
import Card from './footerBotttomVideoCard.module.css';
function FooterBottemVideoCard(props) {
  return (
    <div className="col-sm-3">
        <div className={Card.videoGallary}>
            <a href="#">
                <img className="img-fluid" src={props.img} alt="Not FOund" />
            </a>
            <p>{props.title}</p>
            <h2>{props.date}</h2>
        </div>
    </div>
  )
}

export default FooterBottemVideoCard