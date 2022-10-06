import React, { useRef, useEffect } from "react";
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
	const divRef = useRef(null);
	useEffect(() => {
		divRef.current.scrollIntoView({ behavior: "smooth" });
	}, []);
	return (
		<div>
			<Header />
			<CarouselSlider />
			<div ref={divRef}>
				<ProjectCompleted />
			</div>

			{/* <div className="outerWrapperBanners">
        <Container>
          <div
            className="p-5 d-flex justify-content-center flex-wrap"
            style={{gap: '12px'}}
          >
            <Suspense fallback={<div>LOADING</div>}>
              {BannersArray.map ((item, index) => {
                return (
                  <Banners key={index} image={item.images} name={item.name} />
                );
              })}
            </Suspense>
          </div>
        </Container>
      </div> */}
			<Element id="our-services">
				<Services />
			</Element>
			<Element id="book-service">
				<BookService />
			</Element>
			<Element id="why-choose-us?">
				<WhyChoseUs />
			</Element>
			{/* <div className="pb-5">
        <Suspense fallback={<div>LOADING</div>}>
          <MobileApp />
        </Suspense>
      </div> */}
			<Element id="">
				<FeedBackFromClient />
			</Element>
			<Footer />
		</div>
	);
}

export default Home;
