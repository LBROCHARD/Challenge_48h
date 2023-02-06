import '../styles/login.css';

const login = () => {
  return (
    <div className="login">
      <div class="container">

 
 <form action="/home" method="post">
 <h2>Log In</h2>
 
 <label><b>Username</b></label>
 <input type="text" placeholder="Enter your username" name="username" required></input>

 <label><b>Password</b></label>
 <input type="password" placeholder="Enter your password" name="password" required></input>

 <input type="submit" id='submit' value='LOGIN' ></input>
 
 </form>
 </div>
    </div>
  );
}

export default login;
