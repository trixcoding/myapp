import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom'; // برای ریدایرکت بعد از سفارش
const submitOrder = async () => {
  try {
    const response = await fetch('http://202.133.88.146:3001/api/orders/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems, totalPrice }),
    });

    const data = await response.json();
    if (response.ok) {
      alert('سفارش ثبت شد. شماره سفارش: ' + data.orderId);
    } else {
      alert('خطا: ' + data.error);
    }
  } catch (err) {
    console.error('خطای ارسال سفارش:', err);
  }
};
export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="w-full md:w-1/3 p-4 border-t md:border-t-0 md:border-l border-gray-300">
      <h2 className="text-xl font-bold mb-4">سبد خرید</h2>
      {cartItems.length === 0 ? (
        <p>سبد خرید خالی است.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="mb-4 border-b pb-2">
              <h3 className="font-semibold">{item.name}</h3>
              <p>قیمت: {item.price} تومان</p>
              <div className="flex items-center gap-2 mt-1">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                  className="px-2 py-1 bg-gray-300 rounded disabled:opacity-50"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-2 text-red-600 hover:underline"
              >
                حذف
              </button>
            </div>
          ))}
          <div className="mt-6 font-bold text-lg">مجموع: {totalPrice} تومان</div>
          <button
  onClick={submitOrder}
  className="mt-6 bg-green-600 text-white rounded py-2 px-4 hover:bg-green-700"
>
  ثبت سفارش
</button>
        </>
      )}
    </div>
  );
}
