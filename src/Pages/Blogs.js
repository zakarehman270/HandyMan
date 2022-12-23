import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {} from "../../node_modules/video-react/dist/video-react.css";
import CarpenterBlog from "../assets/CarpenterBlog.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Blogs = () => {
	return (
		<div className="backgroundColor-grey">
			<Header />
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-3">
					<p className="PrimaryColor HeadingOurServices">Public</p>
					<p className="HeadingOurServices">Blogs</p>
				</div>
				<div className="d-flex align-items-center gap-1">
					<Link
						onClick={() => {
							window.scrollTo(0, 0);
						}}
						className="text-decoration-none text-black"
						to="/"
					>
						<p>Home</p>
					</Link>
					<FaAngleRight className="Fs-17" />
					<Link
						onClick={() => {
							window.scrollTo(0, 0);
						}}
						className="text-decoration-none text-black"
						to="/what-does-carpenters-do"
					>
						<p>Blog</p>
					</Link>
					<FaAngleRight className="Fs-17" />
					<p className="ColorGry">Uncategorized</p>
				</div>
				<hr />
				<div className="d-flex align-items-center Gap ColorGry">
					<div className="d-flex align-items-center gap-1">
						<AiOutlineClockCircle className="PrimaryColor" />
						<p className="text-black">December 5, 2022</p>
					</div>
					<p>|</p>
					<div className="d-flex">
						<p>Posted by:</p>
						<p className="text-black">Zaka Rehman</p>
					</div>
					<p>|</p>
					<div className="d-flex">
						<p>Category:</p>
						<p className="text-black">Uncategorized</p>
					</div>
				</div>
				<img
					src={CarpenterBlog}
					alt="CarpenterBlog"
					className="blogImage mt-2"
				/>
				<h1 className="mt-3 mb-3">What does carpenters do and for whom? </h1>
				<p>
					Carpenters who work for large construction contractors or specialty
					contractors may simply do a few routine tasks, such as building wooden
					forms for pouring concrete and erecting scaffolding. Some carpenters
					construct tunnel bracing or brattices in subterranean passages and
					mines to regulate the flow of air to and from work locations. Others
					make concrete forms for use in tunnel, bridge, and sewage
					construction.
					<br />
					Outside of the construction industry, carpenters do a number of
					installation, <b>fixing and maintenance</b> tasks. In addition to
					replacing windows, ceiling tiles, and doors, they may also repair
					desks, cabinets, and other furniture. Depending on the employer,
					carpenters install partitions, doors, and windows, replace locks, and
					repair damaged furniture. In manufacturing companies, carpenters may
					aid in the relocation or installation of machinery. We hope that you
					have liked our post for what does carpenters do. Stay intact with Home
					Fix Repairs to get the best and most of <b>carpenter services</b> in
					Dubai
				</p>
			</Container>
			<Footer />
		</div>
	);
};
export default Blogs;
