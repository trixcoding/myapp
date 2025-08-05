// App.jsx

import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // صدا زدن API بک‌اند
    fetch('http://202.133.88.146:3001/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
      })
      .catch(err => {
        console.error('❌ خطا در دریافت کاربران:', err);
      });
  }, []);

  return (
    <div>
      <h1>لیست کاربران</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            آیدی: {user.id} - یوزرنیم: {user.username}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
