import React from 'react'
import Style from './categoryProduct.module.css'
import {BsFillCartFill} from 'react-icons/bs';
function CategoryProduct(props) {
  return (
    <div className="col-sm-3">
        <div className={Style.productWrapper}>
            <div className={Style.singleProduct}>
                <div className={Style.productInfo}>
                    <img src={props.image} alt="" />
                    <h2>{props.price}</h2>
                    <p>{props.description}</p>
                    <button className={Style.addToCart}>
                        <BsFillCartFill />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryProduct