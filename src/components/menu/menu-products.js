import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import Products from "../products/products";
import Product from "../products/product";

export default function MenuProducts(props) {
  const [isMenuId, setIsMenuId] = useState(menuId === undefined);
  let { menuId } = useParams();

  return (
    <div className="row">
      {props.all === "0" &&
        props.products.map((filteredProduct) => (
          <Product product={filteredProduct} click={props.click} />
        ))}
      {"0" === menuId &&
        props.products.map((filteredProduct) => (
          <Product product={filteredProduct} click={props.click} />
        ))}

      {props.products
        .filter((product) => product.menuid == menuId)
        .map((filteredProduct) => (
          <Product product={filteredProduct} click={props.click} />
        ))}
    </div>
  );
}
