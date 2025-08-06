import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Random from './Random';
import ProductList from './ProductList';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/random" element={<Random />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
       
      
 
  );
}

export default App;
