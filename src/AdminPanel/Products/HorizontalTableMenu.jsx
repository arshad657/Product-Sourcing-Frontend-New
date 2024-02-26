import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function HorizontalTableMenu({ params, fetchData }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:4000/api/v1/products/delete/${id}`);
    handleClose()
    toast.success("Product deleted successfully");
    fetchData()
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{color: 'gray'}}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {/* <MenuItem onClick={handleClose}>
          <RemoveRedEyeIcon style={{ color: 'gray' }}/>
          <Typography ml={1} fontSize='15px'>View Details</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CreateIcon style={{ color: 'gray' }}/>
          <Typography ml={1} fontSize='15px'>Edit Product</Typography>
        </MenuItem> */}
        <MenuItem onClick={() => handleDelete(params.row.id)} >
          <DeleteIcon style={{ color: '#CE1515' }} />
          <Typography ml={1} color='#CE1515' fontSize='15px'>Delete Product</Typography>
          </MenuItem>
      </Menu>
    </div>
  );
}