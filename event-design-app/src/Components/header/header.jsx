import React from "react";
import "./header.css";

class Header extends React.Component {
    render() {
        return(
            <div className="header fixed-top" >
                <div className="container" >
                        <div className="logo" >
                            <a href="#" >EVENTS</a>
                        </div>
                        <div className="contents" >
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#details">Details</a>
                            <a href="#order">Order</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="logos-symbol" >
                            <a href="#" className="fas fa-heart" ></a>
                            <a href="#" className="fas fa-shopping-cart" ></a>
                            <a href="#" className="fas fa-bars" ></a>
                        </div>
                </div>
            </div>
        );
    }
}

export default Header;