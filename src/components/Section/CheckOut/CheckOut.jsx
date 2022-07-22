import React from 'react';
import {GiCancel} from "react-icons/gi"
import CartCard from '../Cart/CartCard';
import {useSelector} from 'react-redux'
import Breadceumbs from './../../Breadcrumbs/Breadceumbs'
import Style from './checkOut.module.css'
function CheckOut() {
  const cartItems = useSelector((state) => state.cart.itemsList)
  let total = 0;
  cartItems.forEach((item) => {
    total += item.totalPrice;
  })
  let tax=total*2/100;
  return (
    <section className="cartItems">
      <div className="container">
        <Breadceumbs />
        <div className={Style.stepOne}>
          <h2 className={Style.heading}>Step1</h2>
        </div>
        <div className={Style.checkoutOptions}>
          <h3>New User</h3>
          <p>Checkout options</p>
          <ul className={Style.nav}>
            <li>
              <label>
                <input type="checkbox" /> Register Account
              </label>
            </li>
            <li>
              <label>
                <input type="checkbox" /> Guest Checkout
              </label>
            </li>
            <li>
              <a href="">  <GiCancel />Cancel</a>
            </li>
          </ul>
        </div>
        <div className={Style.registerReq}>
          <p>
            Please use Register And Checkout to easily get access to your order
            history, or use Checkout as Guest
          </p>
        </div>
        <div className="shopperInformation">
          <div className="row">
            <div className="col-sm-3">
              <div className={Style.shopperInfo}>
                <p>Shopper Information</p>
                <form>
                  <input type="text" placeholder="Display Name" />
                  <input type="text" placeholder="User Name" />
                  <input type="password" placeholder="Password" />
                  <input type="password" placeholder="Confirm password" />
                </form>
                <button>Get Quotes</button>
                <button>Continue</button>
              </div>
            </div>
            <div className="col-sm-5 clearfix">
              <div className={Style.billTO}>
                <p>Bill To</p>
                <div className={Style.formOne}>
                  <form>
                    <input type="text" placeholder="Company Name" />
                    <input type="text" placeholder="Email*" />
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="First Name *" />
                    <input type="text" placeholder="Middle Name" />
                    <input type="text" placeholder="Last Name *" />
                    <input type="text" placeholder="Address 1 *" />
                    <input type="text" placeholder="Address 2" />
                  </form>
                </div>
                <div className={Style.formTwo}>
                  <form>
                    <input type="text" placeholder="Zip / Postal Code *" />
                    <select>
                      <option>-- Country --</option>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                    <select>
                      <option>-- State / Province / Region --</option>
                      <option>United States</option>
                      <option>Bangladesh</option>
                      <option>UK</option>
                      <option>India</option>
                      <option>Pakistan</option>
                      <option>Ucrane</option>
                      <option>Canada</option>
                      <option>Dubai</option>
                    </select>
                    <input type="password" placeholder="Confirm password" />
                    <input type="text" placeholder="Phone *" />
                    <input type="text" placeholder="Mobile Phone" />
                    <input type="text" placeholder="Fax" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
                <div className={Style.orderMessage}>
                <p>Shipping Order</p>
							<textarea name="message"  placeholder="Notes about your order, Special Notes for Delivery" rows="16"></textarea>
							<label><input type="checkbox" /> Shipping to bill address</label>
                </div>
            </div>
          </div>
        </div>
        <div className={Style.reviewPayment}>
            <h2>Review & Payment</h2>
        </div>
            <div className="cartInfo">
            <table className="table">
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
            <tr>
							<td colspan="4">&nbsp;</td>
							<td colspan="2">
								<table class="table table-condensed total-result">
									<tr>
										<td>Cart Sub Total</td>
										<td>${total}</td>
									</tr>
									<tr>
										<td>Exo Tax</td>
										<td>${tax}</td>
									</tr>
									<tr className="shipping-cost">
										<td>Shipping Cost</td>
										<td>Free</td>										
									</tr>
									<tr>
										<td>Total</td>
										<td><span>${total+tax}</span></td>
									</tr>
								</table>
							</td>
						</tr>
            </table>
            </div>
        <div className="paymentOptions">
        <span>
						<label><input type="checkbox" /> Direct Bank Transfer</label>
					</span>
					<span>
						<label><input type="checkbox" /> Check Payment</label>
					</span>
					<span>
						<label><input type="checkbox" /> Paypal</label>
					</span>
        </div>
      </div>
    </section>  )
}

export default CheckOut