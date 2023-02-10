import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import starScore from '../../assets/star-score.svg';
import { getHashFromLocalStorage } from '../../services/gravatar';
import SettingsButton from '../SettingsButton';

function Header({ score, name }) {
  return (
    <header className={ styles.header }>
      <div className={ styles.headerContent }>
        <div className={ styles.userInfos }>
          <img
            className={ styles.userAvatar }
            src={ getHashFromLocalStorage() }
            alt="user avatar"
            data-testid="header-profile-picture"
          />
          <p data-testid="header-player-name">{name}</p>
        </div>
        <div className={ styles.userScore }>
          <img src={ starScore } alt="A star representing your score" />
          <p data-testid="header-score">
            Pontos:
            {' '}
            {score}
          </p>
        </div>
        <SettingsButton />
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
