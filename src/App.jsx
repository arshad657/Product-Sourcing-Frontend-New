import React from "react";
import Routes from "./Routes";
import AppContainer from "./Routes";
import { AuthProvider } from "AdminPanel/utils/AuthProvider";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div style={{margin: 0}}>
      <AuthProvider>
        <AppContainer />
        {/* <FloatingWhatsApp
          accountName="Rohman Trading" 
          phoneNumber='+8801981911829' 
        /> */}
      </AuthProvider>
    </div>
  )
}

export default App;
