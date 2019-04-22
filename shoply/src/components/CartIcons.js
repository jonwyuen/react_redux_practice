import React from "react";
import PropTypes from "prop-types";
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

CartIcons.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

CartIcons.defaultProps = {
  addToCart: () => console.log("Add item to cart"),
  removeFromCart: () => console.log("Remove item from cart")
};

export default CartIcons;
