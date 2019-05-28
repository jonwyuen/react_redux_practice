import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTitlesFromAPI } from "../actions/titles";
import { sendVoteToAPI } from "../actions/posts";
import Title from "../components/Title";

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
        <Title
          key={title.id}
          id={title.id}
          title={title.title}
          description={title.description}
          votes={title.votes}
          sendVote={this.vote}
        />
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
