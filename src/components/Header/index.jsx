import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import starScore from '../../assets/star-score.svg';
import SettingsButton from '../SettingsButton';
import { getHashFromLocalStorage, getUserNameFromLS } from '../../services/gravatar';

function Header({ score }) {
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
          <p data-testid="header-player-name">{ getUserNameFromLS() }</p>
        </div>
        <div className={ styles.userScore }>
          <img src={ starScore } alt="A star representing your score" />
          <p>
            Pontos:
            {' '}
          </p>
          <p data-testid="header-score">
            {score}
          </p>
        </div>
        <div className={ styles.gear }>
          <SettingsButton />
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  score: PropTypes.number.isRequired,
};
