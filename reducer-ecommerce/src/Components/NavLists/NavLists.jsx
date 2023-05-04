import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../../Context/Context";
import "./NavLists.css";

const NavLists = () => {
  const { setSearchQuery } = useGlobalContext();

  return (
    <div className="home-page fixed-top">
      <div className="container home-page--container">
        <NavLink to="/" className="logo">
          <img src="./images/logo.png" alt="logo" />
        </NavLink>

        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </div>

        <div className="d-flex justify-centent-center align-items-center" >
          <input
            type="text"
            placeholder="Search Here..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control p-1 fs-4 me-2"
          />
          <NavLink to="/cart" className="cart me-2">
            Orders
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavLists;
