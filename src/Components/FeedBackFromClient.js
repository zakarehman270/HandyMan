import React from "react";
import { Container, Row } from "react-bootstrap";
import FeedBackBox from "./FeedBackBox";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feedBackData } from "../Data";
const FeedBackFromClient = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="pt-4 pb-5 outerWrapperFeedback">
			<div className="d-flex justify-content-center align-items-center Gap pb-4">
				<p className="HeadingOurServices text-white">
					Feedback from our real clients
				</p>
			</div>
			<Container>
				<Row>
					<Slider {...settings}>
						{feedBackData.map((item, index) => {
							return (
								<div key={index}>
									<FeedBackBox
										name={item.name}
										img={item.img}
										detail={item.detail}
									/>
								</div>
							);
						})}
					</Slider>
				</Row>
			</Container>
		</div>
	);
};

export default FeedBackFromClient;
