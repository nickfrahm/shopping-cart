import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/util/Nav';
import Home from './components/Home';
import Cart from './components/Cart';
import Shop from './components/Shop';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
