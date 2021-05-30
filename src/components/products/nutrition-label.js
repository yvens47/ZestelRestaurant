import { Fragment } from "react";
import Product from "./product";

export default function NutritionLabel(props) {
  return (
    <div className={`${props.labelClass} d-flex flex-column  flex-fill`}>
      <p>{props.label}</p>
      <p>
        <span className="badge ">{props.data}</span>
      </p>
    </div>
  );
}
