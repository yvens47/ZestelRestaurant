import React, { Fragment, useState, createRef, useEffect } from "react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import NutritionLabeL from "./nutrition-label";
import { addToCart } from "../../store/actions/cartActions";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
    fontWeight: "bold"
  }
}));

function ProductDetailPage(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const reviews = createRef();
  const [hideCommentBox, setHideCommentBox] = useState(false);
  useEffect(() => {}, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const {
    image,
    name,
    price,
    description,
    nutritions
  } = props.location.state.food;

  const addToCart = () => {
    props.addToCart(props.location.state.food);
  };
  return (
    <Fragment>
      <Navbar bag={"3"} />
      <div className="container-fluid">
        <div className="row pt-5 pb-5" style={{ background: "white" }}>
          <div className=" col-12 col-md-7 p-5">
            {/* nproduct passed in props display all Products */}

            <img src={image.default} width="100%" />
          </div>
          <div className=" col-12 col-md-4  pt-5">
            <h2 className="display-4 pt-5">
              {name} <span>{price}</span>
            </h2>

            <p className="lead">{description} </p>
            <div className="nutirtions border p-3 d-flex flex-row">
              <NutritionLabeL
                nutritions={nutritions}
                label="Calories"
                labelClass="calorie"
                data={nutritions.calories}
              />
              <NutritionLabeL
                nutritions={nutritions}
                label="Fats"
                labelClass="fat"
                data={nutritions.fats}
              />
              <NutritionLabeL
                nutritions={nutritions}
                label="Proteins"
                labelClass="protein"
                data={nutritions.protein}
              />
            </div>
            <div className=" ingredients   mt-3 d-flex flex-row">
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography className={classes.heading}>
                    Ingredinets
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus
                    feugiat lectus, varius pulvinar diam eros in elit.
                    Pellentesque convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="addOrder mt-3">
              <button
                className="btn btn-secondary btn-large p-3"
                onClick={addToCart}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5" style={{ background: "white" }}>
          <div className=" col-12 col-md-7 p-5">
            <h2 className="display-3">
              {" "}
              Reviews (45){" "}
              {!hideCommentBox && (
                <Fragment>
                  <i
                    class="fas fa-comments"
                    onClick={() => setHideCommentBox(true)}
                  ></i>
                </Fragment>
              )}
              {hideCommentBox && (
                <Fragment>
                  <i
                    class="fas fa-eye-slash"
                    onClick={() => setHideCommentBox(false)}
                  ></i>
                </Fragment>
              )}
            </h2>

            {hideCommentBox && (
              <div className="reviews" ref={reviews}>
                {[
                  {
                    name: "Jean Pierre",
                    review: "This is very tasteful",
                    posted: "04/30/20"
                  },
                  {
                    name: "Angela raymon",
                    review: "This is very tasteful",
                    posted: "04/30/20"
                  }
                ].map((review) => (
                  <div className="media border-bottom pt-3 ">
                    <Avatar alt={"Jean Pierre"} src="/" className="mr-3" />

                    <div className="media-body mb-3 ">
                      <h5 className="mt-0">{review.name}</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel
                      metus scelerisque ante sollicitudin.
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    foods: state.foods
  };
};

export default connect(mapStateToProps, { addToCart })(
  withRouter(ProductDetailPage)
);
