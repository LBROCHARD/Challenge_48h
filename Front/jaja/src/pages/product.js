import "../styles/product.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
    
  const id = window.location.pathname.replace('/product/', '');
  const url = "http://localhost:5002/api/v1/produits/" + id;
  const urlSeller = "http://localhost:5002/api/v1/users/" + id;

  const JWT = localStorage.getItem("token");
  const config = {
      headers: {
          Authorization: `Bearer ${JWT}`,
      }};
  const navigate = useNavigate();
  const [produit, setProduit] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  
  
  const getProduct = () => {
      console.log(url)
      axios.get(url)
      .then(res => {
        const produit = res.data;
        setProduit(produit);
        console.log(produit)
        setSelectedProduct(produit._id)
      })
  }
  const handleBuy = () => {
    const data = {
        produit: selectedProduct,
    }     
    axios.post(`http://localhost:5002/api/v1/orders`, data,config)
    .then((res) => {
      
        alert("Successful purchase");
        
        navigate("/home");
    })
    .catch((err) => {
        alert("Purchase Failed");
    });
};

  useEffect(() => {
    getProduct();
  }, []);
  
  return (
      <>
        <div className="mainDiv">
          <div className="div1">
            <input className="hidden" type="text" readOnly={selectedProduct}></input>
            <h1 className="prodTitle">{produit.title}</h1>
            <img className="prodImg" src={produit.image}/>
          </div>
          <div className="div2">
            <p>description :</p>
            <p className="explain">{produit.description}</p>
            <p> vendu par :</p>
            <p className="seller"><b>{produit.username}</b></p>
            <p className="money">Price: <b>{produit.price}$</b></p>
            <button onClick={handleBuy} className="buy"> BUY ! </button>
          </div>
        </div>
      </>
    )
};
  
export default Product;