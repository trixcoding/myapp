import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ⬇ تابع ثبت سفارش داخل کامپوننت
  const submitOrder = async () => {
  const userEmail = localStorage.getItem('email');

  // اگه لاگین نکرده بود
  if (!userEmail) {
    alert('لطفاً ابتدا وارد حساب کاربری خود شوید.');
    return;
  }

  try {
    const response = await fetch('http://202.133.88.146:3001/api/orders/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems,
        totalPrice,
        email: userEmail,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      alert('✅ سفارش با موفقیت ثبت شد!');
    } else {
      alert(`❌ خطا در ثبت سفارش: ${data.error || 'خطای ناشناخته'}`);
    }
  } catch (error) {
    console.error('خطا در ارسال سفارش:', error);
    alert('❌ خطا در ارتباط با سرور');
  }
};
const handlePayment = async () => {
  try {
    const response = await fetch('http://202.133.88.146:3001/api/payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalPrice, cartItems }),
    });

    const data = await response.json();
    if (data.url) {
      window.location.href = data.url; // رفتن به درگاه زرین‌پال
    } else {
      alert('خطا در دریافت لینک پرداخت');
    }
  } catch (err) {
    console.error('خطا در پرداخت:', err);
    alert('خطای سرور در پرداخت');
  }
};
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

          <button
  onClick={handlePayment}
  className="mt-3 bg-yellow-500 text-white rounded py-2 px-4 hover:bg-yellow-600"
>
  پرداخت آنلاین با زرین‌پال
</button>
        </>
      )}
    </div>
  );
}
