import { 
  RouterProvider, 
  createBrowserRouter, 
  BrowserRouter as Router, 
  } from "react-router-dom";
import LogIn from "AdminPanel/LogIn";
import Staffs from "AdminPanel/Staff";
import Layout from "components/Layout";
import React, { Suspense } from "react";
import AdminLayout from "AdminPanel/Layout";
import ProductList from "AdminPanel/Products";
import AddProduct from "AdminPanel/AddProduct";
import Animations from "components/Layout/Loader";
import RequireAuth from "AdminPanel/utils/RequireAuth";
import ProductCategories from "AdminPanel/ProductCategories";
import PasswordSettings from "AdminPanel/PasswordSettings";
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const ShopDetailDescription = React.lazy(
  () => import("pages/ShopDetailDescription"),
);
const Shop = React.lazy(() => import("pages/Shop"));
const Homepage = React.lazy(() => import("pages/Homepage"));

export default function AppContainer(){
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element:
          <Suspense fallback={<Animations />}>
            <Homepage />,
          </Suspense> 
        },
        {
          path: 'shop',
          element: 
          <Suspense fallback={<Animations />}>
            <Shop />,
          </Suspense>,
        },
        {
          path: 'aboutus',
          element: 
          <Suspense fallback={<Animations />}>
            <Aboutus />,
          </Suspense>,
        },
        {
          path: 'product/:id',
          element: 
          <Suspense fallback={<Animations />}>
            <ShopDetailDescription />,
          </Suspense>,
        },
        
      ],
    },
    {
      path: 'admin/signin',
      element: 
      <Suspense fallback={<Animations />}>
        <LogIn />,
      </Suspense>,
    },
    {
      path: '/admin',
      element: (
        <RequireAuth>
          <AdminLayout />
        </RequireAuth>
        ),
      children: [
          {
              path: 'staffs',
              element: 
              <Suspense fallback={<Animations />}>
                <Staffs />,
              </Suspense>
          },
          {
              path: 'products',
              element: 
              <Suspense fallback={<Animations />}>
                <ProductList />,
              </Suspense>
          },
          {
              path: 'add-product',
              element: 
              <Suspense fallback={<Animations />}>
                <AddProduct />,
              </Suspense>
          },
          {
              path: 'product-categories',
              element: 
              <Suspense fallback={<Animations />}>
                <ProductCategories />,
              </Suspense>
          },
          {
            path: 'password-settings',
            element: 
            <Suspense fallback={<Animations />}>
              <PasswordSettings />,
            </Suspense>
          },
      ]
    },
  ])
  return <RouterProvider router={router} />;
}

