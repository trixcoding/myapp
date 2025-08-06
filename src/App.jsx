import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Random from './Random';
import Footer from './Footer';
import ProductDetails from "./ProductDetails";
import ProductFilter from "./ProductFilter";
import { CartProvider } from './CartContext';
import Cart from './Cart';
function App() {
  return (
    <BrowserRouter>
       <CartProvider>
    
          <div className="min-h-screen flex flex-col justify-between">
          <main className="flex-grow">
      <Routes>
        <Route path="/" element={<ProductFilter />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/random" element={<Random />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
           <Route path="/cart" element={<Cart />} />
        <Route path="/productfilter" element={<ProductFilter />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
       </main>
        <Footer />
      </div>
          </CartProvider>
    </BrowserRouter>
       
      
 
  );
}

export default App;
