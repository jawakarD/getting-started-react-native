import {ADD_TODOS, GET_TODOS, UPDATE_TODO, ADD_TODO} from 'constants/actions';
import {INIT, LOADING, SUCCESS} from 'constants/uiStates';
import {UiStates} from 'constants/types';

export interface TodoState {
  id: number;
  title: string;
  completed: boolean;
  notes: string;
  reminder: string;
}

export interface TodosState {
  asyncState: UiStates;
  todos: TodoState[];
}

const initialState: TodosState = {
  asyncState: INIT,
  todos: [],
};

const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        todos: [...state.todos, ...action.todos],
        asyncState: SUCCESS,
      };

    case GET_TODOS:
      return {...state, asyncState: LOADING};

    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          action.todo.id === todo.id ? action.todo : todo,
        ),
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };

    default:
      return state;
  }
};

export default todoReducer;
