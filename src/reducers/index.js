import { combineReducers } from 'redux';
import WeatherReducer from './weather';

const rootReducer = combineReducers({
  weather: WeatherReducer
  // state: (state = {}) => state
});

export default rootReducer;
