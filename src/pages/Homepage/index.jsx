import React, { useEffect, useState } from "react";
import logo  from '../../assets/images/homeImage.png'
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  PagerIndicator,
  SelectBox,
  Slider,
  Text,
} from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardblog from "components/HomepageCardblog";
import HomepageCardproduct from "components/HomepageCardproduct";
import Service from "./Service";
import axios from "axios";
import TeamCardteam from "components/TeamCardteam";
import ServicesCard from "components/ServicesCard";

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const HomepagePage = () => {
  const navigate = useNavigate();

  

  const [products, setProducts] = useState([])

  
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  // const sliderRef1 = React.useRef(null);
  // const [sliderState1, setsliderState1] = React.useState(0);

  const homepageCardproductPropList = [
    { save: "images/img_save.svg" },
    { image: "images/img_image_7.png" },
    { image: "images/img_image_8.png" },
    { image: "images/img_image_9.png" },
    { image: "images/img_image_10.png" },
    { image: "images/img_image_11.png" },
    { image: "images/img_image_12.png" },
    { image: "images/img_image_13.png" },
  ];
  const fetchData = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/products');
      const transformedData = response.data.map(item => {
        const { _id, ...rest } = item; 
        return { id: _id, ...rest }; 
      });
      setProducts(transformedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    useEffect(() => {
      fetchData();
    }, [])

  console.log(products)
  const homepageCardblogPropList = [
    {},
    { rectangleeighteen: "images/img_rectangle18_400x416.png" },
    { rectangleeighteen: "images/img_rectangle18_1.png" },
  ];

  const images = [
    {
      title: 'Import',
      description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
      
      imgPath:
        'https://assets-global.website-files.com/617a2ab2ffe6cf153dbc87b0/654db567a01afbcbb29115d1_Starting%20an%20Import-Export%20Business%20in%20Singapore.jpg',
    },
    {
      title: 'Export',
      description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
      imgPath:
        'https://afs.net/wp-content/uploads/International-Shipping.jpeg',
    },
    {
      title: 'Door to Door Service',
      description: 'Suppose, I have a import export and door to door service related website. Now, give me a tag line that can be used at the first section of the website. My company name is ROHMAN TRADINGS. give me at least 5 options to choose',
      imgPath:
        'https://legendshipping.com/wp-content/uploads/2022/11/door-to-door.jpg',
    },
  ];
  return (
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full pb-10">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-orange-10 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] py-20 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[60px] items-center justify-start max-w-[1490px] mx-auto w-full">
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl tracking-[-0.50px] w-full"
                    size="txtRubikRomanRegular20"
                  >
                    Product Needs
                  </Text>
                  <Text
                    className="leading-[60.00px] max-w-[615px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                    size="txtPollerOneRegular40"
                  >
                    
                    <span className="text-black-900 font-raleway text-left font-bold">
                      From port to your doorstep... <br />
                    </span>
                    <span className="text-yellow-500 font-raleway text-left font-bold">
                    ROHMAN TRADINGS <br /> <br />
                    </span>
                    <span className="text-black-900 font-raleway text-left font-bold">
                      Infinite Possibilities, <br /> Endless Opportunities
                    </span>
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
                  onClick={() => navigate("/shop")}
                >
                  Visit Shop
                </Button>
              </div>
              <Img
                className="flex-1 md:flex-none h-[auto] sm:h-auto max-h-[566px] object-cover sm:w-[] md:w-[]"
                src={logo}
                alt="nathanoakleyo"
              />
            </div>
          </div>
        </div>
        <div className="bg-black-900 flex flex-col items-center justify-center md:px-10 sm:px-5  py-[61px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1094px] mx-auto w-full mb-[41px]">
            <Text
              className="text-center text-gray-53 text-xl tracking-[-0.50px] w-full"
              size="txtRubikRegular20"
            >
              Our Services
            </Text>
            {/* <Service /> */}
            <div className="flex flex-col items-start justify-start w-full mb-10">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="gap-5 w-full"
                items={images.map((service) => (
                  <React.Fragment key={Math.random()}>
                    <ServicesCard
                      service={service}
                      className="flex flex-1 flex-col gap-2 items-start justify-start mx-2.5"
                      linkedin="images/img_linkedin.svg"
                      facebook="images/img_facebook.svg"
                      twitter="images/img_twitter.svg"
                    />
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
            </div>
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-start justify-start w-[75px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-800 w-[15px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
            {/* <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <Img
                className="h-12 w-[220px]"
                src="images/img_search.svg"
                alt="search"
              />
              <Img
                className="h-12 w-[125px]"
                src="images/img_companylogocompany109_gray_53.svg"
                alt="companylogocomp"
              />
              <Img
                className="h-12 w-[92px]"
                src="images/img_companylogocompany109.svg"
                alt="companylogocomp_One"
              />
              <Img
                className="h-12 w-[141px]"
                src="images/img_companylogocompany109_gray_53_48x141.svg"
                alt="companylogocomp_Two"
              />
              <Img
                className="h-12 w-[134px]"
                src="images/img_companylogocompany109_gray_53_48x134.svg"
                alt="companylogocomp_Three"
              />
              <Img
                className="h-12 w-[132px]"
                src="images/img_companylogocompany109_gray_53_48x132.svg"
                alt="companylogocomp_Four"
              />
            </div> */}
          </div>
        </div>
        {/* <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <List
            className="sm:flex-col flex-row gap-5 grid md:grid-cols-1 grid-cols-2 justify-center max-w-[1290px] mx-auto w-full"
            orientation="horizontal"
          >
            <div className="bg-gradient  flex flex-1 flex-col items-start justify-start sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[76px] items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-gray-53 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikRegular18Gray53"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="md:max-w-full max-w-xs text-4xl sm:text-[32px] md:text-[34px] text-gray-53 tracking-[-0.50px]"
                      size="txtRalewayBold36"
                    >
                      The best foam padded chair
                    </Text>
                  </div>
                  <Button
                    className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  className="h-[301px] md:h-auto max-h-[301px] object-cover sm:w-[]"
                  src="images/img_sammoghadamkh.png"
                  alt="sammoghadamkh"
                />
              </div>
            </div>
            <div className="bg-gradient  flex flex-1 flex-col items-center justify-center sm:px-5 px-[30px] py-6 w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[79px] h-[301px] md:h-auto items-center justify-start w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-[31px] items-start justify-start w-full">
                    <Text
                      className="text-gray-53 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikRegular18Gray53"
                    >
                      Living Room
                    </Text>
                    <Text
                      className="max-w-[306px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-53 tracking-[-0.50px]"
                      size="txtRalewayBold36"
                    >
                      Latest model chandelier
                    </Text>
                  </div>
                  <Button
                    className="common-pointer border-2 border-gray-50 border-solid cursor-pointer font-medium leading-[normal] min-w-[155px] py-[15px] text-base text-center text-gray-50 tracking-[-0.50px]"
                    onClick={() => navigate("/shop")}
                  >
                    Shop Now
                  </Button>
                </div>
                <Img
                  className="h-[244px] md:h-auto max-h-[244px] object-cover sm:w-[]"
                  src="images/img_phildesforges.png"
                  alt="phildesforges"
                />
              </div>
            </div>
          </List>
        </div> */}
        {/* <div className="flex flex-col items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                <span className="text-black-900 font-raleway font-bold">
                  Our{" "}
                </span>
                <span className="text-black-900 font-raleway font-bold">
                  Newest
                </span>
                <span className="text-black-900 font-raleway font-bold">
                  {" "}
                  Product
                </span>
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                Made of the best materials and with a design that follows the
                times
              </Text>
            </div>
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <List
                    className="flex flex-col gap-[47px] items-center mx-2.5"
                    orientation="vertical"
                  >
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        status="New"
                        save="images/img_save.svg"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_400x308.png"
                        status="New"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_1.png"
                        status="New"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_2.png"
                        status="New"
                      />
                    </div>
                    <div className="gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-start justify-start w-full">
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_3.png"
                        status="New"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_4.png"
                        status="New"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_5.png"
                        status="New"
                      />
                      <HomepageCardproduct
                        className="flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        image="images/img_image_6.png"
                        status="New"
                      />
                    </div>
                  </List>
                </React.Fragment>
              ))}
              renderDotsItem={({ isActive }) => {
                if (isActive) {
                  return (
                    <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]" />
                  );
                }
                return (
                  <div
                    className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
                    role="button"
                    tabIndex={0}
                  />
                );
              }}
            />
            <PagerIndicator
              className="flex gap-[15px] h-[15px] items-center justify-center max-w-[1289px] w-full"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray-900 w-[15px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray-200 w-[15px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div> */}
        {/* <div className="h-[535px] md:h-[892px] md:px-5 relative w-full">
          <div className="absolute bg-yellow-100 bottom-[0] h-[440px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between max-w-[1365px] my-auto right-[0] w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[525px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-full"
                  size="txtRubikRegular24"
                >
                  Interior Modern
                </Text>
                <Text
                  className="leading-[60.00px] max-w-[525px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                  size="txtRalewayRomanBold40"
                >
                  Arrange your home in such a way with our modern interiors
                </Text>
              </div>
              <Button
                className="common-pointer border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-bluegray-900 text-center text-xl tracking-[-0.50px]"
                onClick={() => navigate("/shopdetaildescription")}
              >
                Shop Now
              </Button>
            </div>
            <Img
              className="sm:flex-1 h-[535px] md:h-auto object-cover w-[535px] sm:w-full"
              src="images/img_insideweather.png"
              alt="insideweather"
            />
          </div>
        </div> */}
        <div className="flex flex-col font-raleway items-center justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col md:gap-10 gap-[67px] items-center justify-start max-w-[1290px] mx-auto w-full">
          <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewayBold40"
              >
                <span className="text-black-900 font-raleway font-bold">
                  Our Products
                </span>
                
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                Made of the best materials and with a design that follows the
                times
              </Text>
            </div>
            <div className="flex flex-col font-rubik items-start justify-start w-full">
              <div className="md:gap-5 gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {products.map((props, index) => (
                  <React.Fragment key={`HomepageCardproduct${index}`}>
                    <HomepageCardproduct
                      
                      className="cursor-pointer flex flex-1 flex-col gap-4 items-start justify-start w-full"
                      // status="New"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-raleway items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[50px] h-full items-start justify-start w-full">
              <Text
                className="leading-[60.00px] max-w-[602px] md:max-w-full sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[-0.50px]"
                size="txtRalewayRomanBold40"
              >
                We guarantee the safety of your shopping
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <div className="sm:gap-5 gap-[50px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        Fast Shipping
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        Safe Delivery
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_clock.svg"
                      alt="clock"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        365 Days Return
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                    <Img
                      className="h-[60px] w-[63px]"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <div className="flex flex-col gap-3 items-start justify-start w-[276px]">
                      <Text
                        className="text-black-900 text-xl tracking-[-0.50px] w-full"
                        size="txtRalewaySemiBold20"
                      >
                        24 hours CS
                      </Text>
                      <Text
                        className="leading-[25.00px] max-w-[276px] md:max-w-full text-gray-500 text-sm tracking-[-0.50px]"
                        size="txtRubikRegular14"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry Lorem Ipsum has{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="flex-1 md:flex-none md:h-[640px] sm:h-auto h-full max-h-[640px] object-cover sm:w-[] md:w-[]"
              src="https://cdni.iconscout.com/illustration/premium/thumb/man-doing-online-shopping-8368991-6638058.png"
              alt="rectangleSixteen"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 text-center tracking-[-0.50px] w-full"
                size="txtRalewaySemiBold40"
              >
                View Our Licence
              </Text>
              <Text
                className="text-center text-gray-500 text-lg tracking-[-0.50px] w-full"
                size="txtRubikRegular18Gray500"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </Text>
            </div>
            {/* <List
              className="sm:flex-col flex-row gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {homepageCardblogPropList.map((props, index) => (
                <React.Fragment key={`HomepageCardblog${index}`}>
                  <HomepageCardblog
                    className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List> */}
          </div>
        </div>
      </div>
  );
};

export default HomepagePage;
