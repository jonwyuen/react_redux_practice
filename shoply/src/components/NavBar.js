import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { calcTotalQuantity } from "../helpers";

const NavBar = ({ cartItems, cartTotal }) => {
  const itemQuantity = calcTotalQuantity(cartItems);
  const itemCount = itemQuantity === 1 ? "item" : "items";

  return (
    <nav className="navbar navbar-light bg-info">
      <Link to="/" className="navbar-brand text-light">
        Shoply
      </Link>
      <ul className="navbar-nav flex-row">
        <li className="nav-item pr-3">
          <span className="navbar-text text-light">
            {itemQuantity} {itemCount} (${cartTotal})
          </span>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link text-light">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

NavBar.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      id: PropTypes.string,
      quantity: PropTypes.number,
      price: PropTypes.number
    })
  ).isRequired,
  cartTotal: PropTypes.number
};

NavBar.defaultProps = {
  cartItems: [],
  cartTotal: 0
};

export default NavBar;
