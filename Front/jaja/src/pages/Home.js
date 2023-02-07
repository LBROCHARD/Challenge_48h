import Card from "../components/Card"
import product from "../pages/product"
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  let navigate = useNavigate();

  const [produits, setProduits] = useState([]);

  const getProduct = () => {
    axios.get(`http://localhost:5002/api/v1/produits`)
    .then(res => {
      const produits = res.data;
      setProduits(produits);
      console.log(produits)
    })
  }

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <h1>Home</h1>
      
      <div className="cardsDiv">
        {produits.map((produit)=> (
          <Card key={produit._id} id={produit._id} src={produit.image}  title={produit.title} description={produit.description} price={produit.price} />
        ))}
      </div>
    </>
  )
};
  
export default Home;