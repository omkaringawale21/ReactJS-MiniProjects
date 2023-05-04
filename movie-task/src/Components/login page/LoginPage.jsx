import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ setLoginPageLoading, dashboardShow, loginPageLoading, loginShow }) => {
    const [login, setLogin] = useState({
        userName: "",
        userPassword: "",
        userData: [],
    });

    const handlerOnchange = (e) => {
        const {name, value} = e.target;
        setLogin({
            ...login,
            [name]: value,
        })
      }

    const handleLoginPage = () => {
        const newArray = [
            ...login.userData,
            {
                userName: login.userName,
                userPassword: login.userPassword,
            },
        ]
        setLogin({
            ...login,
            userData: newArray,
            userName: "",
            userPassword: "",
            loginShow: false,
        })
        setLoginPageLoading({
            ...loginPageLoading,
            dashboardShow: true,
            loginShow: false,
        })
        console.log(login.userData)
      }
  return (
    <div className="container grid-container" >
        <form className='was-validated' >
          <div className="col-12 text-center" >
            <h3>Login Page</h3>
          </div>
          <div className="card col-6" >
            <div className="col-12 card-body" >
              <label htmlFor='userName' className="form-label">User Name</label>
              <input type="text" className="form-control" name='userName' onChange={handlerOnchange} value={login.userName} required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="col-12 card-body" >
              <label htmlFor='userPassword' className="form-label">Password</label>
              <input type="password" className="form-control" name='userPassword' onChange={handlerOnchange} value={login.userPassword} required />
              <div className="valid-feedback">Valid.</div>
              <div className="invalid-feedback">Please fill out this field.</div>
            </div>
            <div className="col-12 card-body text-center" >
              <button type='button' className="btn btn-primary" onClick={handleLoginPage} >Submit</button>
            </div>
          </div>
        </form>
    </div>
  )
}

export default LoginPage;