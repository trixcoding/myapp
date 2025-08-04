import './index.css'
import './output.css'
import CustomBtn from './CustomBtn'
import StylishInput from './StylishInput'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
const handleClick = () => {
    return ;
  };
function Home() {
  return <h2>خانه</h2>;
}

function About() {
  return <h2>درباره ما</h2>;
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
    </BrowserRouter>
 
      
  )
}

export default App
