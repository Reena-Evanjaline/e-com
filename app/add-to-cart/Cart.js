'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCart() {
      setLoading(true);
      try {
        const token = Cookies.get('Authtoken');
        const decoded = token ? jwtDecode(token) : null;
        const userId = decoded?.id;

        if (!userId) throw new Error('User not authenticated');

        const res = await fetch(`/api/get-cart?user_id=${userId}`);
        if (!res.ok) throw new Error('Failed to fetch cart');

        const data = await res.json();
        const cleanedItems = (data.cartItems || []).map(item => ({
          ...item,
          quantity: Number(item.quantity) || 1,
        }));
        setCartItems(cleanedItems);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load cart');
      } finally {
        setLoading(false);
      }
    }

    fetchCart();
  }, []);

  const increment = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.cart_id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.cart_id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = async (id) => {
    try {
      const res = await fetch(`/api/cart?id=${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete item');
      setCartItems(prev => prev.filter(item => item.cart_id !== id));
      toast.success('Item removed from cart');
    } catch (err) {
      console.error('Error deleting item:', err);
      toast.error('Failed to delete item from cart.');
    }
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0) * item.quantity,
    0
  );

  if (loading) return <div className="container py-5 text-center">Loading cart...</div>;

  return (
    <div className="container mt-5">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Your cart</h2>
        <button
          type="button"
          className="bg-primary rounded text-white p-2 border-0 text-decoration-none"
        >
          Continue shopping
        </button>
      </div>

      <div className="row fw-bold text-muted border-bottom pb-2 mb-3">
        <div className="col-6">PRODUCT</div>
        <div className="col-3 text-center">QUANTITY</div>
        <div className="col-3 text-end">TOTAL</div>
      </div>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => {
          const price = Number(item.price || 0);
          return (
            <div key={item.cart_id} className="row align-items-center mb-4">
              <div className="col-6 d-flex align-items-center">
                <img
                  src={item.image_url || '/images/default-product.webp'}
                  alt={item.name}
                  style={{ width: '80px', height: '60px', objectFit: 'contain' }}
                  className="me-3 border"
                />
                <div>
                  <div>{item.name}</div>
                  <div className="text-muted">₹{price.toFixed(2)}</div>
                </div>
              </div>

              <div className="col-3 d-flex justify-content-center align-items-center">
                <div className="input-group" style={{ width: '120px' }}>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => decrement(item.cart_id)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    className="form-control text-center"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => increment(item.cart_id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="btn btn-link text-danger ms-2 p-0"
                  onClick={() => removeItem(item.cart_id)}
                >
                  <FaTrash />
                </button>
              </div>

              <div className="col-3 text-end fw-semibold">
                ₹{(price * item.quantity).toFixed(2)}
              </div>
            </div>
          );
        })
      )}

      <div className="row border-top pt-4 mt-4">
        <div className="col-12 text-end">
          <h5 className="mb-3">
            <span className="fw-bold">₹{totalAmount.toFixed(2)}</span>
          </h5>
          <Link href="/check-out" className="btn btn-dark px-5">
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
