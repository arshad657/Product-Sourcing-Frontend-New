import { Box, Divider, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { List } from 'components';
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { FaBoxOpen } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { MdPassword } from "react-icons/md";
import logo  from '../../assets/images/logo_appbar.jpg'
import AppBar from 'components/Common/AppBar';
import Footer from 'components/Common/Footer';

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
    useEffect(() => {
      // Dynamically append the script to the document
      const script = document.createElement('script');
      script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
      script.defer = true;
      script.id = "tcx-callus-js";
      script.charSet = "utf-8";
      
      document.body.appendChild(script);
  
      // Cleanup on component unmount (optional)
      return () => {
        document.body.removeChild(script);
      };
    }, []);
    return (
      <div>
        <div>
        <call-us-selector phonesystem-url="https://1011.3cx.cloud" party="arshad39stech"></call-us-selector>
        <script defer src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js" id="tcx-callus-js" charset="utf-8"></script>
        </div>
        <AppBar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[20px] w-full"/>
        <Box>
          <Outlet />
        </Box>
        <Footer className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full"  />
      </div>
    );
  };

  export default Layout;