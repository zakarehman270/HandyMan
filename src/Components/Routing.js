import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import FormComponent from "./Form";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import Details from "./Details";
import RequestACallBack from "./RequestACallBack";
import TermAndCondition from "./TermAndCondition";
function Routing() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/requestcallback" element={<RequestACallBack />} />
			<Route exact path="/term-and-condition" element={<TermAndCondition />} />
			<Route exact path="/form/:id" element={<FormComponent />} />
			<Route exact path="/about-us" element={<AboutUs />} />
			<Route exact path="/contact-us" element={<ContactUs />} />
			<Route exact path="/detail/:id" element={<Details />} />
		</Routes>
	);
}
export default Routing;
