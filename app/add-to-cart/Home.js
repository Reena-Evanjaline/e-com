"use client";
import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Cart from './Cart';

const Home = () => {
  return (
    <>
    <Navbar/>
      <Cart/>
      <Footer/>
    </>
  );
};

export default Home;
 