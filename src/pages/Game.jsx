import PropTypes, { objectOf } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';
import { apiRequestQuestions } from '../services/api';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      // timer,
      hasBeenAnswered: false,
    };
  }

  async componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem('token');
    if (!token) {
      history.push('/');
    }
    const response = await apiRequestQuestions(token);
    const questions = response.results;

    if (questions.length < 1) {
      localStorage.removeItem('token');
      history.push('/');
    }

    this.setState({ questions });
  }

  createNextBtn = () => {
    const { hasBeenAnswered } = this.state;

    if (!hasBeenAnswered) {
      this.setState({ hasBeenAnswered: true });
    }
  };

  nextQuestion = () => {
    const { currQuestion } = this.state;
    const maxquestions = 5;
    if (currQuestion < maxquestions) {
      this.setState((prevState) => ({ currQuestion: prevState.currQuestion + 1 }));
    }
  };

  render() {
    const { questions, currQuestion, hasBeenAnswered } = this.state;
    return (
      <div>
        {console.log(questions.length)}
        <Header />
        <h1>Tela do Jogo</h1>
        <section>
          {questions.map((data, index) => (
            index === currQuestion
            && <Question
              { ...data }
              correctAnswer={ data.correct_answer }
              incorrectAnswers={ data.incorrect_answers }
              key={ data.question }
              nextBtn={ this.createNextBtn }
            />
          ))}
        </section>
        {hasBeenAnswered
        && <button onClick={ this.nextQuestion } data-testid="btn-next">Next</button>}
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(objectOf.any).isRequired,
}.isRequired;

export default connect()(Game);
