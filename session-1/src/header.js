import React from "react";

function Header() {
    return(
        <header className='header fixed-top' >
            <div className='container' >
                <div className='header-content' >
                    <div className='logo' >
                        <a href='#' >Shopee.</a>
                    </div>
                    <div className='nav-bar' >
                        <a href='#home' >Home</a>
                        <a href='#about' >About</a>
                        <a href='#order' >Order</a>
                        <a href='#shop' >Shop</a>
                        <a href='#contact' >Contact</a>
                    </div>
                    <div className='logos' >
                        <a href='#' className='fas fa-bars' ></a>
                        <a href='#' className='fas fa-heart' ></a>
                        <a href='#' className='fas fa-shopping-cart' ></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;