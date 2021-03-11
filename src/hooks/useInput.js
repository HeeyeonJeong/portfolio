import { useState } from "react";

export const useInput = (initialInput) => {
  const [inputs, setInputs] = useState(initialInput);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const reset = () => {
    setInputs(initialInput);
  };

  return [inputs, onChange, reset];
};
