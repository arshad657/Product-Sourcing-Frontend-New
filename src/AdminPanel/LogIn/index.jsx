import { Box, Grid, Button } from '@mui/material'
import React, { useContext } from 'react'
import LogInForm from './LogInForm'
import loginImg from '../../assets/images/login_page_img.jpg'
import AuthContext from 'AdminPanel/utils/AuthProvider'

function LogIn() {
  
  return (
    <Box sx={{height: '100vh',display: 'flex', justifyContent: 'center', backgroundColor: 'white'}}>
        <Box sx={{width: '75%',display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <LogInForm />
          <img src={loginImg}/>
        </Box>
    </Box>
  )
}

export default LogIn