import { apiGame } from '../../services/api_game';

export const USER_INFO = 'USER_INFO';
// export const SAVE_EMAIL = 'SAVE_EMAIL';

export const requestUser = (name) => ({
  type: USER_INFO,
  payload: name,
});

// export const saveEmail = (email) => ({
//   type: SAVE_EMAIL,
//   payload: email,
// });

export const fetchAPI = () => async (dispatch) => {
  const apiGameCall = await apiGame();
  dispatch(apiGameCall);
};
