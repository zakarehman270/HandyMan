import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import "react-phone-number-input/style.css";
import Thank from "../Thank";
import FormContentUs from "./FormComponent";
function BookProfessional() {
	const [RedirectToThanPage, setRedirectToThanPage] = useState(false);
	if (RedirectToThanPage) {
		return <Thank />;
	} else {
		return (
			<div>
				<Header />
				<div className="FormBackGroundImage">
					<Container>
						<div className=" HeadingOurServices text-center w-100 pt-4 flex-nowrap justify-content-center align-items-center Gap FontWeight">
							<span className="text-black">Book</span>
							<span className="PrimaryColor">professional</span>
						</div>
						<FormContentUs
							display={true}
							setRedirectToThanPage={setRedirectToThanPage}
						/>
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}

export default BookProfessional;
