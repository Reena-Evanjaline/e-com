'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

function Client() {
  const clientLogos = [
    '/images/c-1.jpg',
    '/images/c-2.jpg',
    '/images/c-3.jpg',
    '/images/c-4.jpg',
    '/images/c-5.jpg',
    '/images/c-6.jpg',
  ];

  return (
    <div className='container-fluid bg-white'>
    <div className="container-fluid ">
      <h3 className="text-center  mt-3 mb-3 text-dark">Our Clients</h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
        }}
        loop={true}
      >
        {clientLogos.map((logo, index) => (
          <SwiperSlide key={index} className="d-flex justify-content-center">
            <Image
              src={logo}
              alt={`Client ${index + 1}`}
              width={120}
              height={80}
              className="img-fluid"
              style={{ objectFit: 'contain' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}

export default Client;
