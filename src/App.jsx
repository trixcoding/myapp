// src/App.jsx
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  // گرفتن محصولات از سرور Node
  useEffect(() => {
    fetch("http://202.133.88.146:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("❌ خطا در گرفتن داده‌ها:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        فروشگاه محصولات
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            {/* تصویر فرضی */}
            <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-400">تصویر محصول</span>
            </div>

            <h2 className="text-lg font-semibold text-gray-700 mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">قیمت: {product.price.toLocaleString()} تومان</p>

            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              افزودن به سبد خرید
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
