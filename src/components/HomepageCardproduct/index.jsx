import React from "react";

import { Button, Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const HomepageCardproduct = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={props.className} onClick= {() => navigate(`/product/${props.id}`)}>
        <div className="h-[400px] relative w-full">
          <Img
            className="absolute h-[400px] inset-[0] justify-center m-auto object-cover w-full"
            alt="image"
            src={props?.images?.[1] ? props.images[1] : props.images[0] ? props.images[0] : null}
          />
          <Button className="absolute bg-bluegray-900 bottom-[4%] cursor-pointer font-rubik leading-[normal] left-[5%] py-[9px] text-center text-sm text-white-A700 tracking-[-0.50px] w-[106px]">
            {props?.category}
          </Button>
          <div className="absolute flex flex-col md:gap-10 gap-[106px] items-center justify-start right-[5%] top-[4%] w-auto">
            {!!props?.status ? (
              <Text
                className="bg-red-A200 justify-center px-[7px] text-sm text-white-A700 tracking-[-0.50px] w-auto"
                size="txtRubikRegular14WhiteA700"
              >
                {props?.status}
              </Text>
            ) : null}
            {!!props?.save ? (
              <Img className="h-[100px] w-10" alt="save" src={props?.save} />
            ) : null}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-full">
          <Text
            className="text-black-900 text-xl tracking-[-0.50px] w-auto"
            size="txtRalewaySemiBold20"
          >
            {props?.title}
          </Text>
          <Text
            className="text-bluegray-900 text-lg tracking-[-0.50px] w-auto"
            size="txtRubikRegular18Bluegray900"
          >
            {props?.twentyfour}
          </Text>
        </div>
      </div>
    </>
  );
};

// HomepageCardproduct.defaultProps = {
//   image: "images/img_image.png",
//   category: "Living Room",
//   teakwoodchair: "Teak wood chair",
//   twentyfour: "$24",
// };

export default HomepageCardproduct;
