'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productData } from '@/lib/productData';


function Sfp2() {
  return (
    <div className="container-fluid">
      <h1 className="text-center">SFP+</h1>
      <div className="container mt-5">
        <div className="row">
          {productData.map((product, index) => (
            <div className="col-6 col-lg-3 text-center mb-4" key={index}>
              <div className="p-3 shadow-sm rounded bg-white h-100">
                <Link href={`/products/${product.slug}`} className="d-block text-decoration-none">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded img-fluid"
                    style={{ objectFit: 'contain' }}
                  />
                  <p className="mt-2 mb-1 fw-medium text-dark">{product.name}</p>
                  <p className="mb-0 fw-semibold text-dark">{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sfp2;
