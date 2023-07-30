import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
// import data from "../../db-api/db.json"
import "./products.css";
function Products() {
  const [product, setProduct] = useState([]);
  const Data = () => {
    fetch("https://crud-data-05zg.onrender.com/products")
    .then((res) => res.json())
    .then((data) => setProduct(data));
  };
  useEffect(() => {
    Data();
  }, []);

  const Delete = (e) => {
    Swal.fire({
      title : `Are You Sure To Delete ${e.title} ?`,
      showCancelButton : true 
    }).then((data) => {
      if (data.isConfirmed === true) {
        
        fetch(`https://crud-data-05zg.onrender.com/products/${e.id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => Data());
      }else{
        return false
      }
    })
  };
  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-4">
        Add New Product
      </Link>
      <table className="table table-striped mt-5 products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Price</th>
            <th>Opretions</th>
          </tr>
        </thead>
        <tbody>
          {product.map((prod) => {
            return (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.title}</td>
                {/* <td>{prod.description.slice(0, 70)}...</td> */}
                <td>{prod.price}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm mx-2"
                    onClick={() => Delete(prod)}
                  >
                    Delete
                  </button>
                  <Link
                    to={`/products/${prod.id}`}
                    className="btn btn-info btn-sm mx-2"
                  >
                    View
                  </Link>
                  <Link to={`/products/product/${prod.id}`} className="btn btn-primary btn-sm mx-2">Edit</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Products;
