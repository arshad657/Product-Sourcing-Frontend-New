import React from "react";
import Routes from "./Routes";
import AppContainer from "./Routes";
import { AuthProvider } from "AdminPanel/utils/AuthProvider";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return <AuthProvider>
    <AppContainer />
    {/* <FloatingWhatsApp
      accountName="Rohman Trading" 
      phoneNumber='+8801981911829' 
    /> */}
  </AuthProvider>
}

export default App;
