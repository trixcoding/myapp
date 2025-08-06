import React, { useState } from 'react';

export default function Random() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors = [
    'text-red-500',
    'text-blue-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-pink-500',
    'text-indigo-500',
    'text-emerald-500',
  ];

  const fetchRandomString = async () => {
    try {
      setDisplayedText('');
      setIsTyping(true);
      const res = await fetch('http://202.133.88.146:3001/api/random');
      const data = await res.json();
      animateTyping(data.randomString);
      toast.success(" ساخته شد  ‌");
    } catch (error) {
      setDisplayedText('❌ خطا در دریافت رشته رندوم');
      setIsTyping(false);
    }
  };

  const animateTyping = (text) => {
    let index = 0;
    let result = '';
    const interval = setInterval(() => {
      result += text[index];
      setDisplayedText(result);
      index++;
      if (index === text.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 20);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(displayedText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error copying text:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">🎲 دریافت رشته رندوم با استایل</h2>

      <button
        onClick={fetchRandomString}
        disabled={isTyping}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
      >
        {isTyping ? 'در حال تایپ...' : 'دریافت رشته جدید'}
      </button>

      {displayedText && (
        <div
          className="mt-6 bg-gray-100 p-4 rounded break-words text-left font-mono text-sm cursor-pointer select-all border border-dashed border-gray-400 hover:shadow transition"
          onClick={handleCopy}
          title="برای کپی کلیک کنید"
        >
          {displayedText.split('').map((char, idx) => (
            <span key={idx} className={`${colors[Math.floor(Math.random() * colors.length)]}`}>
              {char}
            </span>
          ))}
        </div>
      )}

      {copied && (
        <p className="text-green-600 mt-2 font-semibold animate-pulse">✅ کپی شد!</p>
      )}
    </div>
  );
}
