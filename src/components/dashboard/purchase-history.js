import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function PurchaseHistory(props) {
  return (
    <Fragment>
      <h1 className="display-4">
        Your Monthly Purchase ({props.History.length})
      </h1>
      {props.History.length == 0 ? (
        <div>
          <p className="lead">
            Suspendisse tortor orci, commodo ut metus id, tristique dignissim
            mauris. Phasellus mattis.
          </p>
          <p className="">
            <Link to="/menu" className="btn btn-danger">
              Order Now
            </Link>
          </p>

          <img
            alt="placeholde"
            className=" shadow p-3 mb-5  shadow-sm"
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            width="100%"
          />
        </div>
      ) : (
        <Fragment>
          {props.History.map((history) => (
            <div className="history-item">
              <div
                className="history-image-wrapper"
                style={{ position: "relative" }}
              >
                {history.name}
                <img
                  alt="placeholde"
                  style={{ position: "absolute" }}
                  className="p-2 border"
                  src={history.image}
                  width="40%"
                />
              </div>
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
}

export default PurchaseHistory;
