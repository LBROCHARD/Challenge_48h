import { Outlet, Link, useNavigate } from "react-router-dom";
import "../styles/Card.css";

const Card = (props) => {

  let navigate = useNavigate();

  function GoProduct(){
    navigate("/product")
  }

  return (
    <div className="Card" onClick={GoProduct}>
      <img src={props.src} />
      <h2>{props.title}</h2>
    </div>
  )
};


export default Card;
