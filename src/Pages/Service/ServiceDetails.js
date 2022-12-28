import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {} from "../../../node_modules/video-react/dist/video-react.css";
import { useLocation } from "react-router-dom";
import dubaifamily from "../../assets/dubaifamily.jpg";
import { DataService } from "../../Data";
const ServiceDetails = () => {
	const [Data, setData] = useState();
	const [Title, setTitle] = useState();
	const location = useLocation();
	let Split = location.pathname.split("/");

	useEffect(() => {
		for (let i = 0; i < DataService.length; i++) {
			if (DataService[i].slug === Split[Split.length - 1]) {
				setData(DataService[i].data);
				setTitle(DataService[i].title);
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
				<img
					src={dubaifamily}
					alt="CarpenterBlog"
					className="blogImage mt-2 mb-3"
				/>
				{Data}
			</Container>
			<Footer />
		</div>
	);
};
export default ServiceDetails;
