import React, { useState } from "react";
import { Button, Container, Dropdown, Form, Row } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import {
	AboutUsData,
	RequestCallBack,
	ServicesArray,
	WhyUsData,
} from "../Data";
import {} from "../../node_modules/video-react/dist/video-react.css";
import DubaiWater from "../assets/RequestCallBack.jpg";

export const RequestACallBack = () => {
	const [validated, setValidated] = useState(false);
	const [ServiceInputField, setServiceInputField] = useState("service");
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
					<Form
						className="w-50"
						noValidate
						validated={validated}
						onSubmit={handleSubmit}
					>
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
							<Dropdown className="mb-3 w-100">
								<Dropdown.Toggle
									id="dropdown-basic"
									className="outerWrapperDropDownRequestACallBack"
								>
									{ServiceInputField}
								</Dropdown.Toggle>
								<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu">
									{ServicesArray.map((item, index) => {
										return (
											<Dropdown.Item
												href={`#/action-${index}`}
												onClick={() => {
													setServiceInputField(item.name);
												}}
											>
												{item.name}
											</Dropdown.Item>
										);
									})}
								</Dropdown.Menu>
							</Dropdown>

							<Form.Group controlId="validationCustom03">
								<Form.Control as="textarea" placeholder="Message" required />
								<Form.Control.Feedback type="invalid">
									Please provide a valid city.
								</Form.Control.Feedback>
							</Form.Group>
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
					<div className="w-50">
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
