// import { createContext, useContext, useState } from 'react';
// const AuthContext = createContext(null);


// export default function AuthProvider({
//   children,
// }) {
//   // Uses `isSignedIn` prop to determine whether or not to render a user
//   const [auth, setAuth] = useState(null);

//   return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }

//   return context;
// };


import React, { useState, createContext, useEffect} from 'react';

const AuthContext = createContext();
// here we have the logged-in user information
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const login = (user) => {
    console.log('auth provider', user)    
    localStorage.setItem('token', JSON.stringify(user.token));
    setAuth({token: user.token, userRole: user.userRole});
  };
  const updateAuth = (auth) =>{
    localStorage.setItem('auth', JSON.stringify(auth));
    setAuth(auth);
  }
  const logout =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    setAuth(null);
  }
  const getToken =()=>{
   return localStorage.getItem('token');
  }
 
  useEffect(() => {
    let checkAuth = localStorage.getItem('auth');
    console.log('checkAuth',(checkAuth));
    if (checkAuth){
     if(checkAuth !== 'undefined') {
      let parsedAuth = JSON.parse(checkAuth);
      setAuth(parsedAuth);
    }
    }else{
      logout();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth, login ,logout, getToken, updateAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;