import { Box, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { List } from 'components';
import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { FaBoxOpen } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import logo  from '../../assets/images/logo_appbar.jpg'
import AppBar from 'components/Common/AppBar';

const Layout = () => {
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
        <AppBar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[20px] w-full"/>
        <Box>
          <Outlet />
        </Box>
      </Box>
    );
  };

  export default Layout;