import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CartIcons from "../components/CartIcons";
import { addToCart, removeFromCart } from "../actions";

class CartIconsContainer extends Component {
  render() {
    return <CartIcons {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToCart: () => dispatch(addToCart(ownProps.item)),
    removeFromCart: () => dispatch(removeFromCart(ownProps.item))
  };
};

CartIconsContainer.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string
  }).isRequired
};

CartIconsContainer.defaultProps = {
  item: {}
};

export default connect(
  null,
  mapDispatchToProps
)(CartIconsContainer);
