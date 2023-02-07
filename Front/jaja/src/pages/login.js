import '../styles/login.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {

  const [mail, setMail] = useState("");
  console.log("mail : " + mail);
  const [pwd, setPwd] = useState("");
  console.log("pass : " + pwd);
  const navigate = useNavigate();
  const handleLogin = () => {
    const data = {
        email: mail,
        password: pwd,
        
    }     
    axios.post(`http://localhost:5002/api/v1/users/login`, data)
    .then((res) => {
        alert("Connection Successfull");
        navigate("/home");
    })
    .catch((err) => {
        alert("Connection Failed");
    });
};
  return (
    <div className="login">
      <div className="container">

 
 <div className="form1">
 <h2>Log In</h2>
 
 <label><b>Email</b></label>
 <input type="text" onChange={(e) => setMail(e.target.value)} placeholder="Enter your email" name="email" required></input>

 <label><b>Password</b></label>
 <input type="password" onChange={(e) => setPwd(e.target.value)}placeholder="Enter your password" name="password" required></input>

 <button onClick={handleLogin}>LOGIN</button>
 
 </div>
 </div>
    </div>
  );
}

export default Login;
