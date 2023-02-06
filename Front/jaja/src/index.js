import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './index.css';
<<<<<<< HEAD
=======
import Login from './pages/login';
>>>>>>> db6f6424041ff6bef07f68b3ac1e3ccbce78f54c
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Card from "./components/Card";
import reportWebVitals from './reportWebVitals';
import Register from './pages/register';

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
<<<<<<< HEAD
          <Route path="home" element={null} />
          {/* <Route path="app" element={<App/>} /> */}
=======
          <Route path="home" element={<Home/>} />
          <Route path="login" element={<Login/>} />
>>>>>>> db6f6424041ff6bef07f68b3ac1e3ccbce78f54c
          <Route path="*" element={<NoPage />} />
          <Route path="register" element={<Register/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
