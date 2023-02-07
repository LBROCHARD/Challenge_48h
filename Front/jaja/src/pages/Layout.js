import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
    return (
      <>
        <h1>LAYOUT</h1>
        <Link to="/basic">basic</Link>
        <Link to="/home">home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>

        <Outlet />
      </>
    )
  };
  
export default Layout;