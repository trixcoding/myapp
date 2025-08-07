import React, { useEffect, useState } from 'react';

const AdminDashBoard = () => {
  const [stats, setStats] = useState({ ordersCount: 0, totalSales: 0, usersCount: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://202.133.88.146:3001/api/admin/stats', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setStats(data);
        setLoading(false);
      })
      .catch(err => {
        alert('خطا در دریافت اطلاعات آمار');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>در حال بارگذاری...</p>;

  return (
    <div>
      <h2>داشبورد مدیریت</h2>
      <p>تعداد سفارش‌ها: {stats.ordersCount}</p>
      <p>مجموع فروش: {stats.totalSales.toLocaleString('fa-IR')} تومان</p>
      <p>تعداد کاربران: {stats.usersCount}</p>
    </div>
  );
};

export default AdminDashBoard;
