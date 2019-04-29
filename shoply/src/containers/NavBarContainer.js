import React from "react";
import { connect } from "react-redux";
import NavBar from "../components/NavBar";

const NavBarContainer = props => {
  return <NavBar {...props} />;
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
    cartTotal: state.cartTotal
  };
};

export default connect(mapStateToProps)(NavBarContainer);
