import { useState, useCallback } from "react";
import { Checkbox } from "@mui/material";

import useForm from "../../../hooks/useForm";
import styles from "./styles.module.scss";
import useStyles from "./styles";

const FormContainer = () => {
  const [formValues, handleChange] = useForm({ email: "", password: "" });
  const classes = useStyles();
  /*const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = useCallback(({ target: { value, name } }) => {
    setFormValues((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);
*/
  const handleSubmit = useCallback(() => {
    alert(JSON.stringify(formValues));
  }, [formValues]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>email</p>
        <input
          name="email"
          value={formValues.email}
          onChange={handleChange}
          type="email"
        />
        <p>password</p>
        <input
          name="password"
          value={formValues.password}
          onChange={handleChange}
          type="password"
        />
        <button role="submit">push</button>
        <Checkbox className={classes.root} />
      </form>
    </div>
  );
};

export default FormContainer;
