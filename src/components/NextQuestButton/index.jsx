import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function NextQuestButton({ nextQuestion }) {
  return (
    <button
      onClick={ nextQuestion }
      data-testid="btn-next"
      className={ styles.nextButton }
    >
      Next
    </button>
  );
}

NextQuestButton.propTypes = {
  nextQuestion: PropTypes.func,
}.isRequired;
