import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Text } from 'components';

export default function EnquiryPop({ open, setOpen }) {

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        
        <DialogContent sx={{p: 3}}>
          <DialogContentText id="alert-dialog-description">
          <Text
            className="text-lg tracking-[-0.50px] w-fit text-bluegray-500 font-rubik text-left font-normal"
            size="txtRubikSemiBold18"
            >
                <span className="text-gray-500 font-rubik text-left font-normal">
                    Please send your query through our live chat!
                </span>
            </Text> 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{backgroundColor: 'black', color: 'white','&:hover': {
          backgroundColor: 'darkgray',  // Change this to your desired hover background color
          color: 'black',               // Change this to your desired hover text color
        },}}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}