import React, { useEffect, useState } from 'react'
import "./output.css"
import "./index.css"
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // وقتی کامپوننت لود شد، لیست کاربران رو از سرور می‌گیریم
    fetch('http://202.133.88.146:3001/api/users')
      .then(res => {
        if (!res.ok) throw new Error('خطا در دریافت کاربران');
        return res.json();
      })
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا: {error}</div>;

  return (
    <div>


<div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
  <img class="w-full h-48 object-cover" src="https://picsum.photos/400/200" alt="تصویر کارت" />
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2">عنوان کارت</h2>
    <p class="text-gray-600 mb-4">
      این یک متن نمونه برای توضیحات کارت است. می‌توانید اینجا هر چیزی که دوست دارید بنویسید.
    </p>
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
      دکمه کلیک
    </button>
  </div>
</div>




      
      <h1>لیست کاربران</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} (ID: {user.id})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
