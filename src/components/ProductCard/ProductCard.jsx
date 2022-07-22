import React from 'react'
import Style from './ProductCard.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {cartActions} from './../../Store/CartSlice'
 
import {BsFillCartFill, BsPlusSquare} from 'react-icons/bs';
function ProductCard(props) {
    const dispatch = useDispatch();
    const addToCart = () =>{
        dispatch(cartActions.addToCart({
            name : props.description,
            id: props.id,
            price: props.price
        }));
    }
  return (
    <div className="col-sm-4">
        <div className={Style.productImgWrapper}>
            <div className={Style.singleProducts}>
                <div className={Style.productInfo}>
                    <img src={props.image} />
                    <h2>${props.price}</h2>
                    <p>{props.description}</p>
                    <button className={Style.addToCart}>
                    <BsFillCartFill/> Add to cart
                    </button>


                </div>
                <div className={Style.productOverlay}>
                    <div className={Style.overlayContent}>
                        <h2>${props.price}</h2>
                        <p>{props.description}</p>
                        <button onClick={addToCart} className={Style.addToCart}>
                    <BsFillCartFill/> Add to cart
                    </button>
                    </div>
                </div>
            </div>
            <div className={Style.choose}>
            <buttton className={Style.btn}><BsPlusSquare /> Add to wishlish</buttton>
            <buttton className={Style.btn}><BsPlusSquare /> Add to compare</buttton>
                
            </div>
        </div>
    </div>
  )
}

export default ProductCard