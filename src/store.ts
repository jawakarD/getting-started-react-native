import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import counterReducer from './reducers/counter';
import createSagaMiddleWare from 'redux-saga';
import todosReducer from 'reducers/todos';

export const sagaMiddleWare = createSagaMiddleWare();

export const configureStore = () =>
  createStore(
    combineReducers({
      count: counterReducer,
      todo: todosReducer,
    }),
    compose(applyMiddleware(sagaMiddleWare)),
  );
