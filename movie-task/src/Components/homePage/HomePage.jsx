import React, { useState } from 'react';
import Dashboard from '../dashboard/Dashboard';
import LoginPage from '../login page/LoginPage';

const HomePage = () => {
    const [loginPageLoading, setLoginPageLoading] = useState({
        dashboardShow: false,
        loginShow: true,
    })

    return (
        <>  
            {
                loginPageLoading.dashboardShow && 
                <Dashboard 
                    loginShow={loginPageLoading.loginShow} 
                    setLoginPageLoading={setLoginPageLoading}
                    loginPageLoading={loginPageLoading}
                    dashboardShow={loginPageLoading.dashboardShow}
                />
            }
            {
                loginPageLoading.loginShow && 
                <LoginPage 
                    setLoginPageLoading={setLoginPageLoading} 
                    dashboardShow={loginPageLoading.dashboardShow} 
                    loginShow={loginPageLoading.loginShow}
                    loginPageLoading={loginPageLoading}
                    
                />
            }
        </>
    )
}

export default HomePage;