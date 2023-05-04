import React from "react";
import "./footer.css";

class Footer extends React.Component {
    render() {
        return(
            <div className="footer mt-5" >
                <div className="container" >
                    <div className="active-links" >
                        <a href="#home"><i class="fa-solid fa-chevron-right"></i>home</a>
                        <a href="#about"><i class="fa-solid fa-chevron-right"></i>about</a>
                        <a href="#details"><i class="fa-solid fa-chevron-right"></i>details</a>
                        <a href="#order"><i class="fa-solid fa-chevron-right"></i>order</a>
                        <a href="#contact"><i class="fa-solid fa-chevron-right"></i>contact</a>
                    </div>
                    <div className="countries" >
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>india</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>australia</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>england</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>america</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>belgium</a>
                    </div>
                    <div className="social-network" >
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>facebook</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>twitter</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>instagram</a>
                        <a href="#"><i class="fa-solid fa-chevron-right"></i>chingari</a>
                    </div>
                </div>
                <hr />
                <p className="mt-2" >Authorized By @Omkar Ingawale</p>
            </div>
        );
    }
}

export default Footer;