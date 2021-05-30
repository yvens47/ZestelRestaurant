import { Component, Fragment } from "react";
import Navbar from "../common/navbar";
// import Footer from "../common/footer";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import { subscribeToTimer } from "../../utils/Socket.io";
import { getCart } from "../../store/actions/cartActions";
import { loginUser, isLogin } from "../../store/actions/userActions";
import "./main.css";
import CardCustom from "./card-custom";
import firebase from "../../utils/firebase/firebase";
import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
//gsap.registerPlugin(ScrollTrigger);
console.log(firebase);

class IndexPage extends Component {
  state = {
    message: ""
  };
  componentDidMount = () => {
    // Add a new document with a generated id.
    firebase
      .firestore()
      .collection("cities")
      .add({
        name: "Tokyo",
        country: "Japan"
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

    this.props.getCart();
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        const u = {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          isAnonymous: user.isAnonymous,
          tenantId: user.tenantId,
          providerData: user.providerData,

          lastLoginAt: user.lastLoginAt,
          createdAt: user.createdAt
        };

        this.props.isLogin(u);

        // setUser(u);
      } else {
        // No user is signed in.
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="banner">
          <div className="overlay pr-5 pl-5 pt-3">
            <h3 className="pt-5 mt-5 display-1 font-weight-bold">
              Maecenas at neque eget
            </h3>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              sit amet nulla non ex interdum condimentum.
            </p>
            <p>
              <Link
                to={{
                  pathname: "/menu",

                  state: { food: "all" }
                }}
                className="btn btn-secondary  btn-large rounded-pill btn-extra-large d-block mt-5"
              >
                Start an Order
              </Link>
            </p>
          </div>
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item ">
                <img
                  src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item ">
                <img
                  src="https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="container-fluid ">
          <div className="row pt-5 pb-5 sub-section-1">
            <div className=" col-12 col-md-7  mb-0">
              <img
                className="border p-2"
                alt="left"
                width="100%"
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              />
            </div>
            <div className=" col-12 col-md-5 p-5">
              <div className="inner-title">
                <h2
                  className="display-4 home-title-2"
                  style={{
                    fontFamily: "'Libre Baskerville', sans-serif",
                    color: "#69777B"
                  }}
                >
                  Fusce suscipit ligula sed lacinia fermentum
                  {process.env.REACT_APP_FIREBASE_API}
                </h2>
                <p
                  className=" font-weight-bolder"
                  style={{
                    color: "#484960",
                    fontSize: "25px",
                    fontFamily: "Montserrat"
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus sit amet nulla non ex interdum condimentum. Aenean
                  fermentum, odio quis pellentesque rhoncus, erat arcu molestie
                  erat, non cursus justo nunc id dolor. Mauris et semper arcu.
                  Nam laoreet a nulla quis luctus. Ut eget faucibus sem. Proin
                  mattis, risus a tincidunt mollis
                </p>
                <p>
                  <Link
                    to="/Register"
                    className="btn btn-secondary btn-large rounded-pill"
                  >
                    Join Zestel
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div
            className="row pt-5 pb-5 border border-top"
            style={{ background: "#eaeaea" }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <h3
                    className="display-5 text-center border-right border-left pt-5"
                    style={{
                      fontFamily: "'Libre Baskerville', sans-serif",
                      color: "#69777B"
                    }}
                  >
                    Lorem ipsum dolor sit amet
                  </h3>
                  <p className=" text-center">
                    Lorem ipsum dolor sit amet Sed ornare vitae mauris id
                    mollis. In interdum sit amet lorem id pellentesque.
                  </p>
                </div>
              </div>
              <div className="row pt-5 pb-5 rounded ">
                <div className="col-md-4">
                  <CardCustom
                    link={"/menu"}
                    title="Cras suscipit tortor "
                    smallText=" Curabitur sed cursus lectus, in consectetur neque. In hac
                    habitasse platea dictumst. Cras suscipit tortor vitae
                    molestie posuere."
                    image="https://images.pexels.com/photos/5696478/pexels-photo-5696478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </div>
                <div className="col-md-4">
                  <CardCustom
                    link={"/menu/1"}
                    title="  Fusce suscipit ligula"
                    smallText=" Curabitur sed cursus lectus, in consectetur neque. In hac
                    habitasse platea dictumst. Cras suscipit tortor vitae
                    molestie posuere."
                    image="https://images.pexels.com/photos/7129429/pexels-photo-7129429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </div>
                <div className="col-md-4">
                  <CardCustom
                    link={"/menu/2"}
                    title="Curabitur sed cursus"
                    smallText=" Curabitur sed cursus lectus, in consectetur neque. In hac
                    habitasse platea dictumst. Cras suscipit tortor vitae
                    molestie posuere."
                    image="https://images.pexels.com/photos/5677479/pexels-photo-5677479.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  />
                </div>

                {/* <div className="col-md-7">dfdehh</div> */}
              </div>
            </div>
          </div>
          <div
            className="row pt-5 pb-5 justify-content-center "
            style={{
              background: "#5C6184"
            }}
          >
            <div className="container">
              <div
                className="row pt-5 pb-5 justify-content-center "
                style={{
                  background: "#5C6184"
                }}
              >
                <div className="col-md-4 p-5">
                  <i
                    style={{ color: "#8D909B", background: "white" }}
                    class="fas fa-cookie-bite fa-9x rounded-pill p-5"
                  ></i>
                </div>
                <div className="col-md-6 pt-3">
                  <h2
                    class="display-3 font-weight-bold action-title-2 pt-3"
                    style={{ color: "#AAADC4" }}
                  >
                    Fusce suscipit ligula sed lacinia fermentum
                  </h2>
                  <p style={{ color: "#ABAEC4" }}>
                    Today’s the perfect day for a free small Slushie. Actually,
                    it’s the only day for a free small Slushie so don’t miss
                    out!
                  </p>
                  <p>
                    <a
                      href="/menu"
                      class="btn btn-secondary  btn-large p-3   mt-3"
                    >
                      Start an Order
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps, {
  getCart,
  isLogin
})(withRouter(IndexPage));
