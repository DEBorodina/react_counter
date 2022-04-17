import { useState, useCallback } from "react";

const useForm = (initialFields) => {
  const [formState, setFormState] = useState(initialFields);
  const handleFormChange = useCallback((event) => {
    const { value, name } = event.target;
    setFormState((state) => ({
      ...state,
      [name]: value,
    }));
  }, []);
  const handleFormReset = useCallback((event) => {
    setFormState(initialFields);
  }, []);
  return [formState, handleFormChange, handleFormReset];
};

export default useForm;
