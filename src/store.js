import { compose, createStore } from 'redux';
import rootReducer from './reducers';

export default function () {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  
  const enhancers = composeEnhancers(
    // you can add your middleware here:
  );
  
  return createStore(rootReducer,enhancers);
}



