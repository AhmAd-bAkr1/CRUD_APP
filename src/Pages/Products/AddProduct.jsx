import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const navigate = useNavigate()
  const postData = (e) => {
    e.preventDefault();
axios({
    method : "POST",
    url : "https://crud-data-05zg.onrender.com/products",
    data : {
        title, 
        price
    }
}).then((data) => {
 console.log(data)
 navigate("/products")   
})
};
  return (
    <>
      <h1>Add Product</h1>

      <form onSubmit={postData}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="productTitle"
            placeholder="Product Title"
            aria-describedby="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="Product Price"
            aria-describedby="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary" >
          Add Product
        </button>
      </form>
    </>
  );
}
export default AddProduct;
