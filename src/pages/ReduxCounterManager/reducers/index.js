import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  counters: [],
};

const CounterManagerReducer = handleActions(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = {
        id: uuid(),
        value: 0,
      };
      return { counters: [...state.counters, newCounter] };
    },
    [actions.REMOVE_COUNTER]: (state, { payload: id }) => {
      const updatedCounters = [...state.counters];
      const index = updatedCounters.findIndex((counter) => counter.id === id);
      updatedCounters.splice(index, 1);
      return { counters: updatedCounters };
    },
    [actions.INCREMENT_COUNTER]: (state) => {
      return state;
    },
  },
  initialState
);

export default CounterManagerReducer;
