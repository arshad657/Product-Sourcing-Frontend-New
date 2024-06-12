import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Input, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { fetchProductCategories } from 'utils/CommonApis';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function AddCategory({ setCategory }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = async () => {
    try {
      const response = await axios.post('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/products/categories/create', {name: name}, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      toast.success("Successfully uploaded")
      setName('')
      handleClose()
      const newData = await fetchProductCategories();
      setCategory(newData)
    } catch (error) {
      setError(error.response.data.message)
    }
  };
  return (
    <React.Fragment>
        
        <button className='bg-yellow-600 py-3 w-28 text-gray-200 font-semibold rounded-lg shadow-md' onClick={handleClickOpen}>Add Category</button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Add Category
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <Box sx={{mx: 3,textAlign: 'left', mb: 3, width: 500}}>
              <Typography fontSize='16px' mb={0.5}>Category Name
                <span className='text-red-500'>*</span>
              </Typography>
              <TextField 
                id="outlined-basic" 
                variant="outlined" 
                fullWidth 
                inputProps={{ style: { height: "10px" } }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
        </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleUpload}>
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}