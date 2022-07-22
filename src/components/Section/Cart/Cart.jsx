import React from "react";
import { GiCancel } from "react-icons/gi";
import Breadceumbs from "../../Breadcrumbs/Breadceumbs";
import Style from "./cart.module.css";
import CartCard from "./CartCard";
import {useSelector} from 'react-redux'

function Cart() {
  const cartItems = useSelector((state) => state.cart.itemsList)
  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  })
  let tax=total*2/100;
  return (
    <React.Fragment>
    <section className={Style.cartItems}>
      <div className="container">
        <Breadceumbs />
        <div className={Style.cartInfo}>
          <table className="table" style={{border: 'none'}}>
            <thead>
              <tr className={Style.cartMenu}>
                <td className={Style.image}>Item</td>
                <td className="description"></td>
                <td className="price">Price</td>
                <td className="quantitu">Quantity</td>
                <td className="total">Total</td>
                <td></td>
              </tr>
            </thead>
              {
                cartItems.map((item) =>{
                  return (
                    <CartCard dec={item.name} price={item.price} id={item.id} total={item.totalPrice} qty={item.quantity}/>
                  )
                })
              }
          </table>
        </div>

      </div>
    </section>
    <section className={Style.doActions}>
      <div className="container">
        <div className="heading">
          <h3>What would you like to do next?</h3>
				  <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className={Style.chooseArea}>
              <ul className={Style.userOption}>
              <li>
								<input type="checkbox" />
								<label>Use Coupon Code</label>
							</li>
							<li>
								<input type="checkbox" />
								<label>Use Gift Voucher</label>
							</li>
							<li>
								<input type="checkbox" />
								<label>Estimate Shipping & Taxes</label>
							</li>
              </ul>
              <ul className={Style.userInfo}>
              <li className={Style.singleField}>
								<label>Country:</label>
								<select>
									<option>United States</option>
									<option>Bangladesh</option>
									<option>UK</option>
									<option>India</option>
									<option>Pakistan</option>
									<option>Ucrane</option>
									<option>Canada</option>
									<option>Dubai</option>
								</select>
							</li>
							<li className={Style.singleField}>
								<label>Region / State:</label>
								<select>
									<option>Select</option>
									<option>Dhaka</option>
									<option>London</option>
									<option>Dillih</option>
									<option>Lahore</option>
									<option>Alaska</option>
									<option>Canada</option>
									<option>Dubai</option>
								</select>
							
							</li>
							<li className="singleField zipField">
								<label>Zip Code:</label>
								<input type="text" />
							</li>
              </ul>
              <button className={Style.update}>Get Quotes</button>
              <button className="checck">Continue</button>
            </div>
          </div>
          <div className="col-sm-6">
            <div className={Style.totalArea}>
            <ul>
							<li>Cart Sub Total <span>${total}</span></li>
							<li>Eco Tax <span>${tax}</span></li>
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span>${total+tax}</span></li>
						</ul> 
            <button className={Style.update}>Update</button>
              <button className="checck">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </React.Fragment>
  );
}

export default Cart;
