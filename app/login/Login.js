'use client';
import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            toast.success('Logged in successfully!');
            setTimeout(() => {
                router.push('/');
            }, 1000);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                toast.error('Invalid email or password.');
            } else {
                toast.error('Something went wrong. Please try again later.');
            }
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center min-vh-100"
            style={{
                background: 'linear-gradient(to right, #f8f9fa, #e9ecef)',
            }}
        >
            <ToastContainer position="top-right" autoClose={3000} />
            <div
                className="card shadow-lg border-0 p-4"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                }}
            >
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-danger">Welcome Back</h2>
                    <p className="text-muted small">Login to your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-danger w-100 py-2 fw-semibold">
                        Login
                    </button>
                </form>

                <div className="text-center mt-3">
                    <small className="text-muted">Don't have an account? <Link href="/register">Sign up</Link></small>
                </div>
            </div>
        </div>
    );
}
