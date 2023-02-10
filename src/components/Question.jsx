import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../redux/actions';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.isCorrectOption = this.isCorrectOption.bind(this);
    this.shuffleArr = this.shuffleArr.bind(this);
  }

  isCorrect = (answer) => {
    const { correctAnswer, updateScore } = this.props;
    if (correctAnswer === answer) {
      updateScore({ score: 10 });
    }
  };

  isCorrectOption(option) {
    const { incorrectAnswers, correctAnswer } = this.props;
    if (correctAnswer === option) {
      return 'correct-answer';
    }
    const index = incorrectAnswers.indexOf(option);
    return `wrong-answer-${index}`;
  }

  /**
   * Durstenfeld Shuffle
   * @param arr
   * @returns - A shuffled Array
   */
  shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  render() {
    const { category, question, correctAnswer, incorrectAnswers } = this.props;
    const toRand = [correctAnswer, ...incorrectAnswers];
    const answers = this.shuffleArr(toRand);
    return (
      <div>
        <h4 data-testid="question-category">{category}</h4>
        <p data-testid="question-text">{question}</p>
        <div data-testid="answer-options">
          {answers.map((answer) => (
            <button
              onClick={ () => {
                console.log(answer === correctAnswer);
                this.isCorrect(answer);
              } }
              data-testid={ this.isCorrectOption(answer) }
              key={ answer }
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

Question.propTypes = {
  category: PropTypes.string,
  correctAnswer: PropTypes.string,
  incorrectAnswers: PropTypes.shape({
    indexOf: PropTypes.func,
  }),
  question: PropTypes.string,
}.isRequired;

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Question);
