import AuthContext from 'AdminPanel/utils/AuthProvider';
import axios from 'axios';
import { useContext, useState } from 'react';

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

export const useAuth = () => {
  return useContext(AuthContext)
}

export const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
      const response = await axios.get('/refresh', {
          withCredentials: true
      });
      setAuth(prev => {
          console.log(JSON.stringify(prev));
          console.log(response.data.token);
          return {
              ...prev,
              roles: response.data.roles,
              accessToken: response.data.accessToken
          }
      });
      return response.data.accessToken;
  }
  return refresh;
};