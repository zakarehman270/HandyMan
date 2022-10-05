import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
const Details = (props) => {
	const [DetailName, setDetailName] = useState("");
	const location = useLocation();
	let Split = location.pathname.split("/");
	const { state } = useLocation();
	useEffect(() => {
		setDetailName(Split[Split.length - 1]);
	}, []);
	console.log("kala", state);
	return (
		<div className="backgroundColor-grey">
			<Header />
			<img
				src={state.details.bannerImage}
				alt="teamwork"
				style={{ width: "100%" }}
			/>
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-3">
					<p className="PrimaryColor HeadingOurServices">{DetailName}</p>
				</div>
				<Row>
					<Col>
						<h3>{state.details.upperLeftDetail.heading}</h3>
						<p className="ParagraphFeedBackBox">
							{state.details.upperLeftDetail.details}
						</p>
					</Col>
					<Col>
						<h3>{state.details.upperRightDetail.heading}</h3>
						<p className="ParagraphFeedBackBox">
							{state.details.upperRightDetail.details}
						</p>
					</Col>
				</Row>
			</Container>
			<hr />
			<Container className="pt-5 pb-5">
				<Row>
					<Col>
						<ReactPlayer
							width="100%"
							height="600px"
							url={state.details.midDetail.video}
						/>
					</Col>
					<Col>
						<h3>{state.details.midDetail.heading}</h3>
						<p className="ParagraphFeedBackBox">
							{state.details.midDetail.details}
						</p>
					</Col>
				</Row>
			</Container>
			<hr />
			<Container className="pt-5 pb-5">
				<Row>
					<Col>
						<h3>{state.details.lowerLeftDetail.heading}</h3>
						<p className="ParagraphFeedBackBox">
							{state.details.lowerLeftDetail.details}
						</p>
					</Col>
					<Col>
						<h3>{state.details.lowerCenterDetail.heading}</h3>
						<p className="ParagraphFeedBackBox">
							{state.details.lowerCenterDetail.details}
						</p>
					</Col>
					<Col>
						<h3>{state.details.lowerRightDetail.heading}</h3>
						<p className="ParagraphFeedBackBox">
							{state.details.lowerRightDetail.details}
						</p>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Details;
