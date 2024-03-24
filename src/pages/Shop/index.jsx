import React, { useEffect, useState } from "react";

import { Button, Img, Input, SelectBox, Text } from "components";
import CartColumnframe48095972 from "components/CartColumnframe48095972";
import CartNavbar from "components/CartNavbar";
import CartSectionfooter from "components/CartSectionfooter";
import HomepageCardproduct from "components/HomepageCardproduct";
import axios from "axios";
import NoData from '../../assets/images/no-data.png'

const homeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const sortOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShopPage = () => {
  const [products, setProducts] = useState([])
  const [productCategories, setProductCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/products',{
        params: {
          category: selectedCategory,
          search: search,
        },
      });
      const transformedData = response.data.map(item => {
        const { _id, ...rest } = item; 
        return { id: _id, ...rest }; 
      });
      setProducts(transformedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchProductCategories = async () => {
    try {
      const response = await axios.get('https://product-sourcing-backend-mv2qe9lfn-rubayetseasons-projects.vercel.app/api/v1/product-categories');
      const transformedData = response.data.map(item => {
        const { _id, ...rest } = item; 
        return { id: _id, ...rest }; 
      });
      setProductCategories(transformedData); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchProducts();
    fetchProductCategories();
  }, [selectedCategory, search])

  const handleSearch = () => {
    fetchProducts();
  }
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full pb-10">
        <div className="flex flex-col md:gap-10 gap-[75px] items-start justify-start w-full">
          <p />
        </div>
        <div className="flex flex-col font-raleway items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row gap-5 items-start justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-[308px]">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRalewayRomanSemiBold20"
                >
                  Product Categories
                </Text>
                <div className="flex flex-col font-poppins gap-5 items-start justify-start w-full">
                  <Text
                    className={`cursor-pointer text-base tracking-[-0.50px] w-full ${selectedCategory === '' ? ' text-bluegray-500' : ' text-gray-500'}`}
                    size="txtPoppinsRegular16Gray500"
                    onClick={() => setSelectedCategory('')}
                    >
                    All 
                  </Text>
                  {productCategories.map(item => 
                    <Text
                      className={`cursor-pointer text-base tracking-[-0.50px] w-full ${item.name === selectedCategory ? ' text-bluegray-500' : ' text-gray-500'}`}
                      size="txtPoppinsRegular16Gray500"
                      onClick={() => setSelectedCategory(item.name)}
                    >
                    {item.name} ({item.totalCount})
                    </Text>
                  )}
                </div>
              </div>
              
              
            </div>
            <div className="flex flex-1 flex-col font-rubik gap-[50px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <div className="mx-auto flex sm:flex-1 flex-col font-rubik items-start w-[407px] sm:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                    <div className=" flex sm:flex-1 flex-col items-center justify-start w-[90%] sm:w-full">
                      <Input
                        name="frame48095984"
                        onChange={(e) => setSearch(e)}
                        placeholder="Search Product"
                        className=" leading-[normal] p-0 placeholder:text-black-500 sm:pr-5 text-black-900 text-left text-sm tracking-[-0.50px] w-full"
                        wrapClassName="bg-white-A700 pl-4 pr-[35px] py-[15px] w-full"
                      ></Input>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                {products.length > 0 ?
                <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {products.map((props, index) => (
                    <React.Fragment key={`HomepageCardproduct${index}`}>
                      <HomepageCardproduct
                        className="cursor-pointer flex flex-1 flex-col gap-4 items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))
                }
                
                </div>
                :
                <Img
                  className="inset-[0] justify-center m-auto object-cover max-w-[500px] sm:w-[300px]"
                  alt="image"
                  src={NoData }
                />
              }
                
              </div>
              {/* <div className="flex flex-row gap-2.5 items-center justify-center max-w-[962px] w-full">
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_arrowleft.svg"
                  alt="arrowleft"
                />
                <Button className="bg-bluegray-900 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-center text-sm text-white-A700 tracking-[-0.50px] w-[35px]">
                  1
                </Button>
                <Button className="bg-gray-100 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                  2
                </Button>
                <Button className="bg-gray-100 cursor-pointer font-semibold h-[35px] leading-[normal] py-[9px] rounded-[17px] text-black-900 text-center text-sm tracking-[-0.50px] w-[35px]">
                  3
                </Button>
                <Button className="bg-gray-100 flex h-[35px] items-center justify-center p-[7px] rounded-[17px] w-[35px]">
                  <Img className="h-5" src="images/img_user.svg" alt="user" />
                </Button>
                <Img
                  className="h-[15px] w-[15px]"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
