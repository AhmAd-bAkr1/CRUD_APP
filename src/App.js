import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Home from "./Pages/Products/Home";
import Products from "./Pages/Products/products";
import AddProduct from "./Pages/Products/AddProduct";
import View from "./Pages/Products/View";
import EditProduct from "./Pages/Products/Edit";
import CategoriesHome from "./Pages/Categories/CategoryHome";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="row m-0">
        <div className="col-2 sidebar">
          <SideBar />
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Outlet />}>
              <Route path="" element={<Products />} />
              <Route path="add" element={<AddProduct />} />
              <Route path=":productID" element={<View />} />
              <Route path="product/:productID" element={<EditProduct />} />
            </Route>
              <Route path="categories" element={<CategoriesHome />} />
          
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
