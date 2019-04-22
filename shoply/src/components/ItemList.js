import React, { Component } from "react";
import Item from "./Item";
import data from "../data.json";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.items
    };
  }

  render() {
    const itemList = this.state.items.map(item => (
      <Item key={item.id} item={item} />
    ));
    return (
      <div>
        <h3>Items For Sale</h3>
        <div className="row">{itemList}</div>
      </div>
    );
  }
}

export default ItemList;
