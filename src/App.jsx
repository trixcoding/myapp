import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Random from './Random';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/random" element={<Random />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
       
      <ToastContainer 
        position="top-center" 
        autoClose={3000} 
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
 
  );
}

export default App;
