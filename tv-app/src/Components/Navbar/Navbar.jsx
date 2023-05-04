import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='header' >
        <div className='container' >
            <nav className='navbar_nav' >
                <h3 className='navbar_brand' >
                    <NavLink to='/' >
                        <i className='fas fa-video' >TV Show Search</i>
                    </NavLink>
                </h3>
                <div className='navbar_links' >
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/about' >About</NavLink>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar;