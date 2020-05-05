import {GET_TODOS, UPDATE_TODO, STORE_TODO} from 'constants/actions';
import {TodoState} from 'reducers/todos';

export const getTodos = () => {
  return {
    type: GET_TODOS,
  };
};

export const updateTodo = (todo: TodoState) => {
  return {
    type: UPDATE_TODO,
    todo,
  };
};

export const storeTodo = (todo: TodoState) => {
  return {
    type: STORE_TODO,
    todo,
  };
};
