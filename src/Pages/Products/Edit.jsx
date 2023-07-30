import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function EditProduct(params) {
    const [product, setProduct] = useState([]);
    let [title , setTitle] = useState("")
    let [price , setPrice] = useState(0)
    const {productID} = useParams()
    const navigate = useNavigate()
  useEffect(() => {
    fetch(`https://crud-data-05zg.onrender.com/products/${productID}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
    
}, [productID]);

  const Confirm = (e) => {
   
        Swal.fire({
          title : `Are You Sure To Edit The Product?`,
          showCancelButton : true 
        }).then((data) => {
          if (data.isConfirmed === true) {
        sendNewData()
            
          }else{
            return false
          }
        })
  } 

const sendNewData = (data) => {
    if (title === "" && price === 0) {
        axios.put(`https://crud-data-05zg.onrender.com/products/${productID}` , {
        title : product.title,
        price : product.price
    }).then((data) => navigate("/products"))
    }else if(title === "" && price !== 0){
        axios.put(`https://crud-data-05zg.onrender.com/products/${productID}` , {
        title : product.title,
        price
    }).then((data) => navigate("/products"))

    }else if(title !== "" && price === 0){
        axios.put(`https://crud-data-05zg.onrender.com/products/${productID}` , {
            title,
            price : product.price
        }).then((data) => navigate("/products"))
    }else{
        axios.put(`https://crud-data-05zg.onrender.com/products/${productID}` , {
            title,
            price
        }).then((data) => navigate("/products"))
    } 
}

  return (
    <>
      <h1>Edit Product</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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

            defaultValue={product.title}
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
            defaultValue={product.price}

            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button onClick={() => {
        Confirm()}} type="submit" className="btn btn-primary">
          Edit Product
        </button>
      </form>
    </>
  );
}
export default EditProduct;

// import {useRef, useState} from 'react';

// export default function EditProduct() {
//   const [firstName, setFirstName] = useState('Default value');

//   const ref = useRef();
//   const reff = useRef();

//   const handleClick = () => {
//     console.log(ref.current.value);
//     console.log(reff.current.value);
//   };

//   return (
//     <div>
//       {/* 👇️ for a controlled input field */}
//       <input
//         value={firstName}
//         onChange={event => setFirstName(event.target.value)}
//       />

//       {/* 👇️ for a controlled input field */}
//       <input ref={reff} defaultValue="My default value" />
//       <input ref={ref} defaultValue="My default value" />
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// }    