import {createStore, combineReducers} from 'redux';
import reducer from './reducers';
import gameReducer from './reducers/gameReducer';

const rootReducer = combineReducers({
  gameReducer: gameReducer,
  countUpReducer: reducer,
});

const store = createStore(rootReducer);
export default store;
