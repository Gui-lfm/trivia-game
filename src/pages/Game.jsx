import React, { Component } from 'react';
import PropTypes, { objectOf } from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { apiRequestQuestions } from '../services/api';
import Question from '../components/Question';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      // timer,
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

  render() {
    const { questions, currQuestion } = this.state;
    return (

      <div>
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
            />
          ))}
        </section>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(objectOf.any).isRequired,
}.isRequired;

export default connect()(Game);
