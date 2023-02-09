import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
// import defaultAvatar from '../../assets/default-avatar.png';
import starScore from '../../assets/star-score.svg';
import gearSettings from '../../assets/gear-settings.svg';
// import * as AllActions from '../../redux/actions';

function Header({ score, name }) {
  const img = 'https://www.gravatar.com/avatar/c19ad9dbaf91c5533605fbf985177ccc';
  return (
    <header className={ styles.header }>
      <div className={ styles.headerContent }>
        <div className={ styles.userInfos }>
          <img
            className={ styles.userAvatar }
            src={ img }
            alt="user avatar"
            data-testid="header-profile-picture"
          />
          <p data-testid="header-player-name">{name}</p>
        </div>
        <div className={ styles.userPoints }>
          <img src={ starScore } alt="A star representing your score" />
          <p data-testid="header-score">
            Pontos:
            {' '}
            {score}
          </p>
        </div>
        <button>
          <img src={ gearSettings } alt="A gear representing settings" />
        </button>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  score: state.player.score,
  name: state.player.name,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
