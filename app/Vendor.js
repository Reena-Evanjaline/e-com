'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Vendor() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/product'); 
        const data = await res.json();

        if (Array.isArray(data)) {
          // Sort ascending by id or name and limit to 8 items
          const sorted = data.sort((a, b) => a.id - b.id).slice(0, 8);
          setProducts(sorted);
         
        }
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className='container-fluid mt-5' style={{ background: 'white' }}>
      <div className='container mt-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 text-center mb-4 mb-lg-0 mt-5'>
            <div className='shadow rounded p-2 d-inline-block'>
              <Image
                src='/images/product-1.webp'
                alt='Descriptive alt text'
                width={600}
                height={400}
                className='img-fluid rounded'
              />
            </div>
          </div>
          <div className='col-lg-6 text-center text-lg-start'>
            <h1 className='text-dark'>Vendor Agreements</h1>
            <p className='text-dark'>
              What about my contractual agreements with the Vendor? Zero impact on your hardware support and SLA's. The vendor is legally obliged to fulfil the terms of their warranty so long as third party SFPs do not impact the hardware.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className='container mt-5'>
        <h4 className='text-dark mb-4'>Featured Products</h4>
        <div className='row'>
          {products.map((product) => (
            <div className='col-6 col-lg-3 text-center mb-4' key={product.id}>
              <div className='p-3 shadow-sm rounded bg-white h-100'>
                <Image
                  src={product.images[0].url || '/images/placeholder.png'} // fallback image
                  alt={product.name}
                  width={200}
                  height={200}
                  className='rounded img-fluid'
                  style={{ objectFit: 'contain', maxHeight: '150px' }}
                />
                <p className='mt-2 mb-1 fw-medium text-dark'>{product.name}</p>
                <p className='mb-0 fw-semibold text-dark'>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className='text-center mt-4'>
        <Link href='/sfp' passHref>
          <button
            className='bg-dark p-2 rounded text-white w-100 mb-5'
            style={{ maxWidth: '100px' }}
          >
            View all
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Vendor;
