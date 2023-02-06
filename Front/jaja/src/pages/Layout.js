import { Outlet, useNavigate } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
  
  let navigate = useNavigate();
  
  return (
    <>
      <div class="header">
        <div class="buttonHeader">
          <button onClick={() => navigate("/login")}> Login </button>
          <button onClick={() => navigate("/register")}> Register </button>
        </div>
        <div class="title">
          <h1 onClick={() => navigate("/home")}>JAJA</h1>
        </div>
        <div class="profile">
          <h1 class="email">Email</h1>
          <button onClick={() => navigate("/profile")}> Profile </button>
        </div>
      </div>
      <Outlet/>
    </>
  )
};
  
export default Layout;