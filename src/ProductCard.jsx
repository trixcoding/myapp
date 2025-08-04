// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      {/* تصویر محصول */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src="https://images.unsplash.com/photo-1600185365483-26d7c6c8c2a0"
          alt="Product"
        />
        {/* برچسب "جدید" */}
        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full uppercase font-semibold">
          جدید
        </span>
      </div>

      {/* جزئیات محصول */}
      <div className="p-6 space-y-4">
        {/* نام محصول */}
        <h3 className="text-xl font-semibold text-gray-800">
          کفش نایک ایرمکس
        </h3>

        {/* قیمت و تخفیف */}
        <div className="flex items-center gap-3">
          <span className="text-lg font-bold text-black">
            ۲٬۵۰۰٬۰۰۰ تومان
          </span>
          <span className="text-sm line-through text-gray-500">
            ۳٬۰۰۰٬۰۰۰
          </span>
          <span className="text-xs text-green-600 font-semibold">
            ۱۷٪ تخفیف
          </span>
        </div>

        {/* دکمه افزودن */}
        <button className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors duration-200">
          افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
