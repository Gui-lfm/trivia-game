import PropTypes from 'prop-types';
import React from 'react';

class Timer extends React.Component {
  state = {
    toShow: 30,
  };

  componentDidMount() {
    const mil = 1000;
    this.timer = setInterval(() => this.descrease(), mil);
  }

  descrease = () => {
    const { toShow } = this.state;
    const { changeAnswered } = this.props;
    if (toShow === 0) {
      changeAnswered();
      clearInterval(this.timer);
      return;
    }
    this.setState({
      toShow: toShow - 1,
    });
  };

  render() {
    const { toShow } = this.state;
    return (
      <span>{toShow}</span>
    );
  }
}

Timer.propTypes = {
  changeAnswered: PropTypes.func,
}.isRequired;

export default Timer;
