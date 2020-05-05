import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import counterReducer from './reducers/counter';
import createSagaMiddleWare from 'redux-saga';
import todosReducer from 'reducers/todos';
import todoReducer from 'reducers/todo';

export const sagaMiddleWare = createSagaMiddleWare();

export const configureStore = () =>
  createStore(
    combineReducers({
      count: counterReducer,
      todos: todosReducer,
      todo: todoReducer,
    }),
    compose(applyMiddleware(sagaMiddleWare)),
  );
