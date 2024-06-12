import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Text } from 'components';
import { Button } from 'components';

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
          <Button onClick={handleClose} className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[128px] text-center text-xl text-yellow-100 tracking-[-0.50px] h-10 mb-2 mr-4">
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}