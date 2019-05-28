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

  async componentDidUpdate(prevProps) {
    if (this.props.titles.length !== prevProps.titles.length) {
      await this.props.fetchTitlesFromAPI();
    }
  }

  vote(direction, id) {
    this.props.sendVoteToAPI(id, direction);
  }

  render() {
    const titleList = this.props.titles.map(title => {
      return (
        <div key={title.id} className="col">
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <NavLink to={"/" + title.id}>{title.title}</NavLink>
              </div>
              <div className="card-text">
                <i>{title.description}</i>
              </div>
            </div>
            <div className="card-footer">
              <small>{title.votes} votes</small>
              <i
                className="fas fa-thumbs-up text-success ml-2"
                onClick={() => this.vote("up", title.id)}
              />
              <i
                className="fas fa-thumbs-down text-danger ml-2"
                onClick={() => this.vote("down", title.id)}
              />
            </div>
          </div>
        </div>
      );
    });

    return this.props.titles ? (
      <div className="row">{titleList}</div>
    ) : (
      <p>
        <b>Loading...</b>
      </p>
    );
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
