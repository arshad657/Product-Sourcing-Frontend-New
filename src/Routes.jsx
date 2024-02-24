import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import AddProduct from "AdminPanel/AddProduct";
import ProductList from "AdminPanel/Products";
import AdminLayout from "AdminPanel/Layout";
import Layout from "components/Layout";
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Contactus = React.lazy(() => import("pages/Contactus"));
const BlogDetail = React.lazy(() => import("pages/BlogDetail"));
const Blog = React.lazy(() => import("pages/Blog"));
const Team = React.lazy(() => import("pages/Team"));
const Wishlist = React.lazy(() => import("pages/Wishlist"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const DetailReview = React.lazy(() => import("pages/DetailReview"));
const ShopDetailDescription = React.lazy(
  () => import("pages/ShopDetailDescription"),
);
const Shop = React.lazy(() => import("pages/Shop"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Cart = React.lazy(() => import("pages/Cart"));

// const sideNavigationItems = [
//   {title: 'Staffs', path: '/admin/staffs', icon: <BsPersonFill />}, 
//   {title: 'Products', path: '/admin/products', icon: <FaBoxOpen />}, 
//   {title: 'Product Categories', path: '/admin/product-categories', icon: <BiSolidCategory />}, 
//   {title: 'Password Settings', path: '/admin/password-settings', icon: <MdPassword />}, 
// ]
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
        <Router>
          <Routes>
          <Route path="/*" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shopdetaildescription" element={<ShopDetailDescription />} />
          <Route path="detailreview" element={<DetailReview />} />
          <Route path="checkout" element={<Checkout />} />
          
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="team" element={<Team />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blogdetail" element={<BlogDetail />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="*" element={<NotFound />} />
        </Route>
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="products" element={<ProductList />} />
            <Route path="add-product" element={<AddProduct />} />
          </Route>
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
