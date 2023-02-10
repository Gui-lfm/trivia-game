import PropTypes from 'prop-types';
import React from 'react';

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.isCorrectOption = this.isCorrectOption.bind(this);
    this.shuffleArr = this.shuffleArr.bind(this);
  }

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
    console.log(arr[0]);
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr[0]);
    return arr;
  }

  render() {
    const { category, question, correctAnswer, incorrectAnswers, nextBtn, answered } = this.props;
    const toRand = [correctAnswer, ...incorrectAnswers];
    const answers = this.shuffleArr(toRand);
    return (
      <div>
        <h4 data-testid="question-category">{category}</h4>
        <p data-testid="question-text">{question}</p>
        <div data-testid="answer-options">
          {answers.map((answer) => (
            <button
              onClick={ nextBtn }
              style={ answer === correctAnswer
                ? { border: '3px solid rgb(6, 240, 15)' } : { border: '3px solid red' } }
              data-testid={ this.isCorrectOption(answer) }
              key={ answer }
              disabled={ answered }
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
