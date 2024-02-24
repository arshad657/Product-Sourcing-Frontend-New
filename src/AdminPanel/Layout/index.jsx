import { Box, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { List } from 'components';
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { FaBoxOpen } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import logo  from '../../assets/images/logo_appbar.jpg'
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const  AdminLayout = () => {
    const drawerWidth = 200;
    const [open, setOpen] = useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openMenu = Boolean(anchorEl);
    const sideNavigationItems = [
      {title: 'Staffs', path: '/admin/staffs', icon: <BsPersonFill />}, 
      {title: 'Products', path: '/admin/products', icon: <FaBoxOpen />}, 
      {title: 'Product Categories', path: '/admin/product-categories', icon: <BiSolidCategory />}, 
      {title: 'Password Settings', path: '/admin/password-settings', icon: <MdPassword />}, 
    ]
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const handleDrawerToggle = () => {
      setOpen(!open);
    };
  
    const handleLogout = () => {
      localStorage.clear();
      window.location.href = "/";
    };
  
    return (
        <Box>
        <Drawer
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          variant="permanent"
        >
          <Box sx={{mx: 'auto', mt: 3}}>
            <img src={logo} style={{width: 150}}/>
          </Box>
          
          <List sx={{mt: 3}}>
          <Divider />
          {sideNavigationItems.map((item, index) => (
            <NavLink to={item.path} sx={{display: 'flex'}}>
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{fontSize: 25}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
              </NavLink>
          ))}
        </List>
          <Box p={2} sx={{width: drawerWidth}}>
          </Box>
        </Drawer>
          <Box sx={{ p: 3, ml: '240px' }}>
            {/* <AdminAppBar drawerWidth={drawerWidth}/> */}
            <Box sx={{}}>
              <Box sx={{ml: 10, width: '90%'}}>
                <Outlet />
              </Box>
            </Box>
          </Box>
  
         <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      </Box>
    );
  };

  export default AdminLayout;