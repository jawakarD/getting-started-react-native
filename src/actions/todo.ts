import {
  ADD_TITLE,
  ADD_NOTES,
  ADD_REMINDER,
  CHANGE_SCREEN,
} from 'constants/actions';
import {TodoScreens} from 'constants/types';

export const addTitle = (title: string) => {
  return {
    type: ADD_TITLE,
    title: title,
  };
};

export const addNotes = (notes: string) => {
  return {
    type: ADD_NOTES,
    notes: notes,
  };
};

export const addReminder = (reminder: string) => {
  return {
    type: ADD_REMINDER,
    reminder: reminder,
  };
};

export const changeScreen = (screen: TodoScreens) => {
  return {
    type: CHANGE_SCREEN,
    screen: screen,
  };
};
