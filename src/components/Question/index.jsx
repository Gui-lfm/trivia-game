import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../redux/actions';
import logoTrivia from '../../assets/logo-trivia.svg';
import logoTrybe from '../../assets/trybe-logo.svg';
import styles from './styles.module.css';
import NextQuestButton from '../NextQuestButton';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randAnswers: [],
    };
    this.isCorrectOption = this.isCorrectOption.bind(this);
    this.shuffleArr = this.shuffleArr.bind(this);
  }

  componentDidMount() {
    const { correctAnswer, incorrectAnswers } = this.props;
    const toRand = [correctAnswer, ...incorrectAnswers];
    this.setState({
      randAnswers: this.shuffleArr(toRand),
    });
  }

  score = (answer, difficulty) => {
    const { correctAnswer, updateScore, updateAssertions } = this.props;
    const normal = 10;
    const complement = {
      hard: 3,
      medium: 2,
      easy: 1,
    };

    if (correctAnswer === answer) {
      updateScore({ score: normal + complement[difficulty] });
      updateAssertions();
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

  shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  colorAlternative(answer) {
    const { correctAnswer, answered } = this.props;
    if (answered) {
      return answer === correctAnswer
        ? styles.correct
        : styles.wrong;
    }
  }

  render() {
    const {
      category,
      question,
      difficulty,
      nextBtn,
      // sendToFeedback,
      answered,
      hasBeenAnswered,
      nextQuestion,
    } = this.props;

    const { randAnswers } = this.state;

    return (
      <div
        data-testid="answer-options"
        className={ styles.mainBoxQuestion }
      >
        <div className={ styles.leftSide }>
          <img className={ styles.logoTrivia } src={ logoTrivia } alt="" />
          <h4
            className={ styles.category }
            data-testid="question-category"
          >
            {category}
          </h4>
          <div className={ styles.titleQuestionBox }>
            <p
              className={ styles.titleQuestion }
              data-testid="question-text"
            >
              {question}
            </p>
          </div>
          <img className={ styles.logoTrybe } src={ logoTrybe } alt="" />
        </div>

        <div className={ styles.rightSide }>
          {randAnswers.map((answer) => (
            <button
              className={ [styles.answer, this.colorAlternative(answer)].join(' ') }
              onClick={ () => {
                this.score(answer, difficulty);
                nextBtn();
              } }
              data-testid={ this.isCorrectOption(answer) }
              key={ answer }
              disabled={ answered }
            >
              {answer}
            </button>
          ))}
          <div className={ styles.nextQuestButton }>
            {hasBeenAnswered && <NextQuestButton nextQuestion={ nextQuestion } />}
          </div>
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
