import React, { useState } from "react";
import { Button, Container, Dropdown, Form, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { RequestCallBack, ServicesArray } from "../Data";
import {} from "../../node_modules/video-react/dist/video-react.css";
import DubaiWater from "../assets/RequestCallBack.jpg";
export const RequestACallBack = () => {
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
					<p className="PrimaryColor HeadingOurServices">Request</p>
					<p className="HeadingOurServices">CallBack</p>
				</div>
				<div className="d-flex " style={{ gap: "35px" }}>
					<div className="w-25"></div>
					<div className="w-75">
						{RequestCallBack.map((item, index) => {
							return (
								<div key={index}>
									<p className="ParagraphFeedBackBox">
										<span className="labelAboutUs">{item.heading}: </span>
										{item.detail}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
};
export default RequestACallBack;
