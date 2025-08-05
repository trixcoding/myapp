import './index.css'
import './output.css'
import CustomBtn from './CustomBtn'
import StylishInput from './StylishInput'
import React from 'react'
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

const [message, setMessage] = useState('');

    useEffect(() => {
    fetch('http://202.133.88.146:5000/api')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error:', error));
  }, []);
  return <h2>{message}</h2>;
    
}

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
