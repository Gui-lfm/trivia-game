// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  handleClick = () => {
    // const { dispatch } = this.props;
    // const { email } = this.state;
    // // dispatch(loginUser(email));
  };

  render() {
    const { isDisabled, name, email } = this.state;
    return (
      <div>
        <form>
          <input
            data-testid="input-player-name"
            type="text"
            name="name"
            id=""
            value={ name }
            onChange={ this.handleChange }
          />
          <input
            data-testid="input-gravatar-email"
            type="email"
            name="email"
            id=""
            onChange={ this.handleChange }
            value={ email }
          />
          <button
            type="submit"
            data-testid="btn-play"
            disabled={ isDisabled }
            onClick={ (event) => {
              event.preventDefault();
              this.handleClick();
            } }
          >
            Play

          </button>
        </form>
      </div>
    );
  }
}

// Login.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

export default connect()(Login);
