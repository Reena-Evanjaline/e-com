'use client';
import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Samples() {
    return (
        <div className="container-fluid py-5 sample-section">
            <div className="text-white text-center mb-4">
                <h1 className="fw-bold">
                    Request Free Samples for Testing or <br /> Demo.
                </h1>
                <h5 className="mt-3">
                    Tell us more about your project and the products you are interested in Testing, <br />
                    we may have some questions you will be obliged to answer for us before we can ship.
                </h5>
            </div>

            <div className="container">
                <form className="mx-auto" style={{ maxWidth: '700px' }}>
                    {[
                        'Your Name*',
                        'Your Surname*',
                        'Your Company Name*',
                        'Your Phone Number*',
                        'Your Email Address*',
                        'Part Number Required*',
                    ].map((placeholder, index) => (
                        <input
                            key={index}
                            type="text"
                            className="form-control mb-3 input-field"
                            placeholder={placeholder}
                        />
                    ))}

                    <div className="text-center text-white mt-4">
                        <button type="submit" className="btn btn-dark px-4 py-2">
                            Contact Us <FaPaperPlane className="ms-2" />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Samples;
