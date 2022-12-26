import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import {} from "../../../node_modules/video-react/dist/video-react.css";
import CarpenterBlog from "../../assets/CarpenterBlog.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import dubaifamily from "../../assets/dubaifamily.jpg";
const ServiceDetails = () => {
	return (
		<div className="backgroundColor-grey">
			<Header />
			<Container className="pt-5 pb-5">
				<div className="d-flex justify-content-center align-items-center Gap pb-3">
					<p className="PrimaryColor HeadingOurServices">
						Carpenter Service Dubai
					</p>
					<p className="HeadingOurServices">Home Fix Repairs</p>
				</div>
				<img
					src={dubaifamily}
					alt="CarpenterBlog"
					className="blogImage mt-2 mb-3"
				/>
				<p>
					Are you starting to get bored with how your house looks inside and
					out? If so consider top carpenter service Dubai as your preference in
					this spectrum. If you have an idea or a plan that has been brewing in
					your head for a few months, or even a year, about how to breathe new
					life into your home but do not have the carpentry skills to turn your
					ideas into reality, it is time to look for carpenter services to
					assist you. In every city and every town, there are a good number
					skilled professionals working under banner of top notch carpenter
					service Dubai like us. And these carpenters have a diverse set of
					skills, which vary according to their experience and the size of the
					company. For example, a lone carpenter who has been in his trade for
					only a couple of years must just be specializing in home repairs. That
					is for things like fixing your door and window, fixing a creaking
					floor, or building a nice tree house for your kids. There are also the
					big-time guys, the carpenters, who can work on every carpentry and
					construction project, and for the typical homeowner customer, they are
					offering home improvement services. These are the guys that you would
					want to contact if your home remodeling ideas consist of putting up an
					addition to your house, re-roofing, or completely remodeling the
					inside of your home.
				</p>
				<h1 className="mt-3 mb-3">
					For big projects always rely on top carpenter service Dubai like Home
					Fix Repairs{" "}
				</h1>
				<p>
					When projects as big as these are part of your home improvement plan,
					then you should put much effort into finding and hiring the right
					carpenter service Dubai for the job. You can start by asking a friend
					who recently had a home improvement project of his own if he can
					recommend the carpenter that worked for him. That is the best kind of
					recommendation that you can get because not only is your friend a
					reliable source, but you can actually see the work of that carpenter.
					If that does not work for you, then simply make some phone calls and
					individually interview these carpenter service Dubai. Look for the
					amount of experience that they have, and most importantly, ask for a
					portfolio of their previous carpentry projects so that you can get a
					good idea if they are the right people to do your home improvement.
					However, if all you want is a set of new kitchen cabinets, then you
					will have to look for carpenters who specialize in cabinetry. Some
					carpenters would prefer to just work on one specialty rather than
					spread their services too thinly. Because this allows them to master
					the art of cabinetry and establish themselves as the expert or
					authority on that type of carpentry service. And there are the
					multitude of professionals from carpenter service Dubai who call
					themselves "handymen" and who can do all the minor home repairs,
					including some electrical and plumbing repairs. These are the people
					that you will call when all you want are some minor repair jobs. As a
					result, the most important thing is to determine how complicated or
					large your home improvement or home repair is. Then narrow down your
					list to Home Fix Repairs as your prime carpenter service Dubai. Give
					us a call now to discuss the bright prospects.
				</p>
			</Container>
			<Footer />
		</div>
	);
};
export default ServiceDetails;
