import { Card, Button, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PropTypes from "prop-types";

const ToDoView = ({
  todo,
  handleToDoDelete,
  handleToDoComplete,
  handleToDoEdit,
}) => {
  return (
    <div>
      <Card
        variant="outlined"
        sx={{ width: "30%", margin: "5px", height: 140 }}
      >
        <Paper sx={{ width: "90%", margin: "5px", height: 50 }}>
          {todo.isCompleted ? (
            <CheckCircleOutlineIcon sx={{ color: "#1976d2" }} />
          ) : (
            ""
          )}
          {todo.value}
        </Paper>
        <Button
          onClick={() => {
            handleToDoComplete(todo.id);
          }}
          sx={{ height: 40, margin: "5px" }}
          variant="contained"
        >
          <DoneIcon />
        </Button>
        <Button
          onClick={() => {
            handleToDoEdit(todo.id);
          }}
          sx={{ height: 40, width: 1 / 5, margin: "5px" }}
          variant="contained"
        >
          <EditIcon />
        </Button>
        <Button
          onClick={() => {
            handleToDoDelete(todo.id);
          }}
          sx={{ height: 40, width: 1 / 5, margin: "5px" }}
          variant="contained"
        >
          <DeleteIcon />
        </Button>
      </Card>
    </div>
  );
};

ToDoView.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    isEditMode: PropTypes.bool.isRequired,
  }).isRequired,
  handleToDoDelete: PropTypes.func.isRequired,
  handleToDoComplete: PropTypes.func.isRequired,
  handleToDoEdit: PropTypes.func.isRequired,
};

export default ToDoView;
