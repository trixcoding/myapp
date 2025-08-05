import React, { useEffect, useState } from 'react';

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
