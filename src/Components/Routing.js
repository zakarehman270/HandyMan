import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import Details from "./Details";
import RequestACallBack from "./RequestACallBack";
import TermAndCondition from "./TermAndCondition";
import BookProfessional from "./Form/BookProfessional";
import Blogs from "../Pages/Blog/Blogs";
import BlogDetails from "../Pages/Blog/BlogDetails";
import Service from "../Pages/Service/Service";
import ServiceDetails from "../Pages/Service/ServiceDetails";

function Routing() {
	return (
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/requestcallback" element={<RequestACallBack />} />
			<Route exact path="/blog" element={<Blogs />} />
			<Route exact path="/what-does-carpenters-do" element={<BlogDetails />} />
			<Route exact path="/service" element={<Service />} />
			<Route
				exact
				path="/carpentor-service-dubai"
				element={<ServiceDetails />}
			/>
			<Route
				exact
				path="/electrical-maintenance-company-in-Dubai"
				element={<ServiceDetails />}
			/>
			<Route
				exact
				path="/electrician-work-at-home"
				element={<ServiceDetails />}
			/>
			<Route exact path="/term-and-condition" element={<TermAndCondition />} />
			<Route exact path="/form/:id" element={<BookProfessional />} />
			<Route exact path="/about-us" element={<AboutUs />} />
			<Route exact path="/contact-us" element={<ContactUs />} />
			<Route exact path="/detail/:id" element={<Details />} />
		</Routes>
	);
}
export default Routing;
