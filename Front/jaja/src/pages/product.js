import "../styles/product.css";
import image from "../pictures/titus.png";
const Product = () => {
    return (
      <body>
      <div className="div1">


        <h1 className="Id">Dog</h1>

        <img className="chien" src={image}/>

        <p className="explain">Le chien est un mammifère de la famille des canidés. C'est la première espèce animale à avoir été domestiquée par l'homme dans le but de la chasse.

        La taille et le poids des chiens varie énormément d'une race à l'autre. Par exemple, le chihuahua peut peser environ 1 kg pour 16 cm tandis qu'un dogue allemand peut peser 90 kg pour 72 cm.</p>
        <p className="seller">DOGG SELLER: <b>JEAN PATRIQUE</b></p>

        <p>Price: <b>52.36$</b></p>
      </div>


      </body>
    )
};
  
export default Product
;