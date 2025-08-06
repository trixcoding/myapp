import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Random from './Random';
import ProductList from './ProductList';
import Footer from './Footer';
import ProductDetails from "./ProductDetails";
import ProductFilter from "./ProductFilter";
function App() {
  return (
    <BrowserRouter>
          <div className="min-h-screen flex flex-col justify-between">
          <main className="flex-grow">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/random" element={<Random />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/productfilter" element={<ProductFilter />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
       </main>
        <Footer />
      </div>
    </BrowserRouter>
       
      
 
  );
}

export default App;
