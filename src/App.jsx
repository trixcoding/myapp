import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  // دریافت لیست کاربران از بک‌اند
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/users');
      setUsers(response.data);
    } catch (err) {
      setError('خطا در دریافت کاربران');
    }
  };

  // ارسال فرم برای اضافه کردن کاربر جدید
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setError('نام کاربری و رمز عبور لازم است');
      return;
    }
    try {
      await axios.post('http://202.133.88.146:5000/api/users', form);
      setForm({ username: '', password: '' });
      setError('');
      fetchUsers();
    } catch (err) {
      setError('خطا در ثبت کاربر');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ثبت نام کاربر</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          style={{ marginRight: 10 }}
        />
        <button type="submit">افزودن</button>
      </form>

      <h2>لیست کاربران</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username} - {user.password}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
