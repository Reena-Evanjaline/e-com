'use client';

import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import { BsSearch, BsPerson, BsBag } from 'react-icons/bs';
import Samples from './Samples';
import Offer from './Offer';
import Image from 'next/image';
import Banner2 from './Banner2';
import Vendor from './Vendor';
import Client from './Client';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// Register Swiper modules
SwiperCore.use([Autoplay]);

export default function Home() {
  const slides = [
    '/images/banner.png',
    '/images/banner.png',
    '/images/banner.png',
  ];

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
    <Navbar/>
      <main className="bg-black text-white min-vh-100">
        {/* Top email bar */}
        

        {/* Swiper Section */}
        <div className="w-100" style={{ height: '100vh' }}>
          <Swiper
            spaceBetween={0}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            style={{ height: '100%' }}
          >
            {slides.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <h1
                    style={{
                      fontSize: '2.5rem',
                      textShadow: '2px 2px 8px rgba(0,0,0,0.7)',
                    }}
                  >
                    Build the Backbone of Tomorrow
                  </h1>
                  <h5
                    style={{
                      marginTop: '1rem',
                      textShadow: '1px 1px 5px rgba(0,0,0,0.6)',
                    }}
                  >
                    Precision Engineering for high-performance.
                  </h5>
                  <button
                    style={{
                      marginTop: '2rem',
                      padding: '10px 20px',
                      fontSize: '1.2rem',
                      cursor: 'pointer',
                      backgroundColor: 'rgba(0,0,0,0.5)',
                      border: 'none',
                      color: 'white',
                      borderRadius: '5px',
                    }}
                  >
                    Request Quote
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Samples />

        <Offer />

        <Banner2 />
        <Client />
        <Vendor />

        {/* <div className='mt-5'> */}

        {/* </div> */}
        <Footer />
      </main>

    </>

  );
}
