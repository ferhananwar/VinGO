import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import Account from './components/pages/Account';
import Register from './components/pages/Register';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/Browse' element={<Browse/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path='/Register' element={<Register/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
