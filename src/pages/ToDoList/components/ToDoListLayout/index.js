import PropTypes from "prop-types";

import CreateForm from "../CreateForm";
import ToDoView from "../ToDoView";
import ToDoEditForm from "../ToDoEditForm";
import styles from "./styles.module.css";

const ToDoListLayout = ({
  handleToDoCreate,
  todos,
  handleToDoDelete,
  handleToDoComplete,
  handleToDoEdit,
  handleToDoSave,
  handleToDoCancel,
}) => {
  return (
    <div className={styles.container}>
      <CreateForm handleToDoCreate={handleToDoCreate}></CreateForm>
      <div className={styles.todos}>
        {todos.map((todo) => {
          if (!todo.isEditMode) {
            return (
              <ToDoView
                todo={todo}
                key={todo.id}
                handleToDoDelete={handleToDoDelete}
                handleToDoComplete={handleToDoComplete}
                handleToDoEdit={handleToDoEdit}
              ></ToDoView>
            );
          } else {
            return (
              <ToDoEditForm
                todo={todo}
                key={todo.id}
                handleToDoSave={handleToDoSave}
                handleToDoCancel={handleToDoCancel}
              ></ToDoEditForm>
            );
          }
        })}
      </div>
    </div>
  );
};

ToDoListLayout.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      isEditMode: PropTypes.bool.isRequired,
    })
  ).isRequired,
  handleToDoCreate: PropTypes.func.isRequired,
  handleToDoDelete: PropTypes.func.isRequired,
  handleToDoComplete: PropTypes.func.isRequired,
  handleToDoEdit: PropTypes.func.isRequired,
  handleToDoSave: PropTypes.func.isRequired,
  handleToDoCancel: PropTypes.func.isRequired,
};

export default ToDoListLayout;
