import React from "react";
import Cleaning from "../assets/Carousel/Cleaning10.jpg";
import { Link } from "react-router-dom";
function BookService(props) {
	return (
		<div
			className="pt-4 pb-5"
			style={{
				opacity: "0.9",
				backgroundImage: `url(${Cleaning})`,
				position: "relative",
			}}
		>
			<div style={{ zIndex: 2 }}>
				<div
					className="HeadingBookService justify-content-center align-items-center Gap FontWeight"
					style={{ fontSize: "45px" }}
				>
					<p className="text-white">If You Need Any</p>
					<p className="PrimaryColor">Handyman Service Related</p>
				</div>
				<div className="d-flex justify-content-center align-items-center pt-3">
					<Link
						onClick={() => {
							window.scrollTo(0, 0);
						}}
						className="text-decoration-none text-black"
						to={`/form/choseService/?vat=${0}+${0}`}
					>
						<div className="BookServiceButtons BackGroundColor text-center">
							Book Your Service Now
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BookService;
