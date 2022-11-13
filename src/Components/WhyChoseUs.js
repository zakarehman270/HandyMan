import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import personnelStaff from "../assets/Icons/personnelStaff.jpg";
import CustomerAvail from "../assets/Icons/CustomerAvail24by7.jpg";
import OneSpe from "../assets/Icons/OneSpe.png";
import CustomerTrust from "../assets/Icons/CustomerTrust.jpg";
function WhyChoseUs() {
	return (
		<div className="pt-4 pb-5">
			<div className="d-flex justify-content-center align-items-center Gap pb-5">
				<p className="PrimaryColor HeadingOurServices">Why</p>
				<p className="HeadingOurServices">Choose Us</p>
			</div>
			<Container>
				<Row>
					<Col
						sm={12}
						lg={4}
						className="d-flex flex-column justify-content-start me-4"
						style={{ gap: "112px" }}
					>
						<div className="d-flex justify-content-center align-items-center Gap">
							<div className="text-end">
								<p className="PrimaryColor FontSize30 FontWeight">
									Expert Group of Workers
								</p>
								<p className="FontSize14">
									Intrinsic and knowledgeable staff in <br /> their respective
									fields.
								</p>
							</div>
							<div>
								<img
									src={personnelStaff}
									alt="personnelStaff"
									style={{ width: "80px" }}
								/>
							</div>
						</div>

						<div className="d-flex justify-content-center align-items-center Gap">
							<div className="text-end">
								<p className="FontSize30 FontWeight">24/7 ASSISTANCE</p>
								<p className="FontSize14">
									Smooth Availability Spherical The Clock.
								</p>
							</div>
							<div>
								<img
									src={CustomerAvail}
									alt="personnelStaff"
									style={{ width: "80px" }}
								/>
							</div>
						</div>
					</Col>

					<Col className="d-none d-xl-flex justify-content-center">
						<div
							style={{ padding: "8px" }}
							className="CircleWhyChooseUs BackGroundColor WidthCircleTextHolder d-flex flex-column justify-content-center align-items-center"
						>
							<div
								style={{
									border: "1px solid",
									padding: "44px",
									height: "314px",
								}}
								className="CircleWhyChooseUs d-flex flex-column justify-content-center align-items-center"
							>
								<div className="d-flex flex-column justify-content-center align-items-center">
									<p className="text-white HeadingOurServices">Why</p>
									<p className="HeadingOurServices" style={{ width: "235px" }}>
										Choose Us?
									</p>
								</div>
							</div>
						</div>
					</Col>

					<Col
						className="d-flex flex-column justify-content-start me-4 mt-lg-0 mt-5"
						style={{ gap: "112px" }}
					>
						<div className="d-flex justify-content-center align-items-center Gap">
							<div>
								<img
									src={CustomerTrust}
									alt="personnelStaff"
									style={{ width: "80px" }}
								/>
							</div>
							<div className="text-end">
								<p className="FontSize30 FontWeight">RELIABLE CREW</p>
								<p className="FontSize14">
									Consumer Pleasant And Dependable Team Of Workers.
								</p>
							</div>
						</div>
						<div className="d-flex justify-content-center align-items-center Gap">
							<div>
								<img
									src={OneSpe}
									alt="personnelStaff"
									style={{ width: "80px" }}
								/>
							</div>
							<div className="text-end">
								<p className="FontSize30 PrimaryColor FontWeight">
									ONE Prevent Shop
								</p>
								<p className="FontSize14">
									All Sorts Of HomeRepairFix Services Are Available Beneath One
									Roof.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default WhyChoseUs;
