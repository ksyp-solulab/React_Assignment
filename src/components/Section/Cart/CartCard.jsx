import React from 'react'
import Style from "./cartCard.module.css"
import {FaTimes} from 'react-icons/fa';
import {useDispatch, useSelector} from 'react-redux';
import {cartActions} from './../../../Store/CartSlice'

function CartCard(props) {
  const dispatch = useDispatch();
  const incremntCartItem = () =>{
    dispatch(cartActions.addToCart({
      name : props.description,
      id: props.id,
      price: props.price
  }));
  }
  const decremntCartItem = () =>{
    dispatch(cartActions.removeFromCart(props.id));
  }
  const delteItem = () =>{
    dispatch(cartActions.deleteFromCart(props.id));
  }
  return (
    <tr>
        <td className="cartProduct">
            <img src="" alt={props.dec} />
        </td>
        <td className={Style.cartDescription}>
            <h4><a href="#">{props.dec}</a></h4>
            <p>Web ID: 1089772</p>
        </td>
        <td className={Style.cartPeice}>
            <p>{props.price}</p>
        </td>
        <td className={Style.cartQuntity}>
            <button onClick={incremntCartItem}>+</button>
            <span>{props.qty}</span>
            <button onClick={decremntCartItem}>-</button>            
      </td>
      <td className={Style.cartTotal}>
        <span>{props.total}</span>
      </td>
      <td className="cartDelete">
        <button onClick={delteItem}><FaTimes /></button>
      </td>
    </tr>
  )
}

export default CartCard