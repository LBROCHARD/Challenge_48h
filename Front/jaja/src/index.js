import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate} from "react-router-dom";
import React from 'react';
import './index.css';
import Login from './pages/login';
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Product from "./pages/product";
import Card from "./components/Card";
import reportWebVitals from './reportWebVitals';
import Register from './pages/register';
// const { id } = useParams()

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="home" element={<Home/>} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="product" element={<Product/>}>
            <Route path=":id" element={ <p> yes </p>}/>
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
