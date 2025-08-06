
import React, { useEffect, useState } from 'react';

export default function ProductList() {
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

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="border rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
         <Link to={`/product/${product.id}`}>
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
  );
}
