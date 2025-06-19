import React from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white pt-3 pb-3 mt-5 footer-hover">
      <div className="container">
        <div className="row">

          {/* Address & Contact Info */}
          <div className="col-md-5 mb-4">
            <h6 className="fw-bold">GTS Trade Solutions (Global GTS Tech)</h6>
            <p className="mb-1">Marketing Office:</p>
            <p className="mb-1">Olympia Platina, Guindy Industrial Estate,</p>
            <p className="mb-1">Chennai-600032</p>
            <p className="mb-1">
              Phone: +91-9600122296, +91-7845799668, <br /> +91-9384857579
            </p>
            <p className="mb-1">Mail: info@globalgtstech.com</p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-7 mb-2">
            <div className="row">
              <div className="col-6 col-md-4 mb-2">
                <p className="mb-2 fw-semibold">About</p>
                <p className="mb-2 fw-semibold">Telecom</p>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <p className="mb-2 fw-semibold">Cloud</p>
                <p className="mb-2 fw-semibold">Contact Us</p>
              </div>
              <div className="col-6 col-md-4 mb-2">
                <p className="mb-2 fw-semibold">Cyber security</p>
                <p className="mb-2 fw-semibold">System Integration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <hr className="border-secondary mt-0" />
        <div className="text-center small">
          Copyright © 2023 GTS Solutions. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
