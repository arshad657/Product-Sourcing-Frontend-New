import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFound from "pages/NotFound";
import AddProduct from "AdminPanel/AddProduct";
import ProductList from "AdminPanel/Products";
import AdminLayout from "AdminPanel/Layout";
import Layout from "components/Layout";
import PasswordSettings from "AdminPanel/PasswordSettings";
import ProductCategories from "AdminPanel/ProductCategories";
import Staffs from "AdminPanel/Staff";
// import ProtectedRoute from "AdminPanel/utils/ProtectedRoute";
import LogIn from "AdminPanel/LogIn";
import RequireAuth from "AdminPanel/utils/RequireAuth";
import Animations from "components/Layout/Loader";
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Contactus = React.lazy(() => import("pages/Contactus"));
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
// const ProjectRoutes = () => {
//   return (
//     <React.Suspense fallback={<>Loading...</>}>
//         <Router>
//           <Routes>
//           <Route path="/" element={<Layout />}>
//       <Route index element={<Homepage />} />
//       <Route path="shop" element={<Shop />} />
//       <Route path="product/:id" element={<ShopDetailDescription />} />
//       <Route path="detailreview" element={<DetailReview />} />
//       <Route path="checkout" element={<Checkout />} />
//       <Route path="wishlist" element={<Wishlist />} />
//       <Route path="team" element={<Team />} />
//       <Route path="blog" element={<Blog />} />
//       <Route path="blogdetail" element={<BlogDetail />} />
//       <Route path="contactus" element={<Contactus />} />
//       <Route path="aboutus" element={<Aboutus />} />
//       <Route path="*" element={<NotFound />} />
//     </Route>
//           <Route path="/admin/*" element={<AdminLayout />}>
//             <Route path="products" element={<ProductList />} />
//             <Route path="add-product" element={<AddProduct />} />
//             <Route path="product-categories" element={<ProductCategories />} />
//             <Route path="staffs" element={<Staffs />} />
//             <Route path="password-settings" element={<PasswordSettings />} />
//           </Route>
//           <Route path="/dhiwise-dashboard" element={<Home />} />
//         </Routes>
//       </Router>
//     </React.Suspense>
//   );
// };
// export default ProjectRoutes;
