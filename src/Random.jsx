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

      const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://202.133.88.146:3001/api/products') // آدرس API شما
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری محصولات...</p>;


    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-48 object-cover rounded-md mb-4"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }} // اگر عکس نبود
          />
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 font-bold text-xl">{product.price.toLocaleString()} تومان</p>
          <button className="mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-4">
            خرید
          </button>
        </div>
      ))}
    </div>
    </div>
  );
}
