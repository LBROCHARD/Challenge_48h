import Card from "../components/Card"
import product from "../pages/product"
import { Outlet, useNavigate } from "react-router-dom";


const Home = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home</h1>
      <div className="cardsDiv">
      
        <Card src="logo512.png" title="produit 1" id="product/1"/>
        <Card src="logo512.png" title="produit 2" id="product/2"/>
        <Card src="logo512.png" title="produit 3" id="product/3"/>
      </div>
    </>
  )
};
  
export default Home;