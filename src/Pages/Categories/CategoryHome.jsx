// import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";

function CategoriesHome() {
  const [category, setCategory] = useState([]);
  const api_url = "https://fakestoreapi.com/products";
  let [products, setProduct] = useState([]);
  console.log(products)
  const getCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  };
  const getProduct = () => {
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  };

  const categry = "https://fakestoreapi.com/products/category";
  const getCategry = (catName) => {
    console.log(catName);
    fetch(`${categry}/${catName}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    getCategories();
    getProduct();
  }, []);

  return (
    <>
      <h1>Categories Home Page</h1>

      <div className="categories-btns">
        <button
          className="btn btn-primary mb-4 mx-3"
          onClick={() => {
            getProduct();
          }}
        >
          All
        </button>
        {category.map((cat) => {
          return (
            <button
              key={cat}
              className="btn btn-primary mb-4 mx-3"
              onClick={() => {
                getCategry(cat);
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div className="row">
        {products.map((prod) => {
          return (
            <div className="col-3" key={prod.id}>
              <Product
                product={prod}
                showButton={true}
                setData={category}
              />
            </div>
          );
        })}
      </div>

      {/* {electronics.map((catgElec) => (
        <>
          <div className="row" >
          <div className="col-3">
            <div className="card" key={Math.random() * 10}>
              <img
                src={catgElec.image}
                className="card-img-top"
                alt="Error 404"
              />
              <div className="card-body">
                <h5 className="card-title">
                {catgElec.title}
                </h5>
                <p className="card-text">
                {catgElec.description}
                </p>
                <h6>{catgElec.price}</h6>
                <a className="btn btn-primary" href="/product/1">
                {catgElec.category}
                </a>
              </div>
            </div>
          </div>
          </div>
        </>
      ))} */}
    </>
  );
}

export default CategoriesHome;
