import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import GoogleMapTA from "../assets/GoogleMapTA.webp";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import contact from "../assets/ContactUs.jpg";
import FormContentUs from "./Form/FormComponent";
import Thank from "./Thank";
export const ContactUs = () => {
	const [RedirectToFinalPage, setRedirectToFinalPage] = useState(false);
	if (RedirectToFinalPage) {
		return <Thank />;
	} else {
		return (
			<div className="backgroundColor-grey">
				<Header />
				<img src={contact} alt="teamwork" className="bannersImages" />
				<Container className="pt-5 pb-5">
					<div className="d-flex justify-content-center align-items-center Gap pb-3">
						<p className="PrimaryColor HeadingOurServices">Contact</p>
						<p className="HeadingOurServices">Us</p>
					</div>
					<div>
						<img src={GoogleMapTA} alt="teamwork" style={{ width: "100%" }} />
					</div>
					<Row className="mt-4">
						<Col>
							<div className="d-flex align-items-center Gap mb-4">
								<AiOutlineHome className="iconsContactUS" />
								<div>
									<h5 className="mb-1">Office 204, Albraha area,</h5>
									<p className="ParagraphFeedBackBox">
										Jessco market building Dubai, UAE
									</p>
								</div>
							</div>
							<div className="d-flex align-items-center Gap mb-4">
								<FiPhone className="iconsContactUS" />
								<div>
									<h5 className="mb-1">+971558504862</h5>
								</div>
							</div>
							<div className="d-flex align-items-center Gap mb-4">
								<ImWhatsapp className="iconsContactUS" />
								<div>
									<h5 className="mb-1">+971558504862</h5>
								</div>
							</div>
							<div className="d-flex align-items-center Gap mb-4">
								<MdOutlineMailOutline className="iconsContactUS" />
								<div>
									<h5 className="mb-1">Babalqarya4@gmail.com</h5>
								</div>
							</div>
						</Col>
						<Col>
							<FormContentUs
								display={false}
								setRedirectToFinalPage={setRedirectToFinalPage}
								submitFormFrom={"Contact Us"}
							/>
						</Col>
					</Row>
				</Container>
				<Footer />
			</div>
		);
	}
};
