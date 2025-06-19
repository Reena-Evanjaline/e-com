'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function SFP() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/product');
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error('Failed to fetch products');
        }
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchProducts();
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="container-fluid">
      <h1 className="text-center">SFP</h1>
      <div className="container mt-5">
        <div className="row">
          {currentItems.map((product, index) => (
            <div className="col-6 col-lg-3 text-center mb-4" key={index}>
              <div className="p-3 shadow-sm rounded bg-white h-100">
                <Link href={`/products/${product.slug}`} className="d-block text-decoration-none">
                  <Image
                    src={product.images?.[0]?.url || '/images/no-image.png'}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded img-fluid"
                    style={{ objectFit: 'contain' }}
                  />
                  <p className="mt-2 mb-1 fw-medium text-dark">{product.name}</p>
                  <p className="mb-0 fw-semibold text-dark">₹{product.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-center mt-4">
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button className="page-link border-0 bg-white text-dark" onClick={() => goToPage(currentPage - 1)}>
                &lsaquo;
              </button>
            </li>

            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i + 1} className="page-item">
                <button
                  className={`page-link border-0 bg-white text-dark ${currentPage === i + 1 ? 'border-bottom border-2' : ''}`}
                  style={{ minWidth: '40px' }}
                  onClick={() => goToPage(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}

            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <button className="page-link border-0 bg-white text-dark" onClick={() => goToPage(currentPage + 1)}>
                &rsaquo;
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SFP;
