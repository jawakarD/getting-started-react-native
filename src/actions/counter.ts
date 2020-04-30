import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_AMOUNT,
  INCREASE_ASYNC,
} from '../constants/actions';

export const increment = () => {
  return {
    type: INCREASE_COUNTER,
  };
};

export const decrement = () => {
  return {
    type: DECREASE_COUNTER,
  };
};

export const incrementByAmount = (incrementAmount: number) => {
  return {
    type: INCREASE_AMOUNT,
    incrementAmount,
  };
};

export const incrementAsync = (incrementAmount: number) => {
  return {
    type: INCREASE_ASYNC,
    incrementAmount,
  };
};
