import { combineReducers } from 'redux';

import { catalogReducer } from '../reducers/catalog';
import { favoriteReducer } from '../reducers/favorite';
const rootReducer = combineReducers({
  catalogReducer,
  favoriteReducer,
});

export default rootReducer;
