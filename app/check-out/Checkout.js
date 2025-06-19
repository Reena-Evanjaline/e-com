'use client';
import React from 'react';
import Image from 'next/image';
import { FaCcPaypal, FaApplePay } from 'react-icons/fa';
const cartItems = [
  {
    id: 1,
    name: 'J4859D',
    price: 55,
    quantity: 1,
    image: '/images/products-1.webp',
  },
  {
    id: 2,
    name: 'GLC-TE',
    price: 90,
    quantity: 2,
    image: '/images/products-2.webp',
  },
];

function Checkout() {
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = 14.76;
  const taxes = 7.25;
  const total = (subtotal + shipping + taxes).toFixed(2);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Contact + Delivery form */}
        <div className="col-md-7">
          <h4>Contact</h4>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email or mobile phone number" />
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" id="news" />
              <label className="form-check-label" htmlFor="news">
                Email me with news and offers
              </label>
            </div>
          </div>

          <h4>Delivery</h4>
          <div className="mb-3">
            <label>Country/Region</label>
            <select className="form-select">
              <option>United Arab Emirates</option>
            </select>
          </div>
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="First name (optional)" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Last name" />
            </div>
          </div>
          <input type="text" className="form-control mb-3" placeholder="Address" />
          <input type="text" className="form-control mb-3" placeholder="Apartment, suite, etc. (optional)" />
          <div className="row mb-3">
            <div className="col">
              <input type="text" className="form-control" placeholder="City" />
            </div>
            <div className="col">
              <select className="form-select">
                <option>Fujairah</option>
              </select>
            </div>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="saveInfo" />
            <label className="form-check-label" htmlFor="saveInfo">
              Save this information for next time
            </label>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-5 bg-light p-4">
          {cartItems.map((item) => (
            <div className="d-flex mb-3 align-items-center" key={item.id}>
              <div className="me-3 position-relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className="rounded border"
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  {item.quantity}
                </span>
              </div>
              <div>
                <div>{item.name}</div>
                <div className="fw-semibold">₹
                  {item.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
          <hr />
          <div className="d-flex justify-content-between">
            <span>Subtotal · {cartItems.reduce((a, b) => a + b.quantity, 0)} items</span>
            <span>₹
              {subtotal.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>Shipping</span>
            <span>₹
              {shipping.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>
              Estimated taxes <span title="May vary based on location">❓</span>
            </span>
            <span>₹
              {taxes.toFixed(2)}</span>
          </div>
          <hr />
          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Total</span>
            <span>GBP ₹
              {total}</span>
          </div>

          {/* Payment Buttons */}
          {/* Payment Buttons */}
          <div className="mt-4 text-center">
            <p className="fw-semibold mb-3">Pay with</p>
            <div className="d-flex justify-content-center gap-3">
              <button
                className="d-flex align-items-center gap-2 px-3 py-2 rounded"
                style={{ backgroundColor: '#003087', color: 'white', border: 'none' }}
              >
                <FaCcPaypal size={24} />
                <span className="fw-semibold">PayPal</span>
              </button>
              <button
                className="d-flex align-items-center gap-2 px-3 py-2 rounded"
                style={{ backgroundColor: '#000000', color: 'white', border: 'none' }}
              >
                <FaApplePay size={24} />
                <span className="fw-semibold">Apple Pay</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
