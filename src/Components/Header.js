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
			<div className="outerWrapperUpperHeader pt-2 pb-2">
				<Container className="d-flex justify-content-between align-items-center text-white">
					<div className="d-flex align-items-center Gap">
						<a
							href="https://www.instagram.com/"
							rel="nofollow noopener"
							target="_blank"
							className="text-decoration-none text-white"
						>
							<BsInstagram className="SocialIconsInFooter HeaderSocialMediaIcons" />
						</a>
						<a
							href="https://www.facebook.com/"
							rel="nofollow noopener"
							target="_blank"
							className="text-decoration-none text-white"
						>
							<FaFacebookF className="SocialIconsInFooter HeaderSocialMediaIcons" />
						</a>
						<a
							href="https://web.whatsapp.com"
							rel="nofollow noopener"
							target="_blank"
							className="text-decoration-none text-white"
						>
							<ImWhatsapp className="SocialIconsInFooter HeaderSocialMediaIcons" />
						</a>
					</div>
					<div className="d-flex align-items-center Gap">
						<p>03313571616</p>
						<p>zakarehman270@gmail.com</p>
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
						<Nav className="Gap">
							<Link
								to="our-services"
								spy={true}
								smooth={true}
								duration={500}
								className="text-decoration-none text-black HeaderLinks"
							>
								Our Services
							</Link>
							<Link
								to="book-service"
								spy={true}
								smooth={true}
								duration={500}
								className="text-decoration-none text-black HeaderLinks"
							>
								Book Service
							</Link>
							<NavLink
								to="/about-us"
								className="text-decoration-none text-black HeaderLinks"
							>
								About Us
							</NavLink>
							<NavLink
								to="/contact-us"
								className="text-decoration-none text-black HeaderLinks"
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
