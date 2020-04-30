import {takeLatest, call, put, all} from 'redux-saga/effects';
import {INCREASE_ASYNC, INCREASE_AMOUNT} from '../constants/counter';
import {GET_TODOS, ADD_TODOS, STORE_TODO, ADD_TODO} from 'constants/todo';
import AsyncStorage from '@react-native-community/async-storage';

const mergeAndSetTodo = (todosString) =>
  AsyncStorage.setItem('@todos', todosString);

const addTodo = (todosString) => AsyncStorage.setItem('@todos', todosString);

const asyncCall = (amount) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(amount);
    }, 2000);
  });
};

const getTodos = () => AsyncStorage.getItem('@todos');

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

    if (todos !== null) {
      yield put({type: ADD_TODOS, todos: JSON.parse(todos).todos});
    } else {
      yield put({type: ADD_TODOS, todos: []});
    }
  } catch (error) {
    console.log(error);
  }
}

function* storeTodo(action) {
  try {
    const storedTodos = yield call(AsyncStorage.getItem, '@todos');

    if (storedTodos !== null) {
      const parsedTodos = JSON.parse(storedTodos);

      const todosString = JSON.stringify({
        todos: [...parsedTodos.todos, action.todo],
      });

      yield call(mergeAndSetTodo, todosString);
    } else {
      const todosString = JSON.stringify({
        todos: [action.todo],
      });

      yield call(addTodo, todosString);
    }

    yield put({
      type: ADD_TODO,
      todo: action.todo,
    });
  } catch (error) {
    console.log(error);
  }
}

function* incrementSaga() {
  yield takeLatest(INCREASE_ASYNC, increment);
  yield takeLatest(GET_TODOS, getTodosSaga);
  yield takeLatest(STORE_TODO, storeTodo);
}

export function* rootSaga() {
  yield all([incrementSaga()]);
}
