import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://202.133.88.146:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-10 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center tracking-tight mb-12">
        فروشگاه لاکچری
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            {/* تصویر فرضی */}
            <div className="aspect-w-1 aspect-h-1 bg-gray-100">
              <img
                src={`https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png`}
                alt={product.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h2>
              <p className="text-gray-500 text-sm mb-3">
                قیمت: {product.price.toLocaleString()} تومان
              </p>
              <button className="mt-2 w-full bg-black text-white text-sm py-2 rounded hover:bg-gray-800 transition-all tracking-wider">
                افزودن به سبد خرید
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
