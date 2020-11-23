import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isEnvDevelopment } from '../../config/env';
import rootReducer from './modules';

export default createStore(
  rootReducer,
  isEnvDevelopment ? composeWithDevTools() : undefined
);