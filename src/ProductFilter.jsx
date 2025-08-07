import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function ProductFilter() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://202.133.88.146:3001/api/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8  text-right">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
        دسته‌بندی محصولات
      </h2>

     <div className="flex justify-center mb-12 px-4">
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="w-full max-w-sm appearance-none rounded-xl px-5 py-3 text-gray-800 text-base md:text-lg font-medium 
               bg-gradient-to-r from-white via-gray-50 to-gray-100 border border-gray-300 
               shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 
               focus:border-transparent transition duration-300 ease-in-out 
               hover:shadow-xl cursor-pointer font-vazir"
  >
    <option value="all">🛍️ همه محصولات</option>
    <option value="shoes">👟 کفش</option>
    <option value="tshirts">👕 تیشرت</option>
    <option value="pants">👖 شلوار</option>
    <option value="glasses">🕶️ عینک</option>
    <option value="hats">🧢 کلاه</option>
  </select>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">
            محصولی در این دسته‌بندی موجود نیست.
          </p>
        ) : (
          filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image || 'https://via.placeholder.com/300x200?text=No+Image'}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-right">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{product.name}</h3>
                <p className="mt-2 text-gray-700 line-clamp-2 text-right">{product.description?.substring(0, 60)}...</p>
                <p className="mt-4 text-blue-600 font-bold">{product.price.toLocaleString()} تومان</p>
                 <Link to={`/product/${product.id}`}>

            <button className="w-full text-center mt-auto bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-4">
            ادامه - خرید
          </button>
                 </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
