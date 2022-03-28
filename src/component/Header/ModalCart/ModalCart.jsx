import React from "react";
import "./ModalCart.modules.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  listCart,
  upMoney,
  dowMoney,
  allTotal,
} from "../../Store-Redux/Reducer";
import { DeleteCart } from "../../Store-Redux/Reducer";
import { useState } from "react";
const ModalCart = () => {
  const allCart = useSelector(listCart);
  const Ordertotal = useSelector(allTotal);
  const [price, Setprice] = useState(1);

  const open = (e) => {
    e.stopPropagation();
  };

  // / dispatch
  const dispatch = useDispatch();
  const deleteCart = (id) => {
    dispatch(DeleteCart(id));
  };

  const more = (id) => {
    dispatch(upMoney(id));
  };
  const dowPrice = (id) => {
    dispatch(dowMoney(id));
  };

  return (
    <div className="ModalCart" onClick={open}>
      <div className="ModalCart_cart">You Cart</div>
      {allCart.map((itemCart) => (
        <div className="Cart_product" key={itemCart.id}>
          <div className="cart_img">
            <img src={itemCart.imageUrl} alt="" />
          </div>
          <div>
            <div className="cart_price">
              <span>{itemCart.name}</span>
              <p>${itemCart.price}</p>
            </div>
            <div className="cart_number">
              <div className="cart_up-dow">
                <button
                  className="cart_up"
                  onClick={() => dowPrice(itemCart.id)}
                >
                  -
                </button>
                <span>{itemCart.quantity}</span>
                <button className="cart_up" onClick={() => more(itemCart.id)}>
                  +
                </button>
                <span>{itemCart.totalmoney}</span>
              </div>
              <div onClick={() => deleteCart(itemCart.id)}>
                <img src="https://cassiopeia.store/svgs/delete-i.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="remove_all">Remove All</div>
      <div className="discount_code">
        <input type="text" />
        <button>Apply</button>
      </div>
      <div className="cart_Free">
        <p>Shipping</p>
        <p>FREE</p>
      </div>
      <div className="cart_Free">
        <p>Order total</p>
        <p>${Ordertotal}</p>
      </div>
      <div className="cart_checkout">
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default ModalCart;
