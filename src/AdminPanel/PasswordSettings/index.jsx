import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { toast } from 'react-toastify';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { BiSolidError } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAuth, useForm } from 'utils/CustomHooks';

function PasswordSettings() {
  const navigate = useNavigate();
  const { auth } = useAuth()
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const initialState = {
    newPassword: "",
    confirmPassword: "",
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleUpload = async () => {
    if (formData.newPassword.length < 6) {
      setIsPasswordValid(false);
      return;
    }
    try {
      setIsPasswordValid(true);
      const response = await axios.patch('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/change-password', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setError("")
      toast.success("Successfully updated your password")
      navigate("/admin/products")
    } catch (error) {
      console.log(error)
      
      setError(error.response.data.message)
    }
  };

  const { handleChange, handleSubmit, formData, setFormData } = useForm(
    initialState,
    handleUpload
  );
  
  useEffect(() => {
    if(auth?.userRole === 'staff'){
      navigate('/admin/products')
      alert("You don't have the permission for this route")
    }
  }, [])
  
  // const isPasswordValid = formData.newPassword.length >= 6;

  return (
    <Box sx={{ width: '45%'}}>
        <Typography sx={{fontWeight: 'bold', textAlign: 'left'}} variant="h5" >Password Settings</Typography>
        <form onSubmit={(e) => handleSubmit(e)}>
          {error && 
          <Box sx={{display: 'flex'}}>
            <BiSolidError style={{color: 'red', fontSize: 20}}/>
            <Typography className='text-red-500 text-left' fontWeight={500} >{error}</Typography>
            </Box>
          }
          <Box sx={{textAlign: 'left',  display: 'grid', rowGap: 5, mt: 5}}>
      <FormControl sx={{ }} variant="outlined" error={!isPasswordValid}>
      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
      <OutlinedInput
        sx={{height: '50px'}}
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        onChange={(e) => handleChange('newPassword', e.target.value)}
        value={formData?.newPassword}
        required 
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Password"
      />
      {!isPasswordValid && (
        <Typography style={{ color: 'red', fontSize: 12 }}>Password must be at least 6 characters long.</Typography>
      )}
    </FormControl>
          <FormControl  variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showConfirmPassword ? 'text' : 'password'}
                onChange={(e) => handleChange('confirmPassword', e.target.value)}
                value={formData?.confirmPassword}
                required 
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="ConfirmPassword"
                sx={{height: '50px'}}
            />
          </FormControl>
          <button className='bg-yellow-600 py-3 text-gray-200 font-semibold rounded-lg shadow-md' type='submit' >Create</button>
          </Box>
        </form>
    </Box>
  )
}

export default PasswordSettings