import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header/index.tsx';
import CartProvider from './contexts/CartItemsContext.tsx';
import MoviesProvider from './contexts/MoviesListContext.tsx';
import { GlobalStyle } from './global-style.ts';
import Cart from './pages/Cart/index.tsx';
import Home from './pages/Home/index.tsx';
import SuccessfulPurchase from './pages/SuccessfulPurchase/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MoviesProvider>
      <CartProvider>
        <GlobalStyle />

        <BrowserRouter>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shopping-cart' element={<Cart />} />
            <Route path='/purchase-completed' element={<SuccessfulPurchase />} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </MoviesProvider>
  </React.StrictMode>
)
