import { combineReducers } from 'redux';

import configs from './configs';
import feedback from './feedback';
import game from './game';
import login from './login';
import player from './player';
import ranking from './ranking';

const rootReducer = combineReducers({
  player,
  game,
  configs,
  login,
  ranking,
  feedback,
});

export default rootReducer;
