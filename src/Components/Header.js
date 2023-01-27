import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BlogService } from "../SeoData/BlogData";
import { DataService } from "../SeoData/Service";
import HomeFeaturedImage from "../assets/HomeFeaturedImage.jpeg";
function Header(props) {
	const [Title, setTitle] = useState("Home Fix Repair");
	const [Description, setDescription] = useState(
		"Best Home Fix Repairs, Carpenter, Handyman, Plumbing, Home Electrician, Electrical Maintenance Services in Dubai."
	);
	const [ShowDropDown, setShowDropDown] = useState(false);
	const [FeaturedImage, setFeaturedImage] = useState("");
	const location = useLocation();
	let Split = location.pathname.split("/");

	function handleToggleBorderBottom() {
		return Split[Split.length - 1];
	}
	function HandleActiveHyperLinks() {
		if (Split[Split.length - 1]) {
			return "";
		} else {
			return "ActiveHyperLinks";
		}
	}
	function HandlerActiveLinkColor() {
		if (Split[Split.length - 1]) {
			return "ColorHyperLinks";
		} else {
			return "ActiveLinkColor";
		}
	}
	useEffect(() => {
		let data = Split[Split.length - 1];
		while (data.includes("-")) {
			data = data.replace("-", " ");
		}
		if (Split[Split.length - 1]) {
			setTitle(
				data.replace(/\b\w/g, (l) => l.toUpperCase()) + " – Home Fix Repairs"
			);
		}
		if (Split[Split.length - 1]) {
			for (let i = 0; i < BlogService.length; i++) {
				if (BlogService[i].slug === Split[Split.length - 1]) {
					setFeaturedImage(BlogService[i].image.src);
					setDescription(BlogService[i].image.des);
					break;
				}
			}
			for (let i = 0; i < DataService.length; i++) {
				if (DataService[i].slug === Split[Split.length - 1]) {
					setFeaturedImage(DataService[i].image.src);
					setDescription(DataService[i].image.des);
					break;
				}
			}
		} else {
			setFeaturedImage(HomeFeaturedImage);
			setDescription(
				"Best Home Fix Repairs, Carpenter, Handyman, Plumbing, Home Electrician, Electrical Maintenance Services in Dubai."
			);
		}
	}, [Split[Split.length - 1]]);

	return (
		<div>
			<Helmet>
				<title>{Title}</title>
				<meta name="description" content={Description} />
				<meta property="og:title" content={Title} />
				<meta name="og:description" content={Description} />
				<meta property="og:image" content={FeaturedImage} />
			</Helmet>
			<div className="outerWrapperNavBar bg-white">
				<div className="outerWrapperUpperHeader pt-3 pb-3 FontSizeTextHolderTopOfHeader">
					<Container className="d-flex justify-content-between align-items-center text-white">
						<div className="d-flex align-items-center GapBetWeenNumberAndEmailInTopHeader">
							<a
								href="https://www.instagram.com/"
								rel="noopener"
								target="_blank"
								className="text-decoration-none text-white"
							>
								<BsInstagram className="SocialIconsInFooter HeaderSocialMediaIcons" />
							</a>
							<a
								href="https://www.facebook.com/"
								rel="noopener"
								target="_blank"
								className="text-decoration-none text-white"
							>
								<FaFacebookF className="SocialIconsInFooter HeaderSocialMediaIcons" />
							</a>
							<a
								href="https://web.whatsapp.com"
								rel="noopener"
								target="_blank"
								className="text-decoration-none text-white"
							>
								<ImWhatsapp className="SocialIconsInFooter HeaderSocialMediaIcons" />
							</a>
						</div>
						<div className="outerWrapperContentNumberTopHeader align-items-center Gap">
							<a
								href="tel:+923313571616"
								className="C-pointer PrimaryColor HoverTextColor text-decoration-none"
							>
								<p>+971558504862</p>
							</a>
							<a
								href="https://mail.google.com/mail/?view=cm&fs=1&to=info@homefixrepairs.com"
								className="PrimaryColor HoverTextColor text-decoration-none"
							>
								<p>info@homefixrepairs.com</p>
							</a>
						</div>
					</Container>
				</div>
				<Navbar collapseOnSelect expand="lg">
					<Container>
						<NavLink to="/" className="text-decoration-none text-black">
							<div className="OuterWrapperLogoImage">
								<img
									src={Logo}
									alt="Logo"
									style={{ width: "100%", height: "100%", objectFit: "cover" }}
								/>
							</div>
						</NavLink>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="me-auto"></Nav>
							<Nav className="Gap-17">
								<div className={`HyperLinks ${HandleActiveHyperLinks()}`}>
									<NavLink
										onClick={() => {
											window.scrollTo(0, 0);
											props.setRedirectToFinalPage(false);
										}}
										to="/"
										className={`text-decoration-none ${HandlerActiveLinkColor()}`}
									>
										Home
									</NavLink>
								</div>
								<div
									className={`HyperLinks ${
										handleToggleBorderBottom() === "service" ||
										handleToggleBorderBottom() === "carpentor-service-dubai" ||
										handleToggleBorderBottom() ===
											"electrical-maintenance-company-in-Dubai" ||
										handleToggleBorderBottom() === "electrician-work-at-home" ||
										handleToggleBorderBottom() ===
											"family-handyman-customer-service" ||
										handleToggleBorderBottom() === "emergency-plumbing-Dubai"
											? "ActiveHyperLinks"
											: ""
									}`}
									onMouseEnter={() => {
										setShowDropDown(true);
									}}
									onMouseLeave={() => {
										setShowDropDown(false);
									}}
								>
									<NavLink
										to="/service"
										className={`text-decoration-none ${
											handleToggleBorderBottom() === "service" ||
											handleToggleBorderBottom() ===
												"carpentor-service-dubai" ||
											handleToggleBorderBottom() ===
												"electrical-maintenance-company-in-Dubai" ||
											handleToggleBorderBottom() ===
												"electrician-work-at-home" ||
											handleToggleBorderBottom() ===
												"family-handyman-customer-service" ||
											handleToggleBorderBottom() === "emergency-plumbing-Dubai"
												? "ActiveLinkColor"
												: "ColorHyperLinks"
										}`}
									>
										Services
									</NavLink>
									<Dropdown show={ShowDropDown}>
										<Dropdown.Menu>
											<Dropdown.Item>
												<Link
													onClick={() => {
														window.scrollTo(0, 0);
													}}
													className="text-decoration-none text-black FontSize13"
													to="/carpentor-service-dubai"
												>
													Carpenter Service Dubai
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													onClick={() => {
														window.scrollTo(0, 0);
													}}
													className="text-decoration-none text-black FontSize13"
													to="/electrical-maintenance-company-in-Dubai"
												>
													Electrical Maintenance in Dubai
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													onClick={() => {
														window.scrollTo(0, 0);
													}}
													className="text-decoration-none text-black FontSize13"
													to="/electrician-work-at-home"
												>
													Electrician Work at Home in Dubai
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													onClick={() => {
														window.scrollTo(0, 0);
													}}
													className="text-decoration-none text-black FontSize13"
													to="/family-handyman-customer-service"
												>
													Family Handyman Customer Service
												</Link>
											</Dropdown.Item>
											<Dropdown.Item>
												<Link
													onClick={() => {
														window.scrollTo(0, 0);
													}}
													className="text-decoration-none text-black FontSize13"
													to="/emergency-plumbing-Dubai"
												>
													Emergency Plumbing Dubai
												</Link>
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</div>
								<div
									className={`HyperLinks ${
										Split.includes("blog") ? "ActiveHyperLinks" : ""
									}`}
								>
									<NavLink
										onClick={() => {
											window.scrollTo(0, 0);
										}}
										to="/blog"
										className={`text-decoration-none ${
											Split.includes("blog")
												? "ActiveLinkColor"
												: "ColorHyperLinks"
										}`}
									>
										Blog
									</NavLink>
								</div>
								<div
									className={`HyperLinks ${
										Split.includes("form") ? "ActiveHyperLinks" : ""
									}`}
								>
									<NavLink
										onClick={() => {
											window.scrollTo(0, 0);
											props.setRedirectToFinalPage(false);
										}}
										to={`/form/choseService?vat=${0}+${0}`}
										className={`text-decoration-none ${
											Split.includes("form")
												? "ActiveLinkColor"
												: "ColorHyperLinks"
										}`}
									>
										Instant Booking
									</NavLink>
								</div>
								<div
									className={`HyperLinks ${
										Split.includes("about-us") ? "ActiveHyperLinks" : ""
									}`}
								>
									<NavLink
										onClick={() => {
											window.scrollTo(0, 0);
										}}
										to="/about-us"
										className={`text-decoration-none ${
											Split.includes("about-us")
												? "ActiveLinkColor"
												: "ColorHyperLinks"
										}`}
									>
										About Us
									</NavLink>
								</div>
								<div
									className={`HyperLinks ${
										Split.includes("contact-us") ? "ActiveHyperLinks" : ""
									}`}
								>
									<NavLink
										onClick={() => {
											window.scrollTo(0, 0);
										}}
										to="/contact-us"
										className={`text-decoration-none ${
											Split.includes("contact-us")
												? "ActiveLinkColor"
												: "ColorHyperLinks"
										}`}
									>
										Contact Us
									</NavLink>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		</div>
	);
}

export default Header;
