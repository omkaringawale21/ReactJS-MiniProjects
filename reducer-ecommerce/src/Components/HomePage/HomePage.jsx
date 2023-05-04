import React from 'react';
import Products from '../Products/Products';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <div className='home-container' >
          <div className='card bg-dark text-white' >
              <img className='card-img' src='./images/bg.jpg' alt='Card image' />
          </div>
      </div>
      <Products />
    </>
  )
}

export default HomePage;