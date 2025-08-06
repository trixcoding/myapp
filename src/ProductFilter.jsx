import React, { useState, useEffect } from 'react';

export default function ProductFilter() {
  const [products, setProducts] = useState([]); // همه محصولات
  const [selectedCategory, setSelectedCategory] = useState('all'); // دسته انتخاب شده

  // بارگذاری محصولات از API یا سرور (مثلاً API ما)
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://202.133.88.146:3001/api/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  // فیلتر کردن محصولات بر اساس دسته انتخاب شده
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h2>دسته‌بندی محصولات</h2>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border rounded p-2 mb-4"
      >
        <option value="all">همه محصولات</option>
        <option value="shoes">کفش</option>
        <option value="tshirts">تیشرت</option>
        <option value="pants">شلوار</option>
        <option value="glasses">عینک</option>
        <option value="hats">کلاه</option>
      </select>

      <div className="grid grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <h3 className="font-bold mt-2">{product.name}</h3>
            <p>{product.price} تومان</p>
          </div>
        ))}
      </div>
    </div>
  );
}
