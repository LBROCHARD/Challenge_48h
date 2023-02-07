import { Outlet, useNavigate } from "react-router-dom";
import Card from "../components/Card"
import "../styles/Profile.css"
import axios from "axios";
import { useEffect, useState } from "react";

const Profile = () => {

  const [checkToken, setCheckToken]=useState(false);
  const JWT = localStorage.getItem("token");
  let navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${JWT}`,
    }
  };

  const [user, setUser] = useState({});

  const getUser = () => {
    axios.get(`http://localhost:5002/api/v1/users/me`, config).then((res) => {
      const user = res.data;
      setUser(user)
      console.log(user);
    });
  }

  const [api, setApi] = useState({});

  const getApi = () => {
    axios.get(`http://localhost:5002/api/v1/api/`, config).then((res) => {
      const api = res.data;
      setApi(api)
      console.log(api);
    });
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(()=> {
    getUser()
    getApi()
    setCheckToken( localStorage.getItem("token"))
  }, [])

  const [newApi, setNewApi] = useState("");

  const handleNewApi = () => {
    const data = {
      url: newApi,
    }     
    axios.post(`http://localhost:5002/api/v1/api`, data, config)
    .catch((err) => {
      alert("Connection Failed");
    });
  };

  const Admin = () => {
    return (
      <div className="profileDiv">
        <h1 className="adminName">ADMIN USER : {user.user}</h1>
        <p className="userMail"> Email : {user.email} </p>
        <p className="userRole"> Role : {user.role} </p>
        <hr className="hr"/>
        <p className="apiTitle"> Linked API : </p>
        <ul>
          { api.map((ap)=> (
            <li key={ap._id}> {ap.url} </li>
          ))}
        </ul>
        <div className="btnDiv">
          <input value={newApi} type="text" className="profileInpt" onChange={(e) => setNewApi(e.target.value)} placeholder="API URL"/>
          <button className="profileBtn" onClick={handleNewApi} > add api </button>
        </div>
        <button className="profileBtn" onClick={handleNewApi} > add product </button>
      </div>
    )
  }

  const Seller = () => {
    return (
      <div className="profileDiv">
        <h1 className="userName">Shop : {user.user}</h1>
        <p className="userMail"> Email : {user.email} </p>
        <p className="userRole"> Role : {user.role} </p>
        <button className="profileBtn"> add product </button>
      </div>
    )
  }

  const User = () => {
    return (
      <div className="profileDiv">
        <h1 className="userName">{user.user}</h1>
        <p className="userMail"> Email : {user.email} </p>
        <p className="userRole"> Role : {user.role} </p>
      </div>
    )
  }

  return (
    <>
      {checkToken && user.role ==="admin" &&
        <Admin/>
      }
      {checkToken && user.role ==="commercant" &&
        <Seller/>
      }
      {checkToken && user.role ==="client" &&
        <User/>
      }
      {!checkToken || user.role ===!"admin" && user.role ===!"commercant" && user.role ===!"user" &&
        logout
      }
    </>
  )
};
  
export default Profile;