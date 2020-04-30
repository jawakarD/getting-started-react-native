import {takeLatest, call, put, all} from 'redux-saga/effects';
import {INCREASE_ASYNC, INCREASE_AMOUNT} from '../constants/counter';
import {GET_TODOS, ADD_TODOS} from 'constants/todo';
import axios from 'axios';

const asyncCall = (amount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 2000);
  });
};

const getTodos = () =>
  axios.get('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=10');

function* increment(action) {
  try {
    const incrementAmount = yield call(asyncCall, action.incrementAmount);
    yield put({type: INCREASE_AMOUNT, incrementAmount});
  } catch (error) {
    console.log(error);
  }
}

function* getTodosSaga() {
  try {
    const todos = yield call(getTodos);

    yield put({type: ADD_TODOS, todos: todos.data});
  } catch (error) {
    console.log(error);
  }
}

function* incrementSaga() {
  yield takeLatest(INCREASE_ASYNC, increment);
  yield takeLatest(GET_TODOS, getTodosSaga);
}

export function* rootSaga() {
  yield all([incrementSaga()]);
}
