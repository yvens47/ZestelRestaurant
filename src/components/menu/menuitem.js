import { Fragment, useState } from "react";

import { Link } from "react-router-dom";

export default function MenuItem(props) {
  return (
    <Fragment>
      <Link
        onClick={props.click}
        to={`/menu/${props.menu._id}`}
        className={` ${
          props.index
            ? "list-group-item list-group-item-action active"
            : "list-group-item list-group-item-action"
        } `}
        tabindex="-1"
        aria-disabled="true"
      >
        {props.menu.type}{" "}
        <i
          style={{
            color: "#384a38;",
            fontWeight: "bold;",
            fontSize: "20px;",
            float: "right;"
          }}
          className={props.menu.icon}
        ></i>
      </Link>
    </Fragment>
  );
}
