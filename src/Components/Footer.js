import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImLocation2 } from "react-icons/im";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ServicesArray } from "../Data";
import { Link } from "react-router-dom";
function Footer() {
	return (
		<div style={{ backgroundColor: "#0D0D0D" }}>
			<Container>
				<Row>
					<Col className="pt-5 pb-5 text-white">
						<Link
							onClick={() => {
								window.scrollTo(0, 0);
							}}
							className="text-decoration-none text-white"
							to="/about-us"
						>
							<p className="HeadingFooterMidContent FontWeight">About Us</p>
						</Link>
						<Row className="FooterMidContent">
							<p className="ContentAboutUsInFooter">
								HomeFixRepair is one of the leading regional incorporated
								centers management answers company within the center East. Its
								service specialties are unfold across integrated facilities
								control, waste control, and lots of greater. HomeFixRepair
								released its domestic pro maintenance offerings in 2009 as an
								one-of-a-kind carrier department to hold and keep houses within
								the center East.
							</p>
						</Row>
					</Col>
					<Col className="pt-5 pb-5 text-white">
						<p className="HeadingFooterMidContent FontWeight">
							Popular Services
						</p>
						<Row className="FooterMidContent">
							{ServicesArray.map((item, index) => {
								return (
									<Link
										key={index}
										onClick={() => {
											window.scrollTo(0, 0);
										}}
										className="text-decoration-none text-white"
										to={`/form/${item.name.replace(/\s/g, "")}?vat=${
											item.vat
										}+${item.price}`}
									>
										{item.name}
									</Link>
								);
							})}
							<Link
								onClick={() => {
									window.scrollTo(0, 0);
								}}
								className="text-decoration-none text-white"
								to="/blog"
							>
								<p className="HeadingFooterMidContent FontWeight">Blog</p>
							</Link>
						</Row>
					</Col>
					<Col className="pt-5 pb-5 text-start text-white">
						<div className="d-flex Gap FontWeight" style={{ fontSize: "32px" }}>
							<p className="text-white">Contact </p>
							<p>Us</p>
						</div>
						<div className="d-flex  mt-3 align-items-center Gap FontSize20 FontWeight">
							<ImLocation2 className="FooterIconLocation SizeFooterIcon" />
							<p>Jessco market building, office 204, Albraha area</p>
						</div>
						<hr />
						<div className="d-flex  align-items-center Gap FontSize20 FontWeight">
							<MdOutlinePhoneInTalk className="SizeFooterIcon" />
							<p>+971558504862</p>
						</div>
						<div className="d-flex Gap mt-5 FontSize20 ">
							<a
								href="https://www.instagram.com/"
								rel="noopener"
								target="_blank"
								className="text-decoration-none text-white"
							>
								<BsInstagram className="SocialIconsInFooter SizeFooterIcon" />
							</a>
							<a
								href="https://www.facebook.com/"
								rel="noopener"
								target="_blank"
								className="text-decoration-none text-white"
							>
								<FaFacebookF className="SocialIconsInFooter SizeFooterIcon" />
							</a>
							<a
								href="https://twitter.com/"
								rel="noopener"
								target="_blank"
								className="text-decoration-none text-white"
							>
								<FaTwitter className="SocialIconsInFooter SizeFooterIcon" />
							</a>
						</div>
					</Col>
				</Row>
			</Container>
			<div style={{ backgroundColor: "#000000" }}>
				<Container>
					<Row className="p-4 d-flex justify-content-between text-white">
						<Col>
							<p>©2018 800 HomeRepairFix. All Rights Reserved.</p>{" "}
						</Col>
						<Col className=" text-end">
							<p>Design and developed by Zack Technologies</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Footer;
