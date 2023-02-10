import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

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
        <Header />
        <main>
          <p data-testid="feedback-text">
            { score < minScore
              ? feedback.lessThanThree
              : feedback.threeOrMore }
          </p>
          <p data-testid="feedback-total-score">{score}</p>
          <p data-testid="feedback-total-question">nº de respostas</p>
        </main>
      </div>
    );
  }
}

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: '',
});

export default connect(mapStateToProps)(Feedback);
