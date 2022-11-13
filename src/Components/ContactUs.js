import React, { useState } from "react";
import { Col, Container, Row, Form, Button, InputGroup } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import GoogleMapTA from "../assets/GoogleMapTA.webp";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineMailOutline } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import contact from "../assets/contact.jpg";
export const ContactUs = () => {
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}

		setValidated(true);
	};
	return (
		<div className="backgroundColor-grey">
			<Header />
			<img src={contact} alt="teamwork" style={{ width: "100%" }} />
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
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<Row className="mb-3">
								<Form.Group controlId="validationCustom03">
									<Form.Label>Suggestion & Complaints</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="We want to serve you better and are committed to continuously improving our client service standards. To do this, let us know what you think!"
										required
										style={{ height: "100px" }}
									/>
									<Form.Control.Feedback type="invalid">
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
							<Button
								className="BookServiceButtons BackGroundColor"
								type="submit"
							>
								Submit form
							</Button>
						</Form>
					</Col>
					<Col>
						<Form noValidate validated={validated} onSubmit={handleSubmit}>
							<Row className="mb-3">
								<Form.Group className="mb-3" controlId="validationCustom01">
									<Form.Control required type="text" placeholder="You Name" />
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>

								<div className="d-flex mb-3 Gap">
									<Form.Group className="w-50" controlId="validationCustom02">
										<Form.Control required type="text" placeholder="Phone" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group className="w-50" controlId="validationCustom02">
										<Form.Control required type="email" placeholder="Email" />
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
								</div>
								<Form.Group className="mb-3" controlId="validationCustom02">
									<Form.Control required type="text" placeholder="Location" />
									<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
								</Form.Group>
								<Form.Group controlId="validationCustom03">
									<Form.Control as="textarea" placeholder="Message" required />
									<Form.Control.Feedback type="invalid">
										Please provide a valid city.
									</Form.Control.Feedback>
								</Form.Group>
							</Row>
							<Button
								className="BookServiceButtons BackGroundColor"
								type="submit"
							>
								Submit form
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};
