import react, {Fragment, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { BiSolidError } from 'react-icons/bi';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'utils/CustomHooks';

export default function CreateStaffPopup({ fetchData, handleClose, open}) {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(true)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const initialState = {
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  const handleUpload = async () => {
    console.log(formData)
    if (formData?.password?.length < 6) {
      setIsPasswordValid(false);
      return;
    }
    try {
      setIsPasswordValid(true);
      const response = await axios.post('http://localhost:4000/api/v1/admins/create', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      handleClose()
      setError("")
      toast.success("Successfully created staff")
      fetchData()
      setFormData({fullName: "",
      userName: "",
      password: "",
      confirmPassword: ""})
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  };
  const { handleChange, handleSubmit, formData, setFormData } = useForm(
    initialState,
    handleUpload
  );
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Create Staff</DialogTitle>
        <DialogContent>
        <form onSubmit={(e) => handleSubmit(e)}>
          {error && 
          <Box sx={{display: 'flex'}}>
            <BiSolidError style={{color: 'red', fontSize: 20}}/>
            <Typography className='text-red-500 text-left' fontWeight={500} >{error}</Typography>
            </Box>
          }
          <Box sx={{textAlign: 'left',  display: 'grid', rowGap: 4, mt: 5}}>
              <Box sx={{display: 'flex', columnGap: 4}}>
                <TextField 
                  id="outlined-basic" 
                  variant="outlined"
                  label="Full Name" 
                  fullWidth
                  required
                  value={formData.fullName} 
                  onChange={(e) => handleChange('fullName', e.target.value)} 
                />
                <TextField 
                  id="outlined-basic" 
                  variant="outlined"
                  label="User Name" 
                  fullWidth
                  required
                  value={formData.userName} 
                  onChange={(e) => handleChange('userName', e.target.value)} 
                />
              </Box>

              <Box sx={{display: 'flex', columnGap: 4}}>
                <FormControl variant="outlined" error={!isPasswordValid}>
                    <InputLabel htmlFor="outlined-adornment-password">Password *</InputLabel>
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
                <FormControl  variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Confirm Password *</InputLabel>
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
                              {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="ConfirmPassword"
                    />
                </FormControl>
              </Box>
          <Button type="submit" sx={{backgroundColor: '#BD792C', '&:hover': {
            backgroundColor: '#BD792C', color: 'white'}}} variant='contained'>Create</Button>
          </Box>
        </form>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}