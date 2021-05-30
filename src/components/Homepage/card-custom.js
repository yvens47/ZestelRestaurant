import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CardCustom(props) {
  return (
    <div className="Juicy p-4   mb-2">
      <h2 class="juicy-title" style={{ color: "#69777B" }}>
        {props.title}
      </h2>
      <img src={props.image} width="100%" />
      <p>
        <Link
          to={props.link}
          class="btn btn-secondary rounded-0  btn-large p-2   mt-3"
        >
          Start an Order
        </Link>
      </p>
      <p className="small">{props.smallText}</p>
    </div>
  );
}
