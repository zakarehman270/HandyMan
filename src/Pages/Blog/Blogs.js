import React from "react";
import { Button, Container } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {} from "../../../node_modules/video-react/dist/video-react.css";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Blogs = () => {
	return (
		<div className="backgroundColor-grey">
			<Header />
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-3">
					<p className="PrimaryColor HeadingOurServices">Public</p>
					<p className="HeadingOurServices">Blog</p>
				</div>
				<hr />
				<div>
					<div className="HyperLinks">
						<Link
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="text-decoration-none ColorHyperLinks"
							to="/what-does-carpenters-do"
						>
							<h4 className="mt-3 mb-0">
								What does Carpenters do? – Home Fix Repairs{" "}
							</h4>
						</Link>
					</div>
					<p>
						Let’s talk about what does carpenters do? Well they are the folks
						that construct, erect, install, and repair wooden and non-wooden
						structures and fittings.
					</p>
					<div>
						<Link
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="text-decoration-none text-black"
							to="/what-does-carpenters-do"
						>
							<Button className="BookServiceButtons mt-3 BackGroundColor">
								Read More
								<FaAngleRight />
							</Button>
						</Link>
					</div>
				</div>
				<div>
					<div className="HyperLinks">
						<Link
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="text-decoration-none ColorHyperLinks"
							to="/low-cost-handyman-serivces"
						>
							<h4 className="mt-3 mb-0">
								Low Cost Handyman Services – Home Fix Repairs
							</h4>
						</Link>
					</div>
					<p>
						Are you looking for low cost handyman services? If so Home Fix
						Repairs is currently stealing the show in terms of quality repair
						and maintenance services.
					</p>
					<Link
						onClick={() => {
							window.scrollTo(0, 0);
						}}
						className="text-decoration-none text-black"
						to="/low-cost-handyman-serivces"
					>
						<Button className="BookServiceButtons mt-3 BackGroundColor">
							Read More
							<FaAngleRight />
						</Button>
					</Link>
				</div>
			</Container>
			<Footer />
		</div>
	);
};
export default Blogs;
