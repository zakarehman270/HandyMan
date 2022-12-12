import React, { useEffect } from "react";
import "./Style.css";
import Header from "./Header";
import CarouselSlider from "./Carousel";
import { Element } from "react-scroll";
import FeedBackFromClient from "./FeedBackFromClient";
import ProjectCompleted from "./ProjectCompleted";
import BookService from "./BookService";
import WhyChoseUs from "./WhyChoseUs";
import Footer from "./Footer";
import Services from "./Services";
function Home() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<Header />
			<CarouselSlider />
			<ProjectCompleted />
			<Element id="our-services">
				<Services />
			</Element>
			<Element id="book-service">
				<BookService />
			</Element>
			<Element id="why-choose-us?">
				<WhyChoseUs />
			</Element>
			<FeedBackFromClient />
			<Footer />
		</div>
	);
}

export default Home;
