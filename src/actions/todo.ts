import {GET_TODOS, UPDATE_TODO} from 'constants/todo';
import {TodoState} from 'reducers/todo';

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
