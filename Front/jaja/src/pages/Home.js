import Card from "../components/Card"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div className="cardsDiv">
        <Card src="logo512.png" title="produit" id="product/1"/>
        <Card src="logo512.png" title="produit 2" id="product/2"/>
        <Card src="logo512.png" title="produit 3" id="product/3"/>
      </div>
    </>
  )
};
  
export default Home;