import './index.css'
import './output.css'
import CustomBtn from './CustomBtn'
import StylishInput from './StylishInput'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import ProductCard from './ProductCard'
const handleClick = () => {
    return ;
  };
function Home() {
  return <h2>خانه</h2>;
}

function About() {
    fetch('http://202.133.88.146:5000/api')
  .then(res => res.json())
  .then(data => let x = data);
  return <h2>{x}</h2>;
    
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
