import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import AppProvider from './context/context';
import Navbar from './components/Navbar';
import Home from './pages/Overview';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Pots from './pages/Pots';
import RecurringBills from './pages/RecurringBills';



function App() {


  return (
    <AppProvider>
      <div className=''>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/budgets' element={<Budgets />} />
          <Route path='/pots' element={<Pots />} />
          <Route path='/recurringbills' element={<RecurringBills />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
      </div>
    </AppProvider>
  )
}

export default App;

/*

import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppProvider from './context/context';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Checkout from './pages/Checkout';
import Footer from './components/Footer';
import Loading from './components/Loading';
import ProductDetail from './components/productDetail/ProductDetails';
import ScrollTop from './components/ScrollTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <AppProvider>
      <Navbar />
      {isLoading ? (
        <Loading /> 
      ) : ( 
        <>
          <ScrollTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/earphones' element={<Earphones />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path="/product/:productSlug" element={<ProductDetail />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes> 
        </> 
      )}
      <Footer /> 
    </AppProvider>
  );
}

export default App;


*/