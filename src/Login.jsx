import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // برای ریدایرکت

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // برای هدایت به صفحه پروفایل

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://202.133.88.146:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // ذخیره اطلاعات در localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);

        setMessage('ورود موفق ✅');

        // چند میلی‌ثانیه صبر کن، بعد برو به پروفایل
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      } else {
        setMessage(data.message || 'ورود ناموفق ❌');
      }
    } catch (err) {
      setMessage('خطا در اتصال به سرور ❌');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">ورود به حساب کاربری</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded text-center transition-all duration-300 ${
            message.includes('موفق') ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
          }`}
        >
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="ایمیل"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="پسورد"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          ورود
        </button>
      </form>
    </div>
  );
}
