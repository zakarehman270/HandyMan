import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Container } from "react-bootstrap";
import "react-phone-number-input/style.css";
import Thank from "../Thank";
import FormContentUs from "./FormComponent";
function BookProfessional() {
	const [RedirectToFinalPage, setRedirectToFinalPage] = useState(false);
	const [ShowServiceDropDown, setShowServiceDropDown] = useState(false);
	if (RedirectToFinalPage) {
		return <Thank />;
	} else {
		return (
			<div
				onClick={(e) => {
					setShowServiceDropDown(false);
				}}
			>
				<Header setRedirectToFinalPage={setRedirectToFinalPage} />
				<div className="FormBackGroundImage">
					<Container>
						<div className=" HeadingOurServices text-center w-100 pt-4 flex-nowrap justify-content-center align-items-center Gap FontWeight">
							<span className="text-black">Book</span>
							<span className="PrimaryColor">professional</span>
						</div>
						<FormContentUs
							display={true}
							setRedirectToFinalPage={setRedirectToFinalPage}
							ShowServiceDropDown={ShowServiceDropDown}
							setShowServiceDropDown={setShowServiceDropDown}
							submitFormFrom={"Book Professional"}
						/>
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}

export default BookProfessional;
