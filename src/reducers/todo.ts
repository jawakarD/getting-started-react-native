import {TITLE} from 'constants/todoScreens';
import {TodoState} from 'reducers/todos';
import {TodoScreens} from 'constants/types';
import {
  ADD_TITLE,
  ADD_NOTES,
  ADD_REMINDER,
  CHANGE_SCREEN,
} from 'constants/actions';

export interface Todo extends TodoState {
  screen: TodoScreens;
  error: {
    title?: string | boolean;
    notes?: string | boolean;
    reminder?: string | boolean;
  };
}

const initState: Todo = {
  id: 0,
  title: '',
  completed: false,
  notes: '',
  reminder: 'string',
  screen: TITLE,
  error: {
    title: '',
    notes: '',
    reminder: '',
  },
};

const validateText = (text: string, state: Todo, field: string): Todo => {
  if (text) {
    return {
      ...state,
      [field]: text,
      error: {
        ...state.error,
        [field]: false,
      },
    };
  } else {
    return {
      ...state,
      [field]: text,
      error: {
        ...state.error,
        [field]: `Fill the ${field}`,
      },
    };
  }
};

const todoReducer = (state: Todo = initState, action: any) => {
  switch (action.type) {
    case ADD_TITLE:
      return validateText(action.title, state, 'title');
    case ADD_NOTES:
      return validateText(action.notes, state, 'notes');
    case ADD_REMINDER:
      return validateText(action.reminder, state, 'reminder');
    case CHANGE_SCREEN:
      return {
        ...state,
        screen: action.screen,
      };
    default:
      return state;
  }
};

export default todoReducer;
