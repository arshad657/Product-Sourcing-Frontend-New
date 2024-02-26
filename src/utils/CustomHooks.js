import { useState } from 'react';

export const useForm = (initialState = {}, callBack) => {
  const [formData, setFormData] = useState(initialState);
  const handleChange = (field, value, rest = {}) => {    
   setFormData((prevState) => ({ ...prevState, [field]: value, ...rest }));
  };
  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log('formData:', formData);       
    callBack();
  };
  return { handleChange, handleSubmit, formData, setFormData };
};