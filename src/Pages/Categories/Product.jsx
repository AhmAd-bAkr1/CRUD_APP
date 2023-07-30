import { Link } from "react-router-dom";
import "./Products.css";
function Product(props) {
  let { product, showButton } = props;
  return (
    <>
      <div class="card">
        <img src={product.image} className="card-img-top" alt="Error 404" />
        <div class="card-body">
          <h5 className="card-title">{product.title}</h5>

          <p className="card-text">{product.description}</p>
          <h3>{product.price}</h3>

          {showButton && (
            <Link className="btn btn-primary" to={`product/${product.id}`}>
              Details
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Product;
