import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import AboutPage from '../../Pages/AboutPage';
import SinglePage from '../../Pages/SinglePage';

const TvApp = () => {
  return (
    <Router>
        <Navbar />
        <div className="container" >
            <Routes>
                <Route path='/' element={ <HomePage /> } />
                <Route path='/about' element={ <AboutPage /> } />
                <Route path='/singleshow/:id' element={ <SinglePage /> } />
            </Routes>
        </div>
    </Router>
  )
}

export default TvApp;