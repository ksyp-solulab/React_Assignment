import React from 'react'
import {BsFillCartFill} from 'react-icons/bs';
import Style from './.././categoryProduct.module.css'
function RecomdedCard(props) {
  return (
    <div className="col-sm-4">
        <div className={Style.singleProduct} style={{border: '1px solid #F7F7F0'}}>
            <div className={Style.productInfo}>
                <img src={props.image} alt="" />
                <h2>${props.price}</h2>
                <p>Easy Polo Black Edition</p>
                <button className={Style.addToCart}>
                        <BsFillCartFill />
                        Add to cart
                    </button>
            </div>
        </div>
    </div>
  )
}

export default RecomdedCard