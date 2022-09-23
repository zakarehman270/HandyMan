import React, { Suspense, lazy, useState } from "react";
import "./Style.css";
import Header from "./Header";
import CarouselSlider from "./Carousel";
import teamwork from "../assets/Icons/teamwork.png";
import justice from "../assets/Icons/justice.png";
import shield from "../assets/Icons/shield.png";
import { Element } from "react-scroll";
import FeedBackFromClient from "./FeedBackFromClient";

const Banners = lazy(() => import("./Banners"));
const Services = lazy(() => import("./Services"));
const BookService = lazy(() => import("./BookService"));
const WhyChoseUs = lazy(() => import("./WhyChoseUs"));
const MobileApp = lazy(() => import("./MobileApp"));
const Footer = lazy(() => import("./Footer"));
function Home() {
  const [BannersArray, setBannersArray] = useState([
    { name: "Professional staff", images: teamwork },
    { name: "Safety & Experience", images: shield },
    { name: "Fair Price", images: justice },
  ]);
  return (
    <div>
      <Header />
      <CarouselSlider />
      <Element id="book-service">
        <div className="pb-5">
          <Suspense fallback={<div>LOADING</div>}>
            <BookService />
          </Suspense>
        </div>
      </Element>
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
        <Suspense fallback={<div>LOADING</div>}>
          <Services />
        </Suspense>
      </Element>
      <div className="pb-5">
        <Suspense fallback={<div>LOADING</div>}>
          <BookService />
        </Suspense>
      </div>
      <div className="pb-5">
        <Element id="why-choose-us?">
          <Suspense fallback={<div>LOADING</div>}>
            <WhyChoseUs />
          </Suspense>
        </Element>
      </div>
      {/* <div className="pb-5">
        <Suspense fallback={<div>LOADING</div>}>
          <MobileApp />
        </Suspense>
      </div> */}
      <Element id="">
        <Suspense fallback={<div>LOADING</div>}>
          <FeedBackFromClient />
        </Suspense>
      </Element>
      <Suspense fallback={<div>LOADING</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Home;
