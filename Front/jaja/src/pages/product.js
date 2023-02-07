import "../styles/product.css";
import axios from "axios";
import { useEffect, useState } from "react";


const Product = () => {
    
  const id = window.location.pathname.replace('/product/', '');
  const url = "http://localhost:5002/api/v1/produits/" + id;

  const [produit, setProduit] = useState([]);
  
  const getProduct = () => {
      console.log(url)
      axios.get(url)
      .then(res => {
        const produit = res.data;
        setProduit(produit);
        console.log(produit)
      })
  }

  useEffect(() => {
    getProduct();
  }, []);
  
  return (
      <>
        <div className="div1">

          <h1 className="Id">{produit.title}</h1>
          <img className="prodImg" src={produit.image}/>
          <p className="explain">{produit.description}</p>
          <p className="seller"><b>{produit.user}</b></p>
          <p>Price: <b>{produit.price}$</b></p>
        </div>
      </>
    )
};
  
export default Product;