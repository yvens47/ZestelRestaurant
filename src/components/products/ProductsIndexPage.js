import { Component, Fragment } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import { Link, withRouter } from "react-router-dom";

//import { subscribeToTimer } from "../../utils/Socket.io";
import "./index.css";
import Products from "./products";

class ProductsIndexPage extends Component {
  state = {
    products: [
      {
        price: 10.99,
        name: "random1 Salad",
        menuid: "2",
        image: {
          default:
            "https://images.pexels.com/photos/6607386/pexels-photo-6607386.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        description:
          "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
      },
      {
        price: 10.99,
        name: "Turkey Bacon  Salad",
        menuid: "2",
        image: {
          default:
            "https://images.pexels.com/photos/2116090/pexels-photo-2116090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        description:
          "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
      },
      {
        price: 10.99,
        name: "Turkey  avocado  Salad",
        menuid: "2",
        image: {
          default:
            "https://images.pexels.com/photos/1143754/pexels-photo-1143754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },

        description:
          "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
      },
      {
        price: 15.99,
        name: "Black Beans Bacon avocado ",
        menuid: "1",
        image: {
          default:
            "https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        description:
          "Sed urna urna, semper sit amet velit condimentum, vulputate congue ligula. Vestibulum at consequat dolor, id viverra lacus. Aenean tincidunt laoreet mattis. Aliquam porttitor vestibulum faucibus. In risus leo, sollicitudin eget lacinia vitae, hendrerit ac tellus. Sed nec odio vestibulum ex lobortis euismod. Aliquam sit amet justo at leo fermentum molestie ut quis urna. Sed ut justo malesuada, accumsan orci sit amet, viverra enim. Suspendisse nec dignissim metus. Sed nec justo convallis, interdum augue sed, euismod massa. Sed mattis, massa sit amet tempor semper, massa lectus consectetur enim, ut ultricies mauris sem tincidunt lorem. Nam feugiat lectus dolor, eget feugiat enim gravida at. Quisque vulputate dolor quis gravida consequat"
      }
    ]
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid">
          <div className="row pt-5 pb-5" style={{ background: "white" }}>
            <div className=" col-12 col-md-8 p-5">
              {/* nproduct passed in props display all Products */}

              <Products
                products={this.state.products}
                type={
                  this.props.location.state && this.props.location.state.food
                }
              />
            </div>
          </div>

          <Footer />
        </div>
      </Fragment>
    );
  }
}
export default withRouter(ProductsIndexPage);
