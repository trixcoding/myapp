import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://202.133.88.146:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('email', data.user.email);
        setMessage('ورود موفق ✅');
        setTimeout(() => {
          navigate('/profile');
        }, 1000);
      } else {
        setMessage(data.message || 'ورود ناموفق ❌');
      }
    } catch {
      setMessage('خطا در اتصال به سرور ❌');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-600 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">ورود به حساب کاربری</h2>

        {message && (
          <div
            className={`mb-4 p-3 rounded text-center ${
              message.includes('موفق') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
              ایمیل
            </label>
            <input
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold transition ${
              loading ? 'bg-indigo-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'در حال ورود...' : 'ورود'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          حساب کاربری ندارید؟{' '}
          <Link to="/signup" className="text-indigo-600 hover:underline font-semibold">
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
}
