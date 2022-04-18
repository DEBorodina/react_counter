import { combineReducers } from "redux";
import TodosManagerReducer from "../pages/ToDoList/reducers";
export const rootReducer = combineReducers({
  TodosManager: TodosManagerReducer,
});
