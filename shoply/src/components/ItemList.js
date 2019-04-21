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
    const { items } = this.state;
    const itemList = items.map(item => <Item key={item.id} item={item} />);
    return <div>{itemList}</div>;
  }
}

export default ItemList;
