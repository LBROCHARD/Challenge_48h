import { Outlet } from "react-router-dom";
import "../styles/layout.css";

const Layout = () => {
    return (
      <div class="header">
        <div class="title">
          <h1 >JAJA</h1>
        </div>
        <div class="buttonHeader">
          <form action="/login" type="submit">
          <button class="button1" onClick="@"> Login </button>
          </form>

          <form action="/register">
          <button class="button1" type="submit"> Register </button>
          </form>
        </div>
        <h1 class="email">Email</h1>
        <form class="a" action="/profile">
        <button class="button1" type="submit"> Profile </button>
        </form>

        <Outlet />
      </div>
    )
  };
  
export default Layout;