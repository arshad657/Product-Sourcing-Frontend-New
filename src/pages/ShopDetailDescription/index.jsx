import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

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
import HomepageCardproduct from "components/HomepageCardproduct";
import axios from "axios";
import CSelect from "components/Common/CSelect";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopDetailDescriptionPage = () => {
  const navigate = useNavigate();
  const params = useParams()
    const [fromOptions, setFromOptions] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({from: ' ', to: ' '})
    const [toOptions, setToOptions] = useState([])
    const [finalItem, setFinalItem] = useState([])
    const [initialState, setInitialState] = useState({})
    const [product, setProduct] = useState({})
    const [descriptions, setDescriptions] = useState([
        'Headphones have become an indispensable accessory in our modern lives, seamlessly blending technology with audio immersion. These devices offer a private gateway to a world of sound, enveloping the listener in rich, high-fidelity audio. Designed for comfort, headphones come in various styles, including over-ear, on-ear, and in-ear, catering to diverse preferences. ',
        'Modern headphones feature advanced technologies like noise cancellation, wireless connectivity, touch controls, and voice assistants, enhancing user convenience. Whether youre a music enthusiast, a gamer seeking immersive audio, or someone looking for a tranquil listening experience, headphones provide a personalized, high-quality soundstage. With sleek designs and premium materials, they are as much a fashion statement as a functional accessory. ',
        'Over-ear headphones cocoon the ears, blocking external noise, and delivering an immersive audio experience. On-ear headphones are compact and stylish, offering a balanced blend of comfort and portability. In-ear headphones are ultra-portable, fitting snugly into the ear canal, making them ideal for active lifestyles.From commuting to work or working out, headphones offer a personalized soundtrack to life, making them an integral part of todays tech-savvy world.',
      ]);
    const details = {
        title: 'Razer Kraken V3 HyperSense Wired USB Gaming Headset w/Haptic Technology: Triforce Titanium 50mm Drivers - THX Spatial Audio - Hybrid Fabric & Leatherette Memory Foam Cushions - Detachable Mic',
        img: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
        brand: 'Razer', 
        modelName: 'Kraken V3 HyperSense', 
        color: 'Black', 
        // price: '23', 
        inStock: true,
        prices: [
            {from: "Germany", to: "Bangladesh", amount: 200}, 
            {from: "China", to: "Bangladesh", amount: 500}, 
            {from: "Italy", to: "India", amount: 800}, 
        ]
    }
    const fetchData = async () => {
        let url = `http://localhost:4000/api/v1/products/${params.id}`;
        try {
          const response = await axios.get(url);
          response.data[0]?.prices?.forEach(item => {
            setFromOptions(prevOptions => [...prevOptions, item.from]);
            setToOptions(prevOptions => [...prevOptions, item.to]);
          });
          setProduct(response.data[0])
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(() => {
        fetchData();
        window.scrollTo(0, 0);
        }, [])


  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <p />
          {/* <CartNavbar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[35px] w-full" /> */}
          <div className="flex flex-col items-start justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
            <div className="flex md:flex-col flex-row gap-[47px] items-center justify-start max-w-[1290px] mx-auto w-full">
              <Img
                className="flex-1 md:flex-none md:h-[595px] sm:h-auto h-full max-h-[595px] object-cover sm:w-[] md:w-[]"
                src={product.images}
                alt="rectangle1475"
              />
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <Text
                    className="max-w-[621px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold32Black900"
                  >
                    {product.title}
                  </Text>
                  <div className="flex flex-col font-rubik gap-5 items-start justify-start w-full">
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Brand :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        {product?.brand ? product?.brand: 'None'}
                      </span>
                      <span className="text-black-900 font-rubik text-left font-semibold">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Color :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        {product?.brand ? product?.brand: 'None'}
                      </span>
                      <span className="text-black-900 font-rubik text-left font-semibold">
                        {" "}
                      </span>
                    </Text>
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Categories :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        {product?.category}
                      </span>
                    </Text>
                  </div>
                  <Box mb={1} sx={{display: {md: 'flex', sm: 'block'}, alignItems: 'center', justifyContent: 'space-between',gap: 2,}}>
                    <Text
                      className="text-lg tracking-[-0.50px] w-fit text-gray-500 font-rubik text-left font-normal"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Shipping <br />from :
                      </span>
                          
                    </Text> 
                      {/* <Box sx={{display: {md: 'flex', sm: 'block'}, alignItems: 'center', width: '100%', gap: 2}}> */}
                      <CSelect setFinalItem={setFinalItem} options={fromOptions} prices={product && product?.prices} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setInitialState={setInitialState} title='from'/> 
                      <Text
                      className="text-lg tracking-[-0.50px] w-fit text-gray-500 font-rubik text-left font-normal"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        To
                      </span>
                    </Text> 
                      <CSelect setFinalItem={setFinalItem} options={toOptions} prices={product && product?.prices} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setInitialState={setInitialState} title='to'/>
                      <Text
                      className="text-lg tracking-[-0.50px] w-fit text-gray-500 font-rubik text-left font-normal"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        =
                      </span>
                    </Text>
                      <TextField
                        id="input-with-icon-textfield"
                        InputProps={{
                            readOnly: true,
                        startAdornment: (
                            <InputAdornment position="start">
                            <AttachMoneyIcon />
                            </InputAdornment>
                        ),
                        }}
                        variant="outlined"
                        value={initialState ? "Please select country" : finalItem && finalItem[0]?.amount ? finalItem[0]?.amount : 'No shipment available'}
                        />
                      {/* </Box> */}
                    
                  </Box>
                  {/* <Text
                    className="leading-[35.00px] max-w-[621px] md:max-w-full text-gray-500 text-lg tracking-[-0.50px]"
                    size="txtRubikRegular18Gray500"
                  >
                    {product.description}
                  </Text> */}
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    {/* <div className="border border-black-900 border-solid flex flex-row gap-[15px] items-center justify-start p-2.5 w-[38%]">
                      <Img
                        className="common-pointer h-6 ml-1 w-6"
                        src="images/img_google.svg"
                        alt="google"
                        onClick={handleNavigate2}
                      />
                      <Text
                        className="text-black-900 text-lg tracking-[-0.50px]"
                        size="txtRubikRegular18"
                      >
                        1
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    </div> */}
                    <Button
                  className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[128px] py-[10px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
                  onClick={() => navigate("/shop")}
                >
                  Enquiry
                </Button>
                </div>
                <div className="flex flex-1 flex-col gap-[42px] items-start justify-start w-full">
              <div className="flex flex-row font-josefinsans gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-end justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-auto"
                    size="txtJosefinSansRomanBold24"
                  >
                    Description
                  </Text>
                  <Line className="bg-bluegray-900 h-1.5 w-full" />
                </div>
              </div>
              <Text
                className="leading-[35.00px] text-base text-gray-500 tracking-[-0.50px]"
                size="txtRubikRegular16"
              >
                <>
                  {product.description}
                </>
              </Text>
            </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row gap-[49px] items-end justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-[42px] items-start justify-start w-full">
              <div className="flex flex-row font-josefinsans gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-end justify-start w-auto">
                  <Text
                    className="text-2xl md:text-[22px] text-bluegray-900 sm:text-xl tracking-[-0.50px] w-auto"
                    size="txtJosefinSansRomanBold24"
                  >
                    Description
                  </Text>
                  <Line className="bg-bluegray-900 h-1.5 w-full" />
                </div>
              </div>
              <Text
                className="leading-[35.00px] text-base text-gray-500 tracking-[-0.50px]"
                size="txtRubikRegular16"
              >
                <>
                  {product.description}
                </>
              </Text>
            </div>
          </div>
        </div> */}
        
        <CartSectionfooter className="bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full" />
      </div>
    </>
  );
};

export default ShopDetailDescriptionPage;
