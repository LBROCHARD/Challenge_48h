import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './index.css';
import Login from './pages/login';
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
//import reportWebVitals from './reportWebVitals';
import Register from "./pages/register";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<p>yes</p>} />
          <Route path="login" element={<Login/>} />
          <Route path="*" element={<NoPage />} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
