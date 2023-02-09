import { USER_INFO } from '../actions';

const INITIAL_STATE = {
  name: 'Nome da pessoa',
  email: '',
  score: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_INFO:
    return { ...state, name: action.payload };
  default:
    return state;
  }
};

export default player;
