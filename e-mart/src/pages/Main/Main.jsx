import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UIProvider } from "../../context/Context";
import Address from "../Address/Address";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import FavoriteLists from "../FavoriteLists/FavoriteLists";
import FinalProductsPage from "../FinalProductsPage/FinalProductsPage";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Products from "../Products/Products";
import Register from "../Register/Register";
import ShopCart from "../ShopCart/ShopCart";

const Main = () => {
  return (
    <UIProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favoriteLists" element={<FavoriteLists />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shopCartList" element={<ShopCart />} />
        <Route path="/address" element={<Address />} />
        <Route path="/finalProducts" element={<FinalProductsPage />} />
      </Routes>
    </UIProvider>
  );
};

export default Main;
