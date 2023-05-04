import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import App from "../App";
import SingleProduct from "../components/singleProduct";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<App />} />
      <Route path="/single-product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default Routing;
