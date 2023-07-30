import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View(props) {
  const {productID} = useParams()
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://crud-data-05zg.onrender.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productID]);
  return (
    <>
      <div className="card">
        
              
              <h1 className="card-text">ID : {product.id} </h1>
              <h1 className="card-text">Title : {product.title} </h1>
              <h1 className="card-text">Price : {product.price} </h1>
      </div>
    </>
  );
}
export default View;
