import { Outlet, Link } from "react-router-dom";

const Layout = () => {
<<<<<<< HEAD
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
=======
  return (
    <>
      <h1>LAYOUT</h1>
      <Link to="/basic">basic</Link>
      <Link to="/home">home</Link>
      <Link to="/login">login</Link>
      <Outlet />
    </>
  )
};
>>>>>>> a1e47d2854a986d79cb25409805b8c3c3a3ecf73
  
export default Layout;