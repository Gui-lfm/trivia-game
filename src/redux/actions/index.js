import { apiRequestQuestions } from '../../services/api';

export const USER_INFO = 'USER_INFO';
export const GET_QUESTIONS = 'GET_QUESTIONS';

export const requestUser = (info) => ({
  type: USER_INFO,
  payload: info,
});

export const fetchAPI = () => async (dispatch) => {
  const apiGameCall = await apiRequestQuestions();
  dispatch(apiGameCall);
};
