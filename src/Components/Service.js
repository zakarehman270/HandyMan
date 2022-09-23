import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
function Service(props) {
  return (
    <div className="outerWrapperServices">
      <Link
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        className="text-decoration-none text-black"
        to="/form"
        state={{ from: props.data }}
      >
        <div className="d-flex justify-content-center">
          <div className="OuterWrapperServicesImages">
            <img
              src={props.image}
              alt={props.image}
              style={{ width: "90px" }}
            />
          </div>
        </div>
        <p className="pt-2 PrimaryColor FontWeight ServiceHeading">
          {props.Heading}
        </p>
        <p className="ParagraphFeedBackBox">
          With the increase in weather temperatures everywhere, the last thing
          you want to deal with is air conditioner repair and maintenance to
          keep it running. Not everyone is...
        </p>
      </Link>
      <Button className="BookServiceButtons BackGroundColor mt-2">Read More</Button>
    </div>
  );
}

export default Service;
