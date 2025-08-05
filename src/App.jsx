// myapp/src/App.jsx

import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '' });

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://202.133.88.146:3001/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error('❌ خطا در گرفتن کاربران:', err);
    }
  };

  const handleSubmit = async (e) => {
    alert(form);
    e.preventDefault();
    if (!form.username || !form.password) return;
    try {
      const res = await fetch('http://202.133.88.146:3001/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      await res.json();
      setForm({ username: '', password: '' });
      fetchUsers(); // بروز رسانی لیست
    } catch (err) {
      console.error('❌ خطا در ثبت کاربر:', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>لیست کاربران</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">افزودن</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>🧑 {user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
