import {TITLE} from 'constants/todoScreens';
import {TodoState} from 'reducers/todos';
import {TodoScreens} from 'constants/types';
import {
  ADD_TITLE,
  ADD_NOTES,
  ADD_REMINDER,
  CHANGE_SCREEN,
} from 'constants/actions';

interface State extends TodoState {
  screen: TodoScreens;
  error: {
    title?: string;
    notes?: string;
    reminder?: string;
  };
}

const initState: State = {
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

const validateText = (text: string, state: State, field: string) => {
  if (text) {
    return {
      ...state,
      [field]: text,
    };
  } else {
    return {
      ...state,
      error: {
        ...state.error,
        [field]: `Fill the ${field}`,
      },
    };
  }
};

export const todoreducer = (state: State = initState, action: any) => {
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
  }
};
