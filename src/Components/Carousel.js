import React from "react";
import { Carousel } from "react-bootstrap";
import HomeFixElectricianPic from "../assets/HomeFixElectricianPic.jpg";
import HomeFixCarpenterPic from "../assets/HomeFixCarpenterPic.jpg";
import HomeFixRepairPlumbing from "../assets/HomeFixRepairPlumbing.jpg";
import HomeFixDeepCleaningImage from "../assets/Banners/DeepCleaningPic.jpg";
import HomeFixPicPainting from "../assets/HomeFixPicPainting.jpg";
import handyManPic from "../assets/handyManPic.jpg";
function CarouselSlider() {
	return (
		<div>
			<Carousel fade indicators={false}>
				<Carousel.Item interval={1000}>
					<div className="outerWrapperCarouselImages">
						<img
							className="d-block w-100"
							src={HomeFixCarpenterPic}
							alt="First slide"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
					<Carousel.Caption>
						<h3 className="CarouselHeading">CarPenter</h3>
						<p className="CarouselDescription">
							Carpentry offerings in Dubai may be a important part of our lives
							and it includes maximum of the tasks of a normal residence, an
							condominium, or a billboard building.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<div className="outerWrapperCarouselImages">
						<img
							className="d-block w-100"
							src={HomeFixRepairPlumbing}
							alt="Second slide"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
					<Carousel.Caption>
						<h3 className="CarouselHeading">Plumbing</h3>
						<p className="CarouselDescription">
							You may have the great plumbers within the UAE with
							HomeFixRepair's help.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<div className="outerWrapperCarouselImages">
						<img
							className="d-block w-100"
							src={HomeFixDeepCleaningImage}
							alt="Third slide"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
					<Carousel.Caption>
						<h3 className="CarouselHeading">Deep Cleaning</h3>
						<p className="CarouselDescription">
							Getting your private home cleaned in the UAE is only some clicks
							away
						</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item interval={1000}>
					<div className="outerWrapperCarouselImages">
						<img
							className="d-block w-100"
							src={handyManPic}
							alt="Third slide"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
					<Carousel.Caption>
						<h3 className="CarouselHeading">Home Maintenance</h3>
						<p className="CarouselDescription">
							For your house, HomeFixRepair gives the first-rate Professionals
							offerings inside the UAE
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<div className="outerWrapperCarouselImages">
						<img
							className="d-block w-100"
							src={HomeFixPicPainting}
							alt="Third slide"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
					<Carousel.Caption>
						<h3 className="CarouselHeading">Painting</h3>
						<p className="CarouselDescription">
							Paint offerings We offer the quality domestic painting offerings
							in Dubai
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<div className="outerWrapperCarouselImages">
						<img
							className="d-block w-100"
							src={HomeFixElectricianPic}
							alt="Third slide"
							style={{ width: "100%", height: "100%", objectFit: "cover" }}
						/>
					</div>
					<Carousel.Caption>
						<h3 className="CarouselHeading">Electrician</h3>
						<p className="CarouselDescription">
							Have a hassle with electricity at your property? No want to fear,
							due to the fact our expert electricians are right here
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default CarouselSlider;
