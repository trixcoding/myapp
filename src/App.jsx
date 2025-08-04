import { Routes, Route, Link } from 'react-router-dom'
import './index.css'
import './output.css'
import CustomBtn from './CustomBtn'
import StylishInput from './StylishInput'
import Login from './Login'
const handleClick = () => {
    return ;
  };
function App() {
  return (
     <div>
    <CustomBtn onClick={handleClick} variant="primary">Set</CustomBtn>
      <CustomBtn onClick={handleClick} variant="danger">Delete</CustomBtn>
      <CustomBtn onClick={handleClick} variant="outline">Cancel</CustomBtn>
      <StylishInput />
         <StylishInput />

         
    
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
      </nav>

   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

           />
      </Routes>
 
     </div>
  )
}

export default App
