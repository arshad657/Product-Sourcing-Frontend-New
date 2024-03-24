

import React, { useEffect } from 'react'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'utils/CustomHooks'

function RequireAuth({ children }) {
    const { auth } = useAuth();
    console.log(auth)
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
      if(!auth){
        navigate('/admin/signin');
      }
    }, [])
    
  return (
    <div>
    { auth?
    <div>
      {children}
      </div>      
    : 
    <Navigate to="/admin/signin" state={{ from: location }} replace />
  }
   </div>
  )
}

export default RequireAuth