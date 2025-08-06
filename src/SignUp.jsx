import { useState } from "react";
import { Link } from 'react-router-dom';
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://202.133.88.146:3001/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">فرم ثبت‌نام</h2>

        <input
          type="email"
          placeholder="ایمیل"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="رمز عبور"
          className="w-full border border-gray-300 rounded px-4 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          ثبت‌نام
        </button>

        {msg && <p className="text-center text-sm text-green-600 mt-2">{msg}</p>}
        <div className="text-center mt-4">
  <span>حساب کاربری داری؟ </span>
  <Link to="/" className="text-blue-600 hover:underline">
    وارد شو
  </Link>
</div>
      </form>
    </div>
  );
}

export default SignUp;
