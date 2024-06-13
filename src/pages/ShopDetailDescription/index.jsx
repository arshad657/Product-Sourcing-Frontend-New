import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import {
  Button,
  Img,
  Line,
  Text,
} from "components";
import axios from "axios";
import CSelect from "components/Common/CSelect";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EnquiryPop from "components/Common/EnquiryPop";

const ShopDetailDescriptionPage = () => {
  const [open, setOpen] = React.useState(false);
  const params = useParams()
    const [fromOptions, setFromOptions] = useState([])
    const [selectedCountry, setSelectedCountry] = useState({from: ' ', to: ' '})
    const [toOptions, setToOptions] = useState([])
    const [finalItem, setFinalItem] = useState([])
    const [initialState, setInitialState] = useState({})
    const [product, setProduct] = useState({})
    
    
    const fetchData = async () => {
        let url = `https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/products/${params.id}`;
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
      <div className="pb-16 bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <p />
          
          <div className="flex flex-col items-start justify-start pt-[75px] md:px-10 sm:px-5 px-[75px] w-full">
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-[47px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <Img
              className="flex-1 md:flex-none md:h-[595px] sm:h-auto h-full max-h-[595px] object-cover sm:w-[] md:w-[]"
              src={product?.images?.[0] ? product.images[0] : null}
              alt="rectangle1475"
            />
              <div className="flex flex-1 flex-col gap-[30px] items-start justify-start w-full">
                <div className="flex flex-col gap-[33px] items-start justify-start w-full">
                  <Text
                    className="max-w-[621px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[-0.50px]"
                    size="txtRalewayRomanBold32Black900"
                  >
                    {product.title} - {product.subTitle}
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

                    {/* <DrawerAppBar /> */}
                    <Text
                      className="text-black-900 text-lg tracking-[-0.50px] w-full"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Color :
                      </span>
                      <span className="text-black-900 font-rubik text-left font-normal">
                        {" "}
                        {product?.color ? product?.color: 'None'}
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
                      className="sm:mb-5 text-lg tracking-[-0.50px] w-fit text-gray-500 font-rubik text-left font-normal"
                      size="txtRubikSemiBold18"
                    >
                      <span className="text-gray-500 font-rubik text-left font-normal">
                        Shipping <br />from :
                      </span>
                          
                    </Text> 
                      <CSelect setFinalItem={setFinalItem} options={fromOptions} prices={product && product?.prices} selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} setInitialState={setInitialState} title='from'/> 
                      <Text
                      className="sm:my-5 text-lg tracking-[-0.50px] w-fit text-gray-500 font-rubik text-left font-normal"
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
                        className="bg-transparent"
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
                  </Box>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    <Button
                  className="common-pointer bg-bluegray-900 border-2 border-bluegray-900 border-solid cursor-pointer font-medium leading-[normal] min-w-[128px] py-[10px] text-center text-xl text-yellow-100 tracking-[-0.50px]"
                  onClick={() => setOpen(true)}
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
      </div>
      <EnquiryPop open={open} setOpen={setOpen}/>
    </>
  );
};

export default ShopDetailDescriptionPage;
