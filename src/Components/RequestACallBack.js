import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { RequestCallBack } from "../Data";
import {} from "../../node_modules/video-react/dist/video-react.css";
import DubaiWater from "../assets/RequestCallBack.jpg";
import FormContentUs from "./Form/FormComponent";
import Thank from "./Thank";
export const RequestACallBack = () => {
	const [RedirectToFinalPage, setRedirectToFinalPage] = useState(false);
	if (RedirectToFinalPage) {
		return <Thank />;
	} else {
		return (
			<div className="backgroundColor-grey">
				<Header />
				<img src={DubaiWater} alt="teamwork" className="bannersImages" />
				<Container className="pt-5 pb-5">
					<div className="d-flex justify-content-center align-items-center Gap pb-5">
						<p className="PrimaryColor HeadingOurServices">Request</p>
						<p className="HeadingOurServices">CallBack</p>
					</div>
					<div
						className="OuterContainerRequestCallBack"
						style={{ gap: "35px" }}
					>
						<div className="OuterWrapperFormRequestCallBack">
							<FormContentUs
								display={false}
								setRedirectToFinalPage={setRedirectToFinalPage}
							/>
						</div>
						<div className="OuterWrapperContentRequestCallBack">
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
	}
};
export default RequestACallBack;
