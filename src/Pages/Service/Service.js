import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {} from "../../../node_modules/video-react/dist/video-react.css";
import { FaAngleRight } from "react-icons/fa";
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
						<Link
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="text-decoration-none text-black"
							to="/carpentor-service-dubai"
						>
							<h4>Carpenter Service Dubai – Home Fix Repairs</h4>
						</Link>
						<p>
							Are you starting to get bored with how your house looks inside and
							out? If so consider top carpenter service Dubai as your preference
							in this spectrum.
						</p>
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
