// import { Outlet, Link } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
    return (
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
    )
  };
  
  export default Layout;