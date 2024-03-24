import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import AppBar from 'components/Common/AppBar';
import Footer from 'components/Common/Footer';

const Layout = () => {

    useEffect(() => {
      const script = document.createElement('script');
      script.src = "https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js";
      script.defer = true;
      script.id = "tcx-callus-js";
      script.charSet = "utf-8";

      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }, []);
    
    return (
      <>
        <div>
        <call-us-selector phonesystem-url="https://1011.3cx.cloud" party="arshad39stech"></call-us-selector>
        <script defer src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js" id="tcx-callus-js" charset="utf-8"></script>
        </div>
        <AppBar className="bg-white-A700 flex items-center justify-center md:px-5 px-[75px] py-[20px] w-full"/>
        <Outlet />
        <Footer className="mb-0 bg-black-900 flex font-raleway gap-2 items-center justify-center md:px-5 px-[75px] py-[50px] w-full "  />
      </>
    );
  };

  export default Layout;