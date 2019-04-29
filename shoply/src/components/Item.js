import React from "react";
import CartIconsContainer from "../containers/CartIconsContainer";
import PropTypes from "prop-types";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="item-card m-2">
        <div className="m-3">
          <img className="item-img" src={item.image_url} alt={item.name} />
        </div>
        <div className="m-2 p-2">
          <div className="d-flex flex-column">
            <p className="item-name">{item.name}</p>
            <p>${item.price}</p>
          </div>
          <CartIconsContainer item={item} />
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    image_url: PropTypes.string
  }).isRequired
};

Item.defaultProps = {
  item: {}
};

export default Item;
