import "../styles/product.css";
import axios from "axios";
import { useEffect, useState } from "react";


const Product = () => {
    
  const id = window.location.pathname.replace('/product/', '');
  const url = "http://localhost:5002/api/v1/produits/" + id;
  const urlSeller = "http://localhost:5002/api/v1/users/" + id;

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
        <div className="mainDiv">
          <div className="div1">
            <h1 className="prodTitle">{produit.title}</h1>
            <img className="prodImg" src={produit.image}/>
          </div>
          <div className="div2">
            <p>description :</p>
            <p className="explain">{produit.description}</p>
            <p> vendu par :</p>
            <p className="seller"><b>{produit.user}</b></p>
            <p className="money">Price: <b>{produit.price}$</b></p>
            <button className="buy"> BUY ! </button>
          </div>
        </div>
      </>
    )
};
  
export default Product;