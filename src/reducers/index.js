import { combineReducers } from 'redux';
import getColorsReducer from './getColors';

const rootReducer = combineReducers({
  colors: getColorsReducer,
});

export default rootReducer;