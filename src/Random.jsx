import React, { useState } from 'react';

export default function Random() {
  const [randomString, setRandomString] = useState('');

  const fetchRandomString = async () => {
    try {
      const res = await fetch('http://localhost:3001/api/random');
      const data = await res.json();
      setRandomString(data.randomString);
    } catch (error) {
      setRandomString('❌ خطا در دریافت رشته رندوم');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">دریافت رشته رندوم</h2>
      <button
        onClick={fetchRandomString}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        دریافت رشته جدید
      </button>

      {randomString && (
        <div className="mt-6 bg-gray-100 p-4 rounded break-words text-left font-mono text-sm">
          {randomString}
        </div>
      )}
    </div>
  );
}
