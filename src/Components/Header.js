import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import Logo from "../assets/Logo.PNG";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
function Header() {
	return (
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
					<div className="outerWrapperContentNumberTopHeader align-items-center Gap-22">
						<a
							href="tel:+923313571616"
							className="C-pointer PrimaryColor HoverTextColor text-decoration-none"
						>
							<p>+971558504862</p>
						</a>
						<a
							href="https://mail.google.com/mail/?view=cm&fs=1&to=Babalqarya4@gmail.com"
							className="PrimaryColor HoverTextColor text-decoration-none"
						>
							<p>Babalqarya4@gmail.com</p>
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
						<Nav className="Gap-30">
							<Link
								to="our-services"
								spy={true}
								smooth={true}
								duration={50}
								offset={-140}
								className="text-decoration-none HeaderLinks"
							>
								<NavLink to="/" className="text-decoration-none text-black ">
									Our Services
								</NavLink>
							</Link>
							<NavLink
								to={`/form/choseService/?vat=${0}+${0}`}
								className="text-decoration-none HeaderLinks text-black"
							>
								Book Service
							</NavLink>
							<NavLink
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								to="/about-us"
								className="text-decoration-none HeaderLinks text-black"
							>
								About Us
							</NavLink>
							<NavLink
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								to="/contact-us"
								className="text-decoration-none HeaderLinks text-black"
							>
								Contact Us
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Header;
