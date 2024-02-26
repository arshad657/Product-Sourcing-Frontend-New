import React from "react";

import { Img, SelectBox, Text } from "components";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg'

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AppBar = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row">
          <Img
              className="h-[auto] w-[130px]"
              src={logo}
              alt="car"
            />
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
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
              <Link to='/contactus'>
              Contact
              </Link>
            </Text>
            <Text
              className="text-black-900 text-lg tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular18"
            >
              <Link to='/contactus'>
              Licences
              </Link>
            </Text>
          </div>
        </div>
      </header>
    </>
  );
};

AppBar.defaultProps = {};

export default AppBar;
