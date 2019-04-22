import React from "react";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card mb-2">
        <img className="item-img" src={item.image_url} alt={item.name} />
      </div>
      <div className="card-body">
        <div className="d-flex flex-column justify-content-between">
          <p className="item-name">{item.name}</p>
          <p>${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
