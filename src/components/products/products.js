import { Fragment } from "react";
import Product from "./product";

export default function Products(props) {
  return (
    <div className="row">
      {props.products
        .filter((product) => product.menuid == props.type)
        .map((filteredProduct) => (
          <Product product={filteredProduct} hoo={"kjkhj"} />
        ))}
    </div>
  );
}
