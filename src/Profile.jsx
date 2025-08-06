import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  useEffect(() => {
    // بررسی توکن
    const token = localStorage.getItem('token');
    const userEmail = localStorage.getItem('email');

    if (!token || !userEmail) {
      navigate('/'); // اگه توکن نباشه بره به صفحه لاگین
    } else {
      setEmail(userEmail); // ایمیل رو نمایش بده
    }
  }, []);

  // خروج از حساب
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    navigate('/');
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">پروفایل کاربر</h1>
      <p className="text-center text-gray-700 mb-6">ایمیل: <strong>{email}</strong></p>
      <button
        onClick={handleLogout}
        className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
      >
        خروج از حساب
      </button>
    </div>
  );
}
