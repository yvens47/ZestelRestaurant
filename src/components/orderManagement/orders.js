import React, { Fragment } from "react";
import OrderManagement from "./order";

function OrdersManagement(props) {
  return (
    <Fragment>
      {props.orders.map((order) => (
        <div key={order._id} className="orderm-item">
          <OrderManagement key={order} item={order} />
        </div>
      ))}
    </Fragment>
  );
}
export default OrdersManagement;
