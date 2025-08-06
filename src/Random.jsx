import React, { useState } from 'react';

export default function RandomString() {
  const [randomString, setRandomString] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const fetchRandomString = async () => {
    try {
      setDisplayedText('');
      setIsTyping(true);
      const res = await fetch('http://202.133.88.146:3001/api/random');
      const data = await res.json();
      animateTyping(data.randomString);
    } catch (error) {
      setDisplayedText('❌ خطا در دریافت رشته رندوم');
      setIsTyping(false);
    }
  };

  const animateTyping = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20); // سرعت تایپ (هر 20ms یک کاراکتر)
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">دریافت رشته رندوم</h2>

      <button
        onClick={fetchRandomString}
        disabled={isTyping}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isTyping ? 'در حال تایپ...' : 'دریافت رشته جدید'}
      </button>

      {displayedText && (
        <div className="mt-6 bg-gray-100 p-4 rounded break-words text-left font-mono text-sm transition-all duration-700">
          {displayedText}
        </div>
      )}
    </div>
  );
}
