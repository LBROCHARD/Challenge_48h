import '../styles/register.css';
import { useEffect, useState } from 'react';
import { Form, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios';
const Register = () => {
  const [mail, setMail] = useState("");
  console.log("mail : " + mail);
  const [name, setName] = useState("");
  console.log("name :"+name);
  const [pwd, setPwd] = useState("");
  console.log(pwd);
  const [role, setRole] = useState("");
  console.log("role :" +role);
  const [terms, setTerms] = useState(false);
  console.log(terms);

  const navigate = useNavigate();

  const handleSubmit = () => {
      const data = {
          email: mail,
          nom: name,
          password: pwd,
          role: role,
          terms_and_conditions: terms,
          
      }     
      axios.post(`http://localhost:5002/api/v1/users/register`, data)
      .then((res) => {
          alert("Registration successful");
          navigate("/login");
      })
      .catch((err) => {
          alert("Registration failed");
      });
};
  return (
    <div className="register">
      <div className="container">

 
 <h2>Register</h2>
 <div className='form'>
 <label><b>Email</b></label>
 <input type="text" onChange={(e) => setMail(e.target.value)} placeholder="Enter your email" name="email" required></input>

 <label><b>Name</b></label>
 <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" name="name" required></input>

 <label><b>Password</b></label>
 <input type="password" onChange={(e) => setPwd(e.target.value)} placeholder="Enter your password" name="password" required></input>

 <label htmlFor="pet-select"><b>Choose a role: </b></label>

<select onChange={(e) => setRole(e.target.value)} name="select-role" className="select-role">
    <option value="">Choose here</option>
    <option value="client">Buyer💲</option>
    <option value="commercant">Trader💰</option>
</select>
<br></br>
<label htmlFor="terms">  Accepter les termes et conditions </label>
<input type="checkbox" id="terms" onChange={(e) => setTerms(e.target.checked)}/>

 <button  onClick={handleSubmit} id='submit'>REGISTER</button>
 </div>
 
 </div>
    </div>
  );

}
export default Register;
