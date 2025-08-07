import React, { useEffect, useState } from 'react';

export default function MyOrders() {
  const [orders, setOrders] = useState([]);
  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://202.133.88.146:3001/api/orders/user/${userEmail}`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('خطا در گرفتن سفارش‌ها:', err));
  }, [userEmail]);

  if (!userEmail) {
    return <div className="p-4">لطفاً ابتدا وارد شوید.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">سفارش‌های من</h2>

      {orders.length === 0 ? (
        <p>هیچ سفارشی ثبت نشده است.</p>
      ) : (
        orders.map(order => (
          <div key={order.id} className="border p-4 mb-4 rounded shadow">
            <p><strong>شماره سفارش:</strong> {order.id}</p>
            <p>
  <strong>تاریخ ثبت سفارش:</strong>{' '}
  {new Date(order.createdAt).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })}{' '}
  ساعت{' '}
  {new Date(order.createdAt).toLocaleTimeString('fa-IR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })}
</p> <p><strong>مبلغ:</strong> {order.totalPrice} تومان</p>
            <p><strong>اقلام:</strong></p>
            <ul className="list-disc mr-5 mt-2">
              {JSON.parse(order.items).map((item, idx) => (
                <li key={idx}>
                  {item.name} - {item.quantity} عدد
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}
