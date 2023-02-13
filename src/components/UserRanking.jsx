import PropTypes from 'prop-types';
import React, { Component } from 'react';

class UserRanking extends Component {
  render() {
    const { name, avatar, score, index } = this.props;
    return (
      <>
        <p data-testid={ `player-name-${index}` }>{name}</p>
        <p data-testid={ `player-score-${index}` }>{score}</p>
        <img src={ avatar } alt="avatar" />
      </>
    );
  }
}

export default UserRanking;

UserRanking.propTypes = {
  name: PropTypes.string,
  score: PropTypes.string,
  avatar: PropTypes.string,
}.isRequired;
