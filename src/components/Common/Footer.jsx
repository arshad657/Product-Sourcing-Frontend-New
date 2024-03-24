import React from "react";

import { Button, Img, Text } from "components";
import { Mail, Phone } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from "react-router-dom";

const Footer = (props) => {
  const navigate = useNavigate()
    function handleNavigate3() {
        window.location.href = "https://twitter.com/login/";
      }
      function handleNavigate4() {
        window.location.href = "https://www.facebook.com/login/";
      }
      const menuItems = [
        { title: 'Home', path: '/'},
        { title: 'Shop', path: '/shop'},
        { title: 'About', path: '/aboutus'},
        { title: 'Licence', path: '/contact'},
      ];
  return (
      <footer className={props.className}>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-center w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-gray-53 tracking-[-0.50px] w-auto"
                size="txtRalewayRomanBold32Gray53"
              >
                Rohman Trading.
              </Text>
              <Text
                className="leading-[35.00px] max-w-[360px] md:max-w-full text-base text-gray-50_a3 tracking-[-0.50px]"
                size="txtRubikRegular16Gray50a3"
              >
                A Tech-Savvy Digital Marketing IT Group Delivering Strategic Solutions In Online Advertising, SEO, Graphic Design, Social Media, Web Design For Business Growth And Digital Excellence.
              </Text>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[209px]">
              <Text
                className="text-gray-53 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewayRomanSemiBold20Gray53"
              >
                Company
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
              {menuItems.map(item => {
                return <ul onClick={() => navigate(item.path)}>
                  <li className="flex items-center">
                    
                    <CircleIcon className="text-gray-50" sx={{fontSize: '10px'}}/>
                    <Text
                      className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto ml-5  hover:text-orange-300"
                      size="txtRubikRegular14Gray50a3"
                    >
                      {item.title}
                    </Text>
                  </li>
                </ul>
              })}
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[209px]">
              <Text
                className="text-gray-53 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewayRomanSemiBold20Gray53"
              >
                Contact
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start w-auto">
                <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto"
                  size="txtRubikRegular14Gray50a3"
                >
                  We're Experts At All Digital Services. We Craft Solutions For Every Type Of Business.
                </Text>
                <div className="flex items-center">
                  <Phone className="text-gray-50"/>
                  <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto ml-3"
                  size="txtRubikRegular14Gray50a3"
                  >
                    +8801954769755
                  </Text>
                </div>
                <div className="flex items-center">
                  <Mail className="text-gray-50"/>
                  <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto ml-3"
                  size="txtRubikRegular14Gray50a3"
                  >
                    mail@rohmantrading.com
                  </Text>
                </div>
                <div className="flex items-center">
                  <LocationOnIcon className="text-gray-50"/>
                  <Text
                  className="text-gray-50_a3 text-sm tracking-[-0.50px] w-auto ml-3"
                  size="txtRubikRegular14Gray50a3"
                  >
                    Level 3, Ventura Iconia, Holding 37, Road 11, Block H, Banani 11, Dhaka, Bangladesh
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start w-[220px]">
              <Text
                className="text-gray-53 text-xl tracking-[-0.50px] w-auto"
                size="txtRalewayRomanSemiBold20Gray53"
              >
                Follow Us
              </Text>
              <div className="flex flex-row gap-5 items-start justify-start w-auto">
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img
                    className="h-6"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                </Button>
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img
                    className="h-6"
                    src="images/img_facebook.svg"
                    alt="facebook"
                  />
                </Button>
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img
                    className="h-6"
                    src="images/img_twitter.svg"
                    alt="twitter"
                  />
                </Button>
                <Button className="bg-yellow-100 flex h-10 items-center justify-center p-2 rounded-[50%] w-10">
                  <Img className="h-6" src="images/img_music.svg" alt="music" />
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <Text
              className="text-center sm:text-base text-gray-50_a3 tracking-[-0.50px] w-auto"
              size="txtRubikRomanRegular16"
            >
              © Copyright 2024. All Rights Reserved.
            </Text>
          </div>
        </div>
      </footer>
  );
};

Footer.defaultProps = {};

export default Footer;
