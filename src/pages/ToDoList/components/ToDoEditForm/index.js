import { Card, Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import PropTypes from "prop-types";

import { useInput } from "../../../../hooks";

const ToDoEditForm = ({ todo, handleToDoSave, handleToDoCancel }) => {
  const [inputValue, changeInputValue] = useInput(todo.value);
  return (
    <div>
      <Card
        variant="outlined"
        sx={{ width: "30%", margin: "5px", height: 120 }}
      >
        <TextField
          onChange={changeInputValue}
          value={inputValue}
          sx={{ display: "block" }}
        />
        <Button
          onClick={() => {
            todo.value = inputValue;
            handleToDoSave(todo);
          }}
          sx={{ height: 40, margin: "5px" }}
          variant="contained"
        >
          <DoneIcon />
        </Button>
        <Button
          onClick={() => handleToDoCancel(todo.id)}
          sx={{ height: 40, margin: "5px" }}
          variant="contained"
        >
          <DeleteIcon />
        </Button>
      </Card>
    </div>
  );
};

ToDoEditForm.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
  }).isRequired,
  handleToDoSave: PropTypes.func.isRequired,
  handleToDoCancel: PropTypes.func.isRequired,
};

export default ToDoEditForm;
