import { combineReducers } from "redux";
import CounterManagerReducer from "../pages/ReduxCounterManager/reducers";

export const rootReducer = combineReducers({
  countersManager: CounterManagerReducer,
});
