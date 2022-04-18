import { createAction } from "redux-actions";

export const ADD_TODO = createAction("ADD_TODO");
export const DELETE_TODO = createAction("DELETE_TODO");

export const COMPLETE_TODO = createAction("COMPLETE_TODO");
export const EDIT_TODO = createAction("EDIT_TODO");
export const SAVE_TODO = createAction("SAVE_TODO");
export const CANCEL_TODO_CHANGES = createAction("CANCEL_TODO_CHANGES");
