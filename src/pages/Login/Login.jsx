import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SettingsButton from '../../components/SettingsButton';
import * as Actions from '../../redux/actions';
import { apiRequestToken } from '../../services/api';
import { saveHashAndUserNametoLS } from '../../services/gravatar';
import styles from './styles.module.css';
import logoTrivia from '../../assets/logo-trivia.svg';
import logoTrybe from '../../assets/trybe-logo.svg';

class Login extends Component {
  state = {
    email: '',
    name: '',
    isDisabled: true,
  };

  handleValidate = () => {
    const tres = 3;
    const { email, name } = this.state;
    const emailRegex = /^[a-z0-9.-_]+@[a-z0-9]+\.[a-z]+\)?$/i.test(email);
    if (emailRegex && name.length >= tres) {
      this.setState({
        isDisabled: false,
      });
      return;
    }
    this.setState({
      isDisabled: true,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState(
      { [name]: value },
      this.handleValidate(),
    );
  };

  handleClick = async () => {
    const { history } = this.props;
    const data = await apiRequestToken();
    const { token } = data;
    localStorage.setItem('token', token);
    history.push('/game');
  };

  render() {
    const { isDisabled, name, email } = this.state;
    const { saveUserName } = this.props;
    return (
      <div className={ styles.wrapper }>
        <div className={ styles.mainBox }>
          <img className={ styles.logoTrivia } src={ logoTrivia } alt="" />
          <form className={ styles.form }>
            <input
              className={ styles.input }
              data-testid="input-gravatar-email"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={ this.handleChange }
              value={ email }
              onBlur={ this.handleChange }
            />
            <input
              className={ styles.input }
              data-testid="input-player-name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              value={ name }
              onChange={ this.handleChange }
              onBlur={ this.handleChange }
            />
            <button
              className={ styles.submitButton }
              type="submit"
              data-testid="btn-play"
              disabled={ isDisabled }
              onClick={ (event) => {
                event.preventDefault();
                this.handleClick();
                saveHashAndUserNametoLS(email, name);
                saveUserName({ name });
              } }
            >
              Play
            </button>
          </form>
        </div>
        <div className={ styles.settingsButton }>
          <SettingsButton />
        </div>
        <footer>
          <img className={ styles.logoTrybe } src={ logoTrybe } alt="" />
        </footer>
      </div>
    );
  }
}

Login.propTypes = {
  saveUserName: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);

export default connect(null, mapDispatchToProps)(Login);
