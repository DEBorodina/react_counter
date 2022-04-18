import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import PropTypes from "prop-types";

import { useInput } from "../../../../hooks";

const CreateForm = ({ handleToDoCreate }) => {
  const [inputValue, changeInputValue] = useInput();
  return (
    <Paper sx={{ width: 1 / 4 }}>
      <TextField
        onChange={changeInputValue}
        value={inputValue}
        label={"Add to do"}
        sx={{ width: 4 / 5 }}
      />
      <Button
        sx={{ height: 55, width: 1 / 5 }}
        variant="contained"
        type="submit"
        onClick={() => {
          handleToDoCreate(inputValue);
        }}
      >
        Add
      </Button>
    </Paper>
  );
};

CreateForm.propTypes = {
  handleToDoCreate: PropTypes.func.isRequired,
};

export default CreateForm;
