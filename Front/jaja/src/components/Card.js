import { Outlet, Link, useNavigate } from "react-router-dom";
import "../styles/Card.css";

const Card = (props) => {

  let navigate = useNavigate();

  function GoHome(){
    navigate("/" + props.id)
  }

  return (
    <div className="Card" onClick={GoHome}>
      <img className="CardImg" src={props.src} />
      <h2 className="CardTitle">{props.title}</h2>
      <p>{props.price}</p>

    </div>
  )
};


export default Card;
