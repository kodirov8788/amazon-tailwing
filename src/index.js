import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { AuthContextProvider } from "./context/AuthContext"
import Admin from './admin/Admin';
import { ProductContextProvider } from './context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='admin' element={<Admin />} />
            <Route path='*' element={<h1 className='bg-blue-300 text-[50px] text-white text-center'>404 Error</h1>} />
          </Routes>
        </BrowserRouter>
      </ProductContextProvider>
    </AuthContextProvider>


  </React.StrictMode>
);

