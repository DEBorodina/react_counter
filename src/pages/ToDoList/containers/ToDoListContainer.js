import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  EDIT_TODO,
  SAVE_TODO,
  CANCEL_TODO_CHANGES,
} from "../actions";
import ToDoListLayout from "../components/ToDoListLayout";

const ToDoListContainer = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.TodosManager);
  console.log(todos);
  const handleToDoCreate = useCallback((todo) => {
    if (todo) {
      dispatch(ADD_TODO(todo));
    }
  }, []);
  const handleToDoDelete = useCallback((id) => {
    dispatch(DELETE_TODO(id));
  }, []);
  const handleToDoComplete = useCallback((id) => {
    dispatch(COMPLETE_TODO(id));
  }, []);
  const handleToDoEdit = useCallback((id) => {
    dispatch(EDIT_TODO(id));
  }, []);
  const handleToDoSave = useCallback((todo) => {
    dispatch(SAVE_TODO(todo));
  }, []);
  const handleToDoCancel = useCallback((id) => {
    dispatch(CANCEL_TODO_CHANGES(id));
  }, []);
  return (
    <ToDoListLayout
      handleToDoCreate={handleToDoCreate}
      handleToDoDelete={handleToDoDelete}
      handleToDoComplete={handleToDoComplete}
      handleToDoEdit={handleToDoEdit}
      handleToDoSave={handleToDoSave}
      handleToDoCancel={handleToDoCancel}
      todos={todos}
    />
  );
};

export default ToDoListContainer;
