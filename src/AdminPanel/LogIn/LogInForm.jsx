import React, { useState } from 'react'
import { Box, TextField, Typography, Button, IconButton, InputAdornment, OutlinedInput, InputLabel, FormControl } from '@mui/material'
import logo from '../../assets/images/logo.jpg'
import { useAuth, useForm } from 'utils/CustomHooks';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { BiSolidError } from 'react-icons/bi';

function LogInForm() {
  const { login }  = useAuth()
  const initialState = { username: '', password: '' };
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const loginUser = async () => {
    try {
      const response = await axios.post('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/admins/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setError("")
      console.log(response.data)
      login(response.data)
      navigate("/admin/products")
    } catch (error) {
      setError(error.response.data.message)
    }
  };
  const { handleChange, handleSubmit, formData } = useForm(
    initialState,
    loginUser
  );
  return (
    <Box sx={{alignContent: 'left'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <img src={logo} style={{width: '40%'}}/>
      </Box>
        <Box sx={{mt: 4, display: 'flex', flexDirection:'column',justifyContent: 'space-between', mx: 'auto',backgroundColor: '#F5F5F5',  height: 400, width: 300, p: 3, borderRadius: '20px', boxShadow: 3}}>
        <Box  sx={{textAlign: 'center', mb: 'auto'}}>
            <Typography variant='h5' sx={{color: '#6E7072'}} fontWeight={600}>Log In</Typography>
            <Typography variant='h5' sx={{color: '#6E7072'}} fontWeight={600}>Admin Panel</Typography>
        {error && 
          <Box sx={{display: 'flex', mt: 2}}>
            <BiSolidError style={{color: 'red', fontSize: 20}}/>
            <Typography className='text-red-500 text-left' fontWeight={500} >{error}</Typography>
            </Box>
          }
        </Box>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Box mb={4}>
              <FormControl sx={{backgroundColor: 'white', width: '100%' }} variant="outlined" >
                <InputLabel htmlFor="outlined-adornment-password">User Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  onChange={(e) => handleChange('username', e.target.value)}
                  value={formData?.username}
                  required 
                  label="Password"
                />
                
              </FormControl>
          </Box>
          <Box mb={4}>
          <FormControl sx={{backgroundColor: 'white' }} variant="outlined" error={!isPasswordValid}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={(e) => handleChange('password', e.target.value)}
              value={formData?.password}
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
          </Box>
          <button className='bg-amber-500 py-3 w-full font-semibold rounded-lg shadow-md hover:bg-amber-600' type='submit'>Log In</button>
        </form>
        </Box>
    </Box>
  )
}

export default LogInForm