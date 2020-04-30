import {
  INCREASE_COUNTER,
  DECREASE_COUNTER,
  INCREASE_AMOUNT,
} from '../constants/counter';

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - 1,
      };
    case INCREASE_AMOUNT:
      return {
        ...state,
        count: state.count + action.incrementAmount,
      };

    default:
      return state;
  }
};

export default counterReducer;
