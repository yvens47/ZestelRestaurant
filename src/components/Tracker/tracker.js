import { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./tracker.css";
import io from "socket.io-client";

import { withRouter } from "react-router-dom";
import Map from "../common/maps";
import Navbar from "../common/navbar";

// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const socket = io("https://rbvjz.sse.codesandbox.io/");

//import { subscribeToTimer } from "../../utils/Socket.io";

class TrackerIndex extends Component {
  state = {
    message: ""
  };
  componentDidMount() {
    socket.on("connect", () => console.log("connected to server"));
    socket.emit("join", { room: "helllo" });
    socket.on("backend", (message) => this.setState({ message }));
  }

  componentWillUnmount = () => {
    socket.on("backend", (message) => this.setState({ message }));
  };
  componentDidUpdate = () => {
    socket.on("backend", (message) => this.setState({ message }));
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div
          className="container-fluid"
          style={{ height: "100vh", background: "white" }}
        >
          <div className="row p-5 justify-content-center">
            <div className="col-md-12 p-5">
              <div className="tracker-stage border p-5">
                {this.state.message === "1" && <h1>preparing</h1>}
                {this.state.message === "2" && (
                  <div className="">
                    <h1>Cooking</h1>
                    <p className="lead">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque pharetra dui ut dolor suscipit fringilla.
                      Nunc sed ullamcorper ex.
                    </p>
                    <i class="fas fa-burn text-danger fa-5x"></i>
                  </div>
                )}
                {this.state.message === "3" && (
                  <div className="">
                    <div id="mapid">
                      <MapContainer
                        center={[51.505, -0.09]}
                        zoom={13}
                        scrollWheelZoom={false}
                      >
                        <TileLayer
                          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                          <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                          </Popup>
                        </Marker>
                      </MapContainer>
                    </div>
                    <h1>Delivering</h1>
                    <i class="fas fa-car text-success fa-5x d-block"></i>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-3"></div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(TrackerIndex);
