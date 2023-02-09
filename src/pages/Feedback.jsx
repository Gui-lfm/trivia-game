import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Feedback extends Component {
  render() {
    const { score } = this.props;

    const minScore = 3;

    const feedback = {
      lessThanThree: 'Could be better...',
      threeOrMore: 'Well Done!',
    };

    return (
      <div>
        <header>
          <img src="" alt="user" data-testid="header-player-name" />
          <p data-testid="header-player-name">player name</p>
          <p data-testid="header-score">player score</p>
        </header>
        <main>
          <p data-testid="feedback">
            { score < minScore
              ? feedback.lessThanThree
              : feedback.threeOrMore }
          </p>
        </main>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Feedback;
