import { TOGGLE_USER_NAME } from '../actions';

const INITIAL_STATE = {
  name: '',
  score: 0,
};

const player = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case TOGGLE_USER_NAME:
    return { ...state, name: payload.name };
  default:
    return state;
  }
};

export default player;
