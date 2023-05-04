import React from 'react';
import './Header.css';

const Header = ({ loginShow, setLoginPageLoading, loginPageLoading, dashboardShow }) => {

  const backToLoginPage = () => {
    setLoginPageLoading({
        ...loginPageLoading,
        loginShow: true,
        dashboardShow: false,
    })
  }

  return (
        <div className='box'>
            <div className='container' >
                <div className='box-container' >
                    <div className="nav-symbol" >
                        <a><i className="fas fa-video" ></i>Movies</a>                
                    </div>
                    <div className="nav-links" >
                        <a href="#" >Home</a>
                        <a href="#" >About</a>
                        <a href="#" >Movies</a>
                    </div>
                    <div className="nav-logo" >
                        <a  className="fa-solid fa-magnifying-glass" ></a>
                        <a  className="fa-sharp fa-solid fa-heart" ></a>
                        <button type='button' className='btn' onClick={backToLoginPage} ><i className="fa-solid fa-user" ></i>LogOut</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header;