import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import tikMark from "../assets/tikMark.gif";
import handyBack from "../assets/handyBack.jpg";
import { Link } from "react-router-dom";
function Thank(props) {
	return (
		<div>
			<Header />
			<div
				style={{
					background: `url(${handyBack})`,
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
			>
				<div
					className=" text-center w-100 pt-4 flex-nowrap justify-content-center align-items-center Gap FontWeight"
					style={{ fontSize: "45px" }}
				>
					<span className="text-black">Thank</span>
					<span className="PrimaryColor">You!</span>
				</div>
				<div className="d-flex justify-content-center">
					<img src={tikMark} alt="tikMark" />
				</div>
				<Container>
					<p className="pt-3 pb-3" style={{ fontSize: "18px", color: "#555" }}>
						Thank You for your enquiry. We will be in touch shortly.” Really
						doesn’t cut it for me. And yet, that’s the best that the majority of
						websites I spend my valuable time visiting come up with. These throw
						away lines of copy don’t inspire me to continue doing business with
						the company and most often this page is a real disconnect from the
						rest of the website experience and the values of the company itself
					</p>
					<div className="d-flex justify-content-center pb-3">
						<Link
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="text-decoration-none text-white w-25"
							to="/"
						>
							<div className="BookServiceButtons BackGroundColor text-center">
								OK
							</div>
						</Link>
					</div>
				</Container>
			</div>
			<Footer />
		</div>
	);
}

export default Thank;
