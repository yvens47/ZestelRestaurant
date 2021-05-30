import { Fragment } from "react";

import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

export default function Product(props) {
  return (
    <Fragment>
      <div className="col-12 col-sm-12  col-md-4">
        <div
          className="productitem-wrap rounded m-2 p-1 border"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
          <Link
            to={{
              pathname: `/food/${props.product.name}/`,
              state: { food: props.product }
            }}
            className="productitem-wrap-a font-weight-bold"
          >
            <div className="product-image">
              {props.product ? (
                <img
                  src={props.product.image.default}
                  alt={props.product.name}
                  width="100%"
                />
              ) : (
                <Skeleton variant="rect" width={210} height={118} />
              )}
            </div>
            <div className="product-description d-flex flex-column">
              <h3 className="">{props.product.name}</h3>
              <span className="block text-center">${props.product.price}</span>
            </div>
          </Link>
          <div className="product-order">
            <button
              className="btn btn-outline-secondary rounded btn-sm"
              onClick={() => props.click(props.product)}
            >
              Order <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
