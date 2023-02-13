import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserRanking from '../components/UserRanking';

class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ranking: [],
    };
  }

  componentDidMount() {
    const getRanking = JSON.parse(localStorage.getItem('ranking'));
    const sortRanking = getRanking.sort((a, b) => b.score - a.score);
    this.setState({
      ranking: sortRanking,
    });
  }

  render() {
    const { ranking } = this.state;
    return (
      <div>
        <h2 data-testid="ranking-title">Ranking</h2>
        <div>
          {ranking.map((user, index) => (<UserRanking
            key={ index }
            name={ user.name }
            score={ user.score }
            avatar={ user.avatar }
          />))}
        </div>

        <Link to="/">
          <button
            data-testid="btn-go-home"
          >
            Início
          </button>
        </Link>
      </div>
    );
  }
}

export default Ranking;
