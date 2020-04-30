import {ADD_TODOS, GET_TODOS, UPDATE_TODO, ADD_TODO} from 'constants/actions';
import {UiStates, INIT, LOADING, SUCCESS} from 'constants/uiStates';

export interface TodoState {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
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
