import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // برای نمایش وضعیت

  useEffect(() => {
    fetch('http://202.133.88.146:3001/api/users')
      .then(res => {
        if (!res.ok) throw new Error('خطا در دریافت کاربران');
        return res.json();
      })
      .then(data => {
        alert("✅ کاربران دریافتی:", data); // لاگ برای بررسی
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        alert('❌ خطا:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>لیست کاربران</h1>
      {loading ? (
        <p>در حال بارگذاری...</p>
      ) : users.length === 0 ? (
        <p>هیچ کاربری وجود ندارد</p>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              آیدی: {user.id} - یوزرنیم: {user.username}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
