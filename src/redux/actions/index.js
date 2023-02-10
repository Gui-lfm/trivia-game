import { apiRequestQuestions } from '../../services/api';

export const SAVE_USER_NAME = 'SAVE_USER_NAME';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export function saveUserName(payload) {
  return {
    type: SAVE_USER_NAME,
    payload,
  };
}
export function updateScore(payload) {
  return {
    type: UPDATE_SCORE,
    payload,
  };
}

export const fetchAPI = () => async (dispatch) => {
  const apiGameCall = await apiRequestQuestions();
  dispatch(apiGameCall);
};
