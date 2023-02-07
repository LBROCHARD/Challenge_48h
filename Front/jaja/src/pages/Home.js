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
      
      
      {produits.map((produit)=> (
      <div className="cardsDiv" key={produit._id}>
      
      <Card  src={produit.image}  title={produit.title} description={produit.description} price={produit.price} /></div>
     ))}

      
    </>
  )
};
  
export default Home;