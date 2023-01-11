import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {} from "../../../node_modules/video-react/dist/video-react.css";
import dubaifamily from "../../assets/dubaifamily.jpg";
import { Link } from "react-router-dom";
const Service = () => {
	return (
		<div className="backgroundColor-grey">
			<Header />
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-3">
					<p className="PrimaryColor HeadingOurServices">Services</p>
				</div>
				<div className="d-flex justify-content-between ">
					<div className="w-50">
						<div className="HyperLinks">
							<Link
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								className="text-decoration-none ColorHyperLinks"
								to="/carpentor-service-dubai"
							>
								Carpenter Service Dubai – Home Fix Repairs
							</Link>
						</div>
						<div className="HyperLinks">
							<Link
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								className="text-decoration-none ColorHyperLinks"
								to="/electrical-maintenance-company-in-Dubai"
							>
								Electrical Maintenance Company in Dubai – Home Fix Repairs
							</Link>
						</div>
						<div className="HyperLinks">
							<Link
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								className="text-decoration-none ColorHyperLinks"
								to="/electrician-work-at-home"
							>
								Electrician Work at Home – Home Fix Repairs
							</Link>
						</div>
						<div className="HyperLinks">
							<Link
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								className="text-decoration-none ColorHyperLinks"
								to="/family-handyman-customer-service"
							>
								Family Handyman Customer Service – Home Fix Repairs
							</Link>
						</div>
						<div className="HyperLinks">
							<Link
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								className="text-decoration-none ColorHyperLinks"
								to="/emergency-plumbing-Dubai"
							>
								Emergency Plumbing Dubai – Home Fix Repairs
							</Link>
						</div>
					</div>
					<img
						src={dubaifamily}
						className="ImageHolderInService"
						alt="dubaifamily"
					/>
				</div>
			</Container>
			<Footer />
		</div>
	);
};
export default Service;
