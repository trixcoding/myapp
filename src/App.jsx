import './index.css'
import './output.css'
import CustomBtn from './CustomBtn'
import StylishInput from './StylishInput'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductCard from './ProductCard'
import React, { useState, useEffect } from 'react';
const handleClick = () => {
    return ;
  };
function Home() {
  return <h2>خانه</h2>;
}

function About() {

  // ایجاد state برای نگهداری متن
  const [message, setMessage] = useState('');

  // وقتی کامپوننت بارگذاری شد، درخواست به سرور بفرست
  useEffect(() => {
    // گرفتن داده از سرور
    fetch('http://202.133.88.146:5000/api/message')
      .then(response => response.json())  // تبدیل پاسخ به JSON
      .then(data => setMessage(data.message))  // قرار دادن پیام در state
      .catch(error => alert('خطا در دریافت پیام:', error));
  }, []); // فقط یک‌بار پس از بارگذاری اجرا می‌شود

  return (
    <div>
      <h2>پیامی از سرور:</h2>
      <p>{message}</p>
    </div>
  );
};
    

function Shop(){
return <StylishInput />;
}

function App() {
  return (
    


 <BrowserRouter>
      <nav>
        <Link to="/">خانه</Link> | <Link to="/about">درباره ما</Link>
          <Link to="/shop">shop</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
             <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
      </Routes>
     <ProductCard />
    </BrowserRouter>
 
      
  )
}

export default App
