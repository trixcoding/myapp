import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '' });

  // دریافت کاربران از سرور
  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  // ارسال فرم برای ساخت کاربر
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', form);
    setForm({ username: '', password: '' });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>ثبت‌نام کاربر</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="نام کاربری"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          placeholder="رمز عبور"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">افزودن</button>
      </form>

      <h3>لیست کاربران:</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
