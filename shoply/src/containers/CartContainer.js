import React from "react";
import { connect } from "react-redux";
import Cart from "../components/Cart";
import { applyDiscount } from "../actions";

const CartContainer = props => {
  return <Cart {...props} />;
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
    cartTotal: state.cartTotal,
    discountApplied: state.discountApplied,
    discountAmount: state.discountAmount
  };
};

export default connect(
  mapStateToProps,
  { applyDiscount }
)(CartContainer);
