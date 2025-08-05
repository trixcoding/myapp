import { useEffect, useState } from 'react';

const API_BASE = 'http://202.133.88.146:5000/api/notes';
function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null); // برای ویرایش

  // گرفتن لیست یادداشت‌ها
  const fetchNotes = async () => {
    const res = await fetch(API_BASE);
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // افزودن یا ویرایش یادداشت
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) return;

    const payload = { title, content };

    if (editingId) {
      await fetch(`${API_BASE}/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } else {
      await fetch(API_BASE, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    }

    setTitle('');
    setContent('');
    setEditingId(null);
    fetchNotes();
  };

  // حذف یادداشت
  const handleDelete = async (id) => {
    await fetch(`${API_BASE}/${id}`, { method: 'DELETE' });
    fetchNotes();
  };

  // پرکردن فرم برای ویرایش
  const handleEdit = (note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note._id);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h2>📝 دفترچه یادداشت</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="عنوان"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ width: '100%', marginBottom: 10 }}
        />
        <textarea
          placeholder="محتوا"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows="3"
          style={{ width: '100%', marginBottom: 10 }}
        ></textarea>
        <button type="submit">{editingId ? 'ویرایش' : 'افزودن'}</button>
      </form>

      <hr />

      {notes.map(note => (
        <div key={note._id} style={{ border: '1px solid #ccc', padding: 10, marginBottom: 10 }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>{new Date(note.createdAt).toLocaleString()}</small>
          <br />
          <button onClick={() => handleEdit(note)}>✏️ ویرایش</button>
          <button onClick={() => handleDelete(note._id)} style={{ marginLeft: 10 }}>🗑️ حذف</button>
        </div>
      ))}
    </div>
  );
}

export default App;
