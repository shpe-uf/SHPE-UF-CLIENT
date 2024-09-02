import { useState } from "react";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await callback();
    } catch (err) {
      console.error("Error during submission:", err);
    }
  };
  

  
  return {
    onChange,
    onSubmit,
    setValues,
    values
  }
};
