import Card from "../components/Card"
import React,{ useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  
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
      <div key={produit._id}>
      
      <Card  src={produit.image}  title={produit.title} description={produit.description} price={produit.price} /></div>
     ))}
     
     
      
    </>
  )
};
  
export default Home;