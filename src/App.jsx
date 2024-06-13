import React from "react";
import AppContainer from "./Routes";
import { AuthProvider } from "AdminPanel/utils/AuthProvider";

function App() {
  return (
    <div style={{margin: 0}}>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </div>
  )
}

export default App;
