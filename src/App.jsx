import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Branches from './components/Branches/Branches';
import Footer from './components/Footer/Footer';
import MenuCategory from './components/MenuCategory/MenuCategory';
import SearchBox from './pages/SearchBox/SearchBox'; 
import LoginPage from './pages/LoginPage';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import './assets/fonts/fonts.css';

function App() {

  const [cart, setCart] = useState([]);
  
 
  const [user, setUser] = useState(null);


  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);


  const addToCart = (food) => {
    setCart(prev => [...prev, { ...food, id: Date.now() }]);
  };
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <Header 
        onSearchClick={() => navigate('/search')} 
        cartCount={cart.length}
        user={user}
        onLogout={logout}
      />
      
      <main className='main'>
        <Routes>

          <Route path="/" element={
            <>
              <Slider />
              <MenuCategory addToCart={addToCart} />
              <About />
              <Branches />
            </>
          } />

          <Route path="/search" element={
            <SearchBox 
              searchResults={searchResults}
              setSearchResults={setSearchResults}
              addToCart={addToCart}
            />
          } />

          
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />


          <Route path="/login" element={<LoginPage onLogin={login} />} />


          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
