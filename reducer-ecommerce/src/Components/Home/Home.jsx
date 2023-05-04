import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Cart from '../Cart/Cart';
import HomePage from '../HomePage/HomePage';
import IsError from '../IsError/IsError';
import NavLists from '../NavLists/NavLists';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
  return (
    <div>
        <NavLists />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<Products />} />
            <Route path='/singleproduct/:id' element={<SingleProduct />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<IsError />} />
        </Routes>
    </div>
  )
}

export default Home;