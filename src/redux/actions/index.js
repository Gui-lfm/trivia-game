import { apiGame } from '../../services/api_game';

export const SAVE_NAME = 'SAVE_NAME';
export const SAVE_EMAIL = 'SAVE_EMAIL';

export const saveName = (name) => ({
  type: SAVE_NAME,
  payload: name,
});

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const fetchAPI = () => async (dispatch) => {
  const apiGameCall = await apiGame();
  dispatch(apiGameCall);
};
