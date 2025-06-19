"use client";
import React from 'react';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Checkout from './Checkout';

const Home = () => {
  return (
    <>
    <Navbar/>
      <Checkout />
      <Footer/>
    </>
  );
};

export default Home;
 