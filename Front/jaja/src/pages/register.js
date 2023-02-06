import '../styles/register.css';

const Register = () => {
  return (
    <div className="register">
      <div class="container">

 
 <form action="/home" method="post">
 <h2>Register</h2>
 
 <label><b>Username</b></label>
 <input type="text" placeholder="Enter your username" name="username" required></input>

 <label><b>Password</b></label>
 <input type="password" placeholder="Enter your password" name="password" required></input>

 <label><b>Confirm Password</b></label>
 <input type="password" placeholder="Enter your password" name="password" required></input>

 <label for="pet-select"><b>Choose a role: </b></label>

<select name="select-role" class="select-role">
    <option value="Buyer">Buyer💲</option>
    <option value="Trader">Trader💰</option>
</select>

 <input type="submit" id='submit' value='REGISTER' ></input>
 
 </form>
 </div>
    </div>
  );
}

export default Register;
