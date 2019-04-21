import React from "react";

const Item = ({ item }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12">
      <div className="card mb-4">
        <img src={item.image_url} alt={item.name} />
      </div>
      <div className="card-body" />
    </div>
  );
};

export default Item;
