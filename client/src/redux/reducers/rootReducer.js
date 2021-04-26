import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import modalReducer from './modalReducer';
import trainingReducer from './trainingReducer';
import { bookReduser } from './bookReducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, () => null),
  modal: modalReducer,
  training: trainingReducer,
  library: bookReduser,
});

export default rootReducer;
