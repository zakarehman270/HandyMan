import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { TermAndConditions } from "../Data";
import {} from "../../node_modules/video-react/dist/video-react.css";
import DubaiWater from "../assets/TermAndConditions.jpg";

export const TermAndCondition = () => {
	return (
		<div className="backgroundColor-grey">
			<Header />
			<img
				src={DubaiWater}
				alt="teamwork"
				style={{ width: "100%", height: "800px" }}
			/>
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-5">
					<p className="PrimaryColor HeadingOurServices">Term</p>
					<p className="HeadingOurServices">Conditions</p>
				</div>
				<div className="d-flex flex-wrap " style={{ gap: "35px" }}>
					{TermAndConditions.map((item, index) => {
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
export default TermAndCondition;
