import { Outlet, useNavigate } from "react-router-dom";
import Card from "../components/Card"
import "../styles/Profile.css"
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {

  const JWT = localStorage.getItem("token");
  let navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${JWT}`,
    }
  };
  const verifyToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  };

  const [user, setUser] = useState({});

  const getUser = () => {
    axios.get(`http://localhost:5002/api/v1/users/me`, config).then((res) => {
      const user = res.data;
      setUser(user)
      console.log(user);
    });
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  function UserProfile(props) {
    return (
      <div>
        <p>basic user</p>
      </div>
    );
  }

  function SellerProfile(props) {
    return (
      <div>
        <p>seller user</p>
      </div>
    );
  }

  function AdminProfile(props) {
    return (
      <div>
        <p>admin user</p>
      </div>
    );
  }

  const Profile = (props) => {
    getUser()
    if (verifyToken()) {
      if(user.role == "admin"){
        return <AdminProfile/>;
      } else if (user.role == "commercant"){
        return <SellerProfile/>;
      } else {
        return <UserProfile/>;
      }
    }
    return () => logout;
  }

  return (
    <>
      <Profile/>
    </>
  )
};
  
export default Profile;