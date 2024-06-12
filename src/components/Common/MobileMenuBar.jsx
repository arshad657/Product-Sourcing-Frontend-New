// import { IconButton } from '@mui/material';
// import React, { useState } from 'react';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// import { Link } from 'react-router-dom';


// const DropdownButton = () => {
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setDropdownOpen(false);
//   };
//   const menuItems = [
//     { title: 'Home', path: '/' },
//     { title: 'Shop', path: '/shop' },
//     { title: 'About', path: '/aboutus' },
//     { title: 'Licence', path: '/contact' },
//   ];

//   return (
//     <div className="relative inline-block" >
//       <div>
//         {isDropdownOpen ?
//           <IconButton onClick={toggleDropdown}>
//               <CloseIcon /> 
//             </IconButton>
//             :
//           <IconButton onClick={toggleDropdown}>
//                
//             </IconButton>
        
//         }
          
//       </div>

//       {isDropdownOpen && (
//         <div
//           className="bg-white-A700 absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
//           role="menu"
//           aria-orientation="vertical"
//           aria-labelledby="menu-button"
//           tabIndex="-1"
//         >
//           <div className=" text-white h-fit ">
//       <div className="flex flex-col divide-y-2 divide-black">
//         {menuItems.map((menuItem) => (
//           <Link
//             key={menuItem.title}
//             to={menuItem.path}
//             onClick={closeDropdown}
//             className="  w-full focus:outline-none text-center py-8 mx-auto text-xl font-medium hover:bg-gray-700 text-gray-500"
//           >
//             {menuItem.title}
//           </Link>
//         ))}
//       </div>
//     </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownButton;


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Groups2Icon from '@mui/icons-material/Groups2';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function DropdownButton() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const menuItems = [
        { title: 'Home', path: '/', icon: <HomeIcon /> },
        { title: 'Shop', path: '/shop', icon: <ShoppingCartIcon /> },
      ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item, index) => (
          <>
            <ListItem key={item} sx={{fontSize: '45px'}}>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon sx={{color: 'gray'}}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} sx={{fontSize: '45px', color: 'black', fontWeight: 700}}/>
              </ListItemButton>
            </ListItem>
            <Divider />
          </>

        ))}
      </List>
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{color: 'black'}}><MenuIcon /></Button>
      <Drawer 
        open={open} 
        onClose={toggleDrawer(false)}
        anchor='right'
        >
        {DrawerList}
      </Drawer>
    </div>
  );
}

