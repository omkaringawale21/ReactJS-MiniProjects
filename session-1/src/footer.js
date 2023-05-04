import React from "react";

function Footer() {
    return(
        <footer className="footer" >
            <div className="container" >
                <div className="box-container" >
                    <div className="quick-links" >
                        <h3>quick links</h3>
                        <a><i className="fa-solid fa-chevron-right" ></i>Home</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>about</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>order</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>shop</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>contact</a>
                    </div>
                    <div className="contact" >
                        <h3>contact info</h3>
                        <a><i className="fa-solid fa-chevron-right" ></i>+123-456-7890</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>+111-222-3333</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>omkar21@gmail.com</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>omkar08@gmail.com</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>kolhapur, india - 416003</a>
                    </div>
                    <div className="details" >
                        <h3>follow us</h3>
                        <a><i className="fa-solid fa-chevron-right" ></i>facebook</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>instagram</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>twitter</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>github</a>
                        <a><i className="fa-solid fa-chevron-right" ></i>linkedin</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;