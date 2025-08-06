// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {new Date().getFullYear()} فروشگاه حرفه‌ای. تمام حقوق محفوظ است.</p>
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-400 transition">محصولات</Link>
          <Link to="/random" className="hover:text-gray-400 transition">ساخت پسورد</Link>
          <Link to="/login" className="hover:text-gray-400 transition">ورود</Link>
          <Link to={`/product/1'`}>محصول ۱</Link>
          <Link to="/signup" className="hover:text-gray-400 transition">ثبت‌نام</Link>
        </div>
      </div>
    </footer>
  );
}
