import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to={"products"}>Get All Products</Link>
        </li>
        <li>
          <Link to={"categories"}>Get All Cateogries</Link>
        </li>
      </ul>
    </>
  );
}

export default SideBar;
