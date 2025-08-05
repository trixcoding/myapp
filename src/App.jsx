import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: '', password: '' });

  const fetchUsers = async () => {
    const res = await fetch('http://202.133.88.146:3001/api/users');
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.password) return;

    const res = await fetch('http://202.133.88.146:3001/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ username: '', password: '' });
      fetchUsers();
    } else {
      alert('خطا در ثبت کاربر');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', fontFamily: 'Tahoma, sans-serif' }}>
      <h2>ثبت کاربر جدید</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="نام کاربری"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          type="password"
          placeholder="رمز عبور"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10 }}>افزودن</button>
      </form>

      <h3>لیست کاربران</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <b>نام کاربری:</b> {user.username} <br />
            <b>پسورد هش شده:</b> {user.password}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
