'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { jwtDecode } from 'jwt-decode';

export default function ProductPage({ token }) {
  const params = useParams();
  const slug = params?.slug;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (!slug) return;

    async function fetchProduct() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`/api/products/${slug}`);
        if (!res.ok) {
          setError('Product not found');
          setLoading(false);
          return;
        }

        const data = await res.json();
        if (!data || !data.product) {
          setError('Product not found');
          setLoading(false);
          return;
        }

        setProduct(data.product);
      } catch (err) {
        setError('Failed to fetch product');
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [slug]);

  useEffect(() => {
    if (product?.price) {
      setTotalPrice(product.price * quantity);
    }
  }, [product, quantity]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const addToCart = async () => {
    if (!token) {
      window.location.href = '/intermediate';
      return;
    }

    let userId = null;
    try {
      const decoded = jwtDecode(token);
      userId = decoded?.id;
      console.log('Decoded user ID:', userId);
    } catch (err) {
      console.error('Failed to decode token:', err);
      alert('Invalid token');
      return;
    }

    try {
      const res = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          products_id: product.id,
          quantity: quantity,
          user_id: userId,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        window.location.href = '/add-to-cart';
      } else {
        alert(data.error || 'Failed to add to cart');
      }
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong while adding to cart');
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">Loading...</div>
        <Footer />
      </>
    );
  }

  if (error || !product) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <div className="row gx-5">
          {/* Left - Product Image */}
          <div className="col-md-6 d-flex justify-content-center align-items-start">
            <Image
              src={product.images?.[0]?.image_url || '/images/default-product.webp'}
              alt={product.name}
              width={700}
              height={700}
              className="img-fluid border p-3"
              style={{
                objectFit: 'contain',
                maxHeight: '100%',
                width: '100%',
                height: 'auto',
              }}
            />
          </div>

          {/* Right - Product Details */}
          <div className="col-md-6">
            <h2 className="fw-bold">{product.name}</h2>
            <h5 className="text-success mb-4">Total: ₹{totalPrice.toFixed(2)}</h5>

            <div className="mb-3">
              <label className="form-label fw-semibold">Quantity</label>
              <div className="d-flex align-items-center" style={{ maxWidth: 150 }}>
                <button className="btn btn-outline-secondary" onClick={handleDecrement}>–</button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="form-control text-center"
                  style={{ borderLeft: 0, borderRight: 0 }}
                />
                <button className="btn btn-outline-secondary" onClick={handleIncrement}>+</button>
              </div>
            </div>

            <div className="d-grid gap-2 d-md-flex mb-3">
              <button className="btn btn-outline-dark" onClick={addToCart}>Add to cart</button>
              <button className="btn btn-dark">Buy it now</button>
            </div>

            <p className="mt-3 text-muted small" style={{ maxWidth: 400 }}>
              {product.description}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
