import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/index.tsx';
import { GlobalStyle } from './global-style.ts';
import Cart from './pages/Cart/index.tsx';
import Home from './pages/Home/index.tsx';
import SuccessfulPurchase from './pages/SuccessfulPurchase/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/shopping-cart' element={<Cart />}/> */}
        {/* <Route path='/purchase' element={<SuccessfulPurchase />}/> */}
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
)
