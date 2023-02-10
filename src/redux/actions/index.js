import { apiGame } from '../../services/api_game';

export const TOGGLE_USER_NAME = 'TOGGLE_USER_NAME';

export function toggleUserName(payload) {
  return {
    type: TOGGLE_USER_NAME,
    payload,
  };
}

export const fetchAPI = () => async (dispatch) => {
  const apiGameCall = await apiGame();
  dispatch(apiGameCall);
};
