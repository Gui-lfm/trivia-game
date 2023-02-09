import { SAVE_EMAIL, SAVE_NAME } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_NAME:
    return { ...state, name: action.payload };
  case SAVE_EMAIL:
    return { ...state, email: action.payload };
  default:
    return state;
  }
};

export default player;
