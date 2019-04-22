import React from "react";
import "./CartIcons.css";

const CartIcons = ({ addToCart, removeFromCart }) => {
  return (
    <div className="d-flex justify-content-around">
      <span
        onClick={addToCart}
        className="cart-icon fas fa-cart-plus fa-2x text-success"
      />
      <span
        onClick={removeFromCart}
        className="cart-icon fas fa-cart-arrow-down fa-2x text-danger"
      />
    </div>
  );
};

export default CartIcons;
