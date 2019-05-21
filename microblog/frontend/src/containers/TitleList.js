import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchTitlesFromAPI } from "../actions/titles";
import { sendVoteToAPI } from "../actions/posts";

class TitleList extends Component {
  async componentDidMount() {
    if (this.props.titles.length === 0) {
      await this.props.fetchTitlesFromAPI();
    }
  }

  vote(direction, id) {
    this.props.sendVoteToAPI(id, direction);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    titles: state.titles
  };
};

export default connect(
  mapStateToProps,
  { fetchTitlesFromAPI, sendVoteToAPI }
)(TitleList);
