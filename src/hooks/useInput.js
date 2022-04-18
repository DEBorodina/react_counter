import { useState, useCallback } from "react";

const useInput = (initialState = "") => {
  const [inputState, setInputState] = useState(initialState);
  const handleInputChange = useCallback((event) => {
    const { value } = event.target;
    setInputState((state) => value);
  }, []);
  return [inputState, handleInputChange];
};

export default useInput;
