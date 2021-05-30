import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function OrderManagement(props) {
  return (
    <div className="orderm-item">
      <Link
        to={{
          pathname: `/order-management/${props.item._id}`,

          state: { orderItem: props.item }
        }}
      >
        <div className="row">
          <div className="col">{props.item.orderNumber}</div>
          <div className="col">{props.item.user}</div>
        </div>
      </Link>
    </div>
  );
}
export default OrderManagement;
