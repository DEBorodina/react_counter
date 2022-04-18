import { v4 as uuid } from "uuid";
import { handleActions } from "redux-actions";

import * as actions from "../actions";

const initialState = {
  todos: [],
};

const TodosManagerReducer = handleActions(
  {
    [actions.ADD_TODO]: (state, { payload: string }) => {
      const newToDo = {
        id: uuid(),
        value: string,
        isCompleted: false,
        isEditMode: false,
      };
      return { todos: [...state.todos, newToDo] };
    },
    [actions.DELETE_TODO]: (state, { payload: id }) => {
      const indexToDelete = state.todos.findIndex((todo) => todo.id === id);
      const copy = [...state.todos];
      copy.splice(indexToDelete, 1);
      return { todos: copy };
    },
    [actions.COMPLETE_TODO]: (state, { payload: id }) => {
      const indexToChange = state.todos.findIndex((todo) => todo.id === id);
      const copy = [...state.todos];
      copy[indexToChange].isCompleted = true;
      return { todos: copy };
    },
    [actions.EDIT_TODO]: (state, { payload: id }) => {
      const indexToChange = state.todos.findIndex((todo) => todo.id === id);
      const copy = [...state.todos];
      copy[indexToChange].isEditMode = true;
      return { todos: copy };
    },
    [actions.SAVE_TODO]: (state, { payload: todoToSave }) => {
      const indexToChange = state.todos.findIndex(
        (todo) => todo.id === todoToSave.id
      );
      const copy = [...state.todos];
      copy[indexToChange].value = todoToSave.value;
      copy[indexToChange].isEditMode = false;
      return { todos: copy };
    },
    [actions.CANCEL_TODO_CHANGES]: (state, { payload: id }) => {
      const indexToChange = state.todos.findIndex((todo) => todo.id === id);
      const copy = [...state.todos];
      copy[indexToChange].isEditMode = false;
      return { todos: copy };
    },
  },
  initialState
);

export default TodosManagerReducer;
