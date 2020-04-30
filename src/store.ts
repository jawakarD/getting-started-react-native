import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import counterReducer from './reducers/counter';
import createSagaMiddleWare from 'redux-saga';
import todoReducer from 'reducers/todo';

export const sagaMiddleWare = createSagaMiddleWare();

export const configureStore = () =>
  createStore(
    combineReducers({
      count: counterReducer,
      todo: todoReducer,
    }),
    compose(applyMiddleware(sagaMiddleWare)),
  );
