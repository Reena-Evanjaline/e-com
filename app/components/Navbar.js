'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { BsBag } from 'react-icons/bs';
import { useRouter } from 'next/navigation'; // ✅ Add this

function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [id, setId] = useState(null);
  const [search, setSearch] = useState(''); // ✅ Add search state
  const router = useRouter(); // ✅ Router for navigation

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  useEffect(() => {
    const userId = Cookies.get('Authtoken');
    const decodedToken = userId ? jwtDecode(userId) : null;
    setId(decodedToken?.id || null);
  }, []);

  useEffect(() => {
    if (!id) return;
    async function fetchCartCount() {
      try {
        const res = await fetch(`/api/get-cart?user_id=${id}`);
        if (!res.ok) throw new Error('Failed to fetch cart');
        const data = await res.json();
        setCartCount((data.cartItems || []).length);
      } catch (err) {
        console.error(err);
      }
    }
    fetchCartCount();
  }, [id]);

  const navItems = [
    { label: 'Home', href: '#' },
    {
      label: 'Industries',
      dropdown: [
        { label: 'Enterprise IT', href: '#' },
        { label: 'Healthcare', href: '#' },
        { label: 'Data Centers', href: '#' },
        { label: 'Telecom Operators', href: '#' },
        { label: 'Oil & Gas', href: '#' },
      ],
    },
    {
      label: 'Fyber Store',
      dropdown: [
        {
          label: 'Transceivers',
          submenu: [
            { label: 'SFP', href: '/sfp' },
            { label: 'SFP +', href: '#' },
          ],
        },
      ],
    },
    {
      label: 'Becoming a Partner',
      dropdown: [
        { label: 'Regional Partners', href: '#' },
        { label: 'White Label', href: '#' },
        { label: 'Reseller Program', href: '#' },
      ],
    },
    {
      label: 'Contact Us',
      dropdown: [
        { label: 'Request a Quote', href: '#' },
        { label: 'Why Fyber', href: '#' },
        { label: 'Fyber Warranty', href: '#' },
        { label: 'Fyber Matrix', href: '#' },
        { label: 'Fyber Support Center', href: '#' },
        { label: 'What About Fyber', href: '#' },
        { label: 'FAQs About Fyber', href: '#' },
        { label: 'Transceiver Guide (Blog)', href: '#' },
        { label: 'Which Transceivers Do You Really Need? (Blog)', href: '#' },
      ],
    },
  ];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?query=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };

  return (
    <div>
      <div className="text-end p-2 small bg-black text-white text-center pe-4">
        contact@globalgtstech.com
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
        <div className="container-fluid px-4">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/gts-logo-1.png"
              alt="FyberOptix Logo"
              width={150}
              height={150}
              className="img-fluid"
              priority
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-lg-4" style={{ fontSize: '18px' }}>
              {navItems.map((item, i) => (
                <li key={i} className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu border-0 shadow-sm">
                    {item.dropdown?.map((d, j) =>
                      d.submenu ? (
                        <li key={j} className="dropdown-submenu">
                          <a
                            href="#"
                            className="dropdown-item dropdown-toggle"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {d.label}
                          </a>
                          <ul className="dropdown-menu border-0 shadow">
                            {d.submenu.map((sub, k) => (
                              <li key={k}>
                                <a className="dropdown-item" href={sub.href}>
                                  {sub.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li key={j}>
                          <a className="dropdown-item" href={d.href}>
                            {d.label}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </li>
              ))}
            </ul>

            {/* Right Side: Search + Cart */}
            <div className="d-flex align-items-center gap-3">
              <form className="d-flex" onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  className="form-control me-2"
                  placeholder="Search products"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{ maxWidth: '200px' }}
                />
                <button type="submit" className="btn btn-outline-dark">Search</button>
              </form>

              <Link href="/add-to-cart" passHref>
                <div className="text-dark position-relative" style={{ cursor: 'pointer' }}>
                  <BsBag />
                  {cartCount > 0 && (
                    <span
                      style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-10px',
                        background: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        padding: '2px 6px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        minWidth: '20px',
                        textAlign: 'center',
                      }}
                    >
                      {cartCount > 10 ? '10+' : cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
