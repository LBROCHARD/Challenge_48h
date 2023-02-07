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

  const [api, setApi] = useState([]);

  const getApi = () => {
    axios.get(`http://localhost:5002/api/v1/api/`, config).then((res) => {
      const api = res.data;
      setApi(api)
      console.log(api);
    });
  }

  const [orders, setOrders] = useState([]);
  const [cleanOrders, setCleanOrders] = useState([]);

  const getOrders = () => {
    axios.get(`http://localhost:5002/api/v1/orders/myorders`, config)
    .then((res) => {
      const ordersTemp = res.data;
      console.log(ordersTemp);
      const arr = [];
      setOrders(ordersTemp)
      // ordersTemp.forEach(order => {
      //   var tg = "http://localhost:5002/api/v1/users/" + order._id
      //   axios.get(tg)
      //   .then((res) => {
      //     // arr.push( {name: res.data.nom, id: res.data._id } )
      //     console.log(res.data.nom);
      //   });
      // });
      // setCleanOrders(arr)
    });
  }
  
  const [userName, setUserName] = useState([]);

  const getUserName = (id) => {
    console.log("http://localhost:5002/api/v1/users/" + id)
    axios.get("http://localhost:5002/api/v1/users/" + id).then((res) => {
      const userName = res.data.name;
      // setUserName(userName)
      console.log("yes" + userName);
      return userName;
    });
  }

  function logout() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  useEffect(()=> {
    getUser()
    getApi()
    getOrders()
    setCheckToken( localStorage.getItem("token"))
  }, [])

  const [newApi, setNewApi] = useState("");

  const handleNewApi = () => {
    const data = {
      url: newApi,
    }     
    axios.post(`http://localhost:5002/api/v1/api`, data, config)
    .then( () => {
      alert("Successful added api");
      navigate("/home");
    })
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
        <hr className="hr"/>
        <p className="apiTitle"> Orders : </p>
        {/* <ul>
          { orders.map((order)=> (
            <li key={order.id}> {order._id} </li>
          ))}
        </ul> */}
        <ul>
          { orders.map((order)=> (
            <li key={order.id}> {order._id} </li>
          ))}
        </ul>
      </div>
    )
  }

  const Seller = () => {
    return (
      <div className="profileDiv">
        <h1 className="userName">Shop : {user.user}</h1>
        <p className="userMail"> Email : {user.email} </p>
        <p className="userRole"> Role : {user.role} </p>
        <input value={title}type="text" className="profileInpt" onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
        <input value={description} type="text" className="profileInpt" onChange={(e) => setDescription(e.target.value)} placeholder="Description"/>
        <input value={price} type="text" className="profileInpt" onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
        <input value={image} type="text" className="profileInpt" onChange={(e) => setImage(e.target.value)} placeholder="Image"/>
        <button onClick={addProduct}  className="profileBtn"> add product </button>
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
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [image, setImage] = useState([]);
  const addProduct = () => {
    const data = {
      title: title,
      description: description,
      price: price,
      image: image,
    }
    axios.post(`http://localhost:5002/api/v1/produits`, data, config)
    .then( () => {
      alert("Successful added product");
      navigate("/profile")})}


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