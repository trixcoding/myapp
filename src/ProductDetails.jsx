import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
 const { addToCart } = useContext(CartContext);
export default function ProductDetails() {
  const { id } = useParams(); // گرفتن id از URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://202.133.88.146:3001/api/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">در حال بارگذاری...</p>;

  if (!product) return <p className="text-center mt-10">محصولی یافت نشد</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <img src={product.image} alt={product.name} className="w-full max-h-96 object-contain mb-6" />
      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-xl font-semibold text-green-600 mb-2">{product.price} تومان</p>
        <button
              onClick={() => addToCart(product)}
              className="mt-3 bg-blue-600 text-white rounded py-2 hover:bg-blue-700"
            >
              افزودن به سبد خرید
            </button>
    </div>
  );
}
