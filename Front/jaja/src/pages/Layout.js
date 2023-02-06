// import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
    return (
<<<<<<< HEAD
      <div class="header">
        <div class="title">
          <h1 >JAJA</h1>
        </div>
        <div class="buttonHeader">
          <form action="/Login">
          <button> Login </button>
          </form>

          <form action="/Register">
          <button> Register </button>
          </form>
        </div>
        <h1 class="email">Email</h1>
        <form class="a" action="/Profile">
        <button> Profile </button>
        </form>


      </div>
=======
      <>
        <h1>LAYOUT</h1>
        <Link to="/basic">basic</Link>
        <Link to="/home">home</Link>
        <Link to="/login">login</Link>
        <Link to="/register">register</Link>

        <Outlet />
      </>
>>>>>>> db6f6424041ff6bef07f68b3ac1e3ccbce78f54c
    )
  };
  
export default Layout;