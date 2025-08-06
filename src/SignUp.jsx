import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://202.133.88.146:3001/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      setMsg(data.message);
    } catch {
      setMsg("خطا در ارتباط با سرور");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-500 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-extrabold text-center text-gray-800">
          فرم ثبت‌نام
        </h2>

        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
            ایمیل
          </label>
          <input
            id="email"
            type="email"
            placeholder="example@mail.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
            رمز عبور
          </label>
          <input
            id="password"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-md text-white font-semibold transition ${
            loading ? "bg-pink-300 cursor-not-allowed" : "bg-pink-600 hover:bg-pink-700"
          }`}
        >
          {loading ? "در حال ثبت‌نام..." : "ثبت‌نام"}
        </button>

        {msg && (
          <p
            className={`text-center text-sm mt-2 ${
              msg.includes("موفق") ? "text-green-600" : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

        <p className="text-center text-gray-600 text-sm mt-4">
          حساب کاربری داری؟{" "}
          <Link to="/" className="text-pink-600 font-semibold hover:underline">
            وارد شو
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
