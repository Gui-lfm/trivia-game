import PropTypes, { objectOf } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';
import Timer from '../components/Timer';
import { apiRequestQuestions } from '../services/api';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      currQuestion: 0,
      answered: false,
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

  changeAnswered = () => {
    const { answered } = this.state;
    this.setState({
      answered: !answered,
    });
  };

  render() {
    const { questions, currQuestion, answered } = this.state;
    return (

      <div>
        <Header />
        <h1>Tela do Jogo</h1>
        <section>
          {questions.map((data, index) => (
            index === currQuestion
            && <Question
              answered={ answered }
              { ...data }
              correctAnswer={ data.correct_answer }
              incorrectAnswers={ data.incorrect_answers }
              key={ data.question }
            />
          ))}
          <Timer
            changeAnswered={ this.changeAnswered }
          />
        </section>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.arrayOf(objectOf.any).isRequired,
}.isRequired;

export default connect()(Game);
