import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { AboutUsData, WhyUsData } from "../Data";
import HomeFixRepair from "../assets/Videos/HomeFixAboutUs.mp4";
import { Player } from "video-react";
import {} from "../../node_modules/video-react/dist/video-react.css";
import DubaiWater from "../assets/handyManService.jpg";
export const AboutUs = () => {
	return (
		<div className="backgroundColor-grey">
			<Header />
			<img src={DubaiWater} alt="teamwork" className="bannersImages" />
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
									<span className="labelAboutUs">{item.heading}: </span>
									{item.detail}
								</p>
							</div>
						);
					})}
				</div>
				<div className="mt-1 mb-1">
					<Player>
						<source src={HomeFixRepair} />
					</Player>
				</div>
				<div className="d-flex justify-content-center align-items-center Gap pb-5 mt-5">
					<p className="PrimaryColor HeadingOurServices">Why</p>
					<p className="HeadingOurServices">Us</p>
				</div>
				<div className="d-flex flex-wrap " style={{ gap: "35px" }}>
					{WhyUsData.map((item, index) => {
						return (
							<div className="outerWrapperParagraphAboutUs" key={index}>
								<p className="ParagraphFeedBackBox">
									<span className="labelAboutUs">{item.heading}: </span>
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
