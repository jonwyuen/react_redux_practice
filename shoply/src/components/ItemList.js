import React, { Component } from "react";
import Item from "./Item";
import data from "../data.json";
import uuid from "uuid/v4";

class ItemList extends Component {
  constructor(props) {
    super(props);
    const items = data.items.map(item => {
      const name = item.name
        .charAt(0)
        .toUpperCase()
        .concat(item.name.slice(1));
      return {
        name,
        id: uuid(),
        price: item.price,
        image_url: item.image_url
      };
    });
    this.state = {
      items
    };
  }

  render() {
    const itemList = this.state.items.map(item => (
      <Item key={item.id} item={item} />
    ));
    return (
      <div className="mt-3">
        <h3>Items For Sale</h3>
        <div className="row">{itemList}</div>
      </div>
    );
  }
}

export default ItemList;
