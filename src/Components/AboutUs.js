import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import ReactPlayer from "react-player";
import { AboutUsData,WhyUsData } from "../Data";
export const AboutUs = () => {
  return (
    <div className="backgroundColor-grey">
      <Header />
      <Container className="pt-5 pb-5">
        <div className="d-flex justify-content-center align-items-center Gap pb-5">
          <p className="PrimaryColor HeadingOurServices">About</p>
          <p className="HeadingOurServices">Us</p>
        </div>
        <div className="d-flex flex-wrap " style={{ gap: "35px" }}>
          {AboutUsData.map((item, index) => {
            return (
              <div className="outerWrapperParagraphAboutUs" key={index}>
                <p className="ParagraphFeedBackBox">
                  <span className="labelAboutUs">{item.heading}</span>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
        <ReactPlayer
          width="100%"
          height="600px"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        />
        <div className="d-flex justify-content-center align-items-center Gap pb-5">
          <p className="PrimaryColor HeadingOurServices">Why</p>
          <p className="HeadingOurServices">Us</p>
        </div>
        <div className="d-flex flex-wrap " style={{ gap: "35px" }}>
          {WhyUsData.map((item, index) => {
            return (
              <div className="outerWrapperParagraphAboutUs" key={index}>
                <p className="ParagraphFeedBackBox">
                  <span className="labelAboutUs">{item.heading}</span>
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
};
