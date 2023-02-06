import logo from '../logo.svg';
import { Outlet, Link } from "react-router-dom";
import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>

      <Outlet />
    </div>
  );
}

export default App;
