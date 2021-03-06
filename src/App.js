import './app.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/util/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { useState, useEffect } from 'react';
import Products from './components/util/ProductDetails';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  function incrementQty(e) {
    setProducts(updateItem(e.target.id, 'inc'));
  }

  function decrementQty(e) {
    setProducts(updateItem(e.target.id));
  }

  function updateItem(id, type = 'dec') {
    return products.map((item) => {
      if (item.id === id) {
        if (type === 'inc') {
          return { ...item, qty: item.qty + 1 };
        } else {
          if (item.qty > 0) {
            return { ...item, qty: item.qty - 1 };
          }
        }
      }
      return item;
    });
  }

  useEffect(() => {
    setProducts(Products.map((item) => item));
  }, []);

  useEffect(() => {
    const newCart = products.filter((product) => {
      if (product.qty > 0) {
        return { name: product.name, price: product.price, qty: product.qty };
      }
    });

    setCart(newCart);
  }, [products]);

  useEffect(() => {
    let newTotal = 0;
    cart.forEach((item) => {
      newTotal += item.qty * item.price;
    });
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className='App'>
      <HashRouter basename='/'>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/Shop'
            element={
              <Shop
                products={products}
                incrementQty={incrementQty}
                decrementQty={decrementQty}
              />
            }
          />
          <Route path='/Cart' element={<Cart cart={cart} total={total} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
