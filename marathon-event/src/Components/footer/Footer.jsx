import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer mt-5" >
        <div className="container" >
            <div className="active-links" >
                <a href="#home"><i className="fa-solid fa-chevron-right"></i>home</a>
                <a href="#about"><i className="fa-solid fa-chevron-right"></i>about</a>
                <a href="#details"><i className="fa-solid fa-chevron-right"></i>details</a>
                <a href="#order"><i className="fa-solid fa-chevron-right"></i>order</a>
                <a href="#contact"><i className="fa-solid fa-chevron-right"></i>contact</a>
            </div>
            <div className="countries" >
                <a href="#"><i className="fa-solid fa-chevron-right"></i>india</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>australia</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>england</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>america</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>belgium</a>
            </div>
            <div className="social-network" >
                <a href="#"><i className="fa-solid fa-chevron-right"></i>facebook</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>twitter</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>instagram</a>
                <a href="#"><i className="fa-solid fa-chevron-right"></i>chingari</a>
            </div>
        </div>
        <hr />
        <p className="mt-2" >Authorized By @Omkar Ingawale</p>
    </div>
  )
}

export default Footer;