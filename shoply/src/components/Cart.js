import React, { Component } from "react";
import PropTypes from "prop-types";
import CartIconsContainer from "../containers/CartIconsContainer";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDiscount = this.handleDiscount.bind(this);
    this.renderTable = this.renderTable.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleDiscount(e) {
    e.preventDefault();
    this.props.applyDiscount(this.state.discount);
    this.setState({
      discount: ""
    });
  }

  renderTable() {
    const rows = this.props.cartItems.map(item => {
      return (
        <tr key={item.id}>
          <td className="text-center align-middle">{item.name}</td>
          <td className="text-center align-middle">{item.quantity}</td>
          <td className="text-center align-middle">${item.price}</td>
          <td>
            <CartIconsContainer item={item} />
          </td>
        </tr>
      );
    });

    return (
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    const {
      cartItems,
      cartTotal,
      discountApplied,
      discountAmount
    } = this.props;

    const discountForm = (
      <form onSubmit={this.handleDiscount}>
        <label htmlFor="discount">Discount:</label>
        <input
          type="text"
          name="discount"
          value={this.state.discount}
          onChange={this.handleChange}
        />
        <button>Apply Discount</button>
      </form>
    );
    return cartItems.length > 0 ? (
      <div>
        {this.renderTable()}
        <h3>
          Total: ${cartTotal}{" "}
          {discountApplied ? (
            <span className="text-success">
              {(discountAmount * 100).toFixed(0)}% off - You saved $
              {(cartTotal / (1 - discountAmount) - cartTotal).toFixed(2)}
            </span>
          ) : null}{" "}
        </h3>
        {discountForm}
      </div>
    ) : (
      <h3>No items in cart...</h3>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      price: PropTypes.number,
      quantity: PropTypes.number
    })
  ).isRequired,
  cartTotal: PropTypes.number.isRequired,
  discountApplied: PropTypes.bool.isRequired,
  discountAmount: PropTypes.number.isRequired
};

Cart.defaultProps = {
  cartItems: [],
  cartTotal: 0.0,
  discountApplied: false,
  discountAmount: 0
};

export default Cart;
