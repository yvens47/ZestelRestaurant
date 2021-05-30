import React, { Fragment, useState } from "react";

import Navbar from "../common/navbar";
import Footer from "../common/footer";
import "./cart.css";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { Link } from "react-router-dom";

function CartItem(props) {
  const [qty, setQty] = useState(props.item.quantity);
  return (
    <Fragment>
      <div className="d-flex justify-content-between align-items-center flex-fill">
        <div className="cat-item-image p-3   ">
          <img
            width="100%"
            src={props.item.image.default}
            alt={props.item.name}
          />
        </div>
        <div className="cat-item-name flex-fill ">
          <p className="font-weight-bold ">{props.item.name}</p>
          <p className="small">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="remove-item">
            <Link
              to="#"
              className="btn btn-link p-0"
              onClick={(e) => props.removeItem(e, props.item)}
            >
              remove
            </Link>
          </div>
        </div>
      </div>
      <div className="cat-item-price-action d-flex flex-column align-items-center  ">
        <div className="cat-item-price p-3">
          <p className="font-weight-bold text-info ">${props.item.price}</p>
        </div>
        <div
          className=" cat-item-price-edit d-flex flex-row align-items-center p-3
         "
        >
          <button
            onClick={(e) => props.updateQty(e, props.item)}
            className="btn btn-outline-secondary rounded-0 "
            style={{ width: "34px" }}
          >
            <span className="" id="inputGroup-sizing-sm">
              +
            </span>
          </button>

          <div style={{ position: "relative" }}>
            <input
              readOnly
              style={{ maxWidth: "40px", minWidth: "30px" }}
              type="text"
              className="form-control rounded-0 p-2"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              value={props.item.quantity}
            />
          </div>

          <button
            className="btn btn-outline-secondary rounded-0"
            style={{ width: "34px" }}
            onClick={(e) => props.updateQtyDown(e, props.item)}
          >
            <span class="">- </span>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default CartItem;
