import React, { useState } from "react";
import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from "@mui/material";
import DropdownButton from "components/Common/MobileMenuBar";

const AppBar = (props) => {
  const [showMobileDrawer, setShowMobileDrawer] = useState(false)
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col sm:flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row">
          <Img
              className="h-[auto] w-[130px]"
              src={logo}
              alt="car"
            />
            
            {/* <div className="mobile-menu" onClick={() => setShowMobileDrawer(true)}> */}
              {/*  */}
            {/* </div> */}

          </div>
          
          <div className="flex sm:flex-1 flex-row gap-9 sm:hidden items-center justify-evenly w-[498px] sm:w-full">
          <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to='/'>
              Home
              </Link>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to='/shop'>
              Shop
              </Link>
            </Text>
            
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to='/aboutus'>
              About
              </Link>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              {/* <Link to='/contactus'> */}
              Licences
              {/* </Link> */}
            </Text>
          </div>
          <div className="hidden sm:block">
          <DropdownButton />
            {/* <IconButton>
              <MenuIcon />
            </IconButton> */}
          </div>
        </div>
      </header>
    </>
  );
};

AppBar.defaultProps = {};

export default AppBar;
