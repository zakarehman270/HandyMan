import React from "react";
import { BsStarFill } from "react-icons/bs";
const FeedBackBox = ({ name, img, detail }) => {
  return (
    <div className="outerWrapperFeedBackBox pt-4 pb-4 ps-5 pe-5 bg-white">
      <div className="d-flex justify-content-center pb-4">
        <div className="outerWrapperFeedbackUserImage">
          <img src={img} alt="teamwork" />
        </div>
      </div>
      <p className="ParagraphFeedBackBox heightParagraphFeedBack">{detail}</p>
      <h5 className="text-center pt-3">{name}</h5>
      <div className="text-center">
        <span className="outerWrapperStars">
          <BsStarFill />
        </span>
        <span className="outerWrapperStars">
          <BsStarFill />
        </span>
        <span className="outerWrapperStars">
          <BsStarFill />
        </span>
        <span className="outerWrapperStars">
          <BsStarFill />
        </span>
      </div>
    </div>
  );
};

export default FeedBackBox;
