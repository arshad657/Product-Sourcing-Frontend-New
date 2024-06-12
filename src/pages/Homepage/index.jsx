import React, { useEffect, useState } from "react";
import logo  from '../../assets/images/homeImage.png'
import { useNavigate } from "react-router-dom";
import {
  Button,
  Img,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import HomepageCardproduct from "components/HomepageCardproduct";
import axios from "axios";
import ServicesCard from "components/ServicesCard";

const HomepagePage = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

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
      imgPath:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZBiRO7KH_WuV1wDi8BwiIaNweAVEoDb-LZA&s'
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
          </div>
        </div>
        
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
      </div>
  );
};

export default HomepagePage;
