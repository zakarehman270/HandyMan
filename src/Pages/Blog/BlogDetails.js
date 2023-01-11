import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {} from "../../../node_modules/video-react/dist/video-react.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BlogService } from "../../SeoData/BlogData";
const BlogDetails = () => {
	const [Data, setData] = useState();
	const [Title, setTitle] = useState();
	const [Image, setImage] = useState({
		alt: "",
		title: "",
		src: "",
	});
	const location = useLocation();
	let Split = location.pathname.split("/");

	useEffect(() => {
		for (let i = 0; i < BlogService.length; i++) {
			if (BlogService[i].slug === Split[Split.length - 1]) {
				setData(BlogService[i].data);
				setTitle(BlogService[i].title);
				setImage(BlogService[i].image);
				break;
			}
		}
	}, [Split[Split.length - 1]]);

	return (
		<div className="backgroundColor-grey">
			<Header />
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-3">
					{Title}
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
						to="/blog"
					>
						<p>Blog</p>
					</Link>
					<FaAngleRight className="Fs-17" />
					<p className="ColorGry">Uncategorized</p>
				</div>
				<hr />
				<div className="d-md-flex align-items-center Gap ColorGry">
					<div className="d-flex">
						<p>Posted by:</p>
						<p className="text-black">Zaka Rehman</p>
					</div>
					<p className="d-none d-md-block">|</p>
					<div className="d-flex">
						<p>Category:</p>
						<p className="text-black">Uncategorized</p>
					</div>
				</div>
				<img
					src={Image.src}
					alt={Image.alt}
					title={Image.title}
					className="blogImage mt-1 mb-3"
				/>
				{Data}
			</Container>
			<Footer />
		</div>
	);
};
export default BlogDetails;
