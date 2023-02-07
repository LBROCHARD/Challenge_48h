import { Outlet, useNavigate } from "react-router-dom";
import "../styles/layout.css";
import { useState } from "react";
import axios from "axios";
const Layout = () => {
  const JWT = localStorage.getItem("token");
    const config = {
        headers: {
            Authorization: `Bearer ${JWT}`,
        }};
        const verifyToken = () => {
          const token = localStorage.getItem("token");
          if (token) {
              return true;
          }
          return false;
      };
  const [name, setName] = useState("");
  axios.get(`http://localhost:5002/api/v1/users/me`, config).then((res) => {
    const user = res.data.user;
    setName(user)});
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  function UserGreeting() {
    return (
      <>
    
      <div className="title">
      <img className="jajaImg" src={process.env.PUBLIC_URL + "/jaja.png"} onClick={() => navigate("/home")}/>
      <h1 onClick={() => navigate("/home")}>JAJA</h1>
      
    </div>
    <div className="profile">
        <h1 className="email">{name}</h1>
        <button onClick={() => navigate("/profile")}> Profile </button>
        <button onClick={logout}> Logout </button>
      </div></>
    );
  }
  function GuestGreeting() {
    return (
      <>
      <div className="title">
          <img className="jajaImg" src={process.env.PUBLIC_URL + "/jaja.png"} onClick={() => navigate("/home")}/>
          <h1 onClick={() => navigate("/home")}>JAJA</h1>
          
        </div>
        
      <div className="buttonHeader">
        
        <button onClick={() => navigate("/login")}> Login </button>
        <button onClick={() => navigate("/register")}> Register </button>
      </div>
      
        
      
      
        
      </>
    );

  }
  function Greeting(props) {
    
    if (verifyToken()) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
    
  return (
    <div className="mainBody">
      <div className="header">
        <Greeting/>
      </div>
      <div className="content">
        <Outlet/>
      </div>
      <div className="footer">
        <p>Java Jaguars™ JaJa® - aucuns droits reservés</p>
      </div>
    </div>
  )
};
  
export default Layout;