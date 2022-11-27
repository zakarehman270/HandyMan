import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Handyman from "../assets/HandyManFormPic.png";
import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ServicesArray, AreaArray, HoursData } from "../Data";
import { FaAngleDown } from "react-icons/fa";
import DatePicker from "react-date-picker";
import "react-phone-number-input/style.css";
import Thank from "./Thank";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
function FormComponent() {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Phone, setPhone] = useState();
	const [Message, setMessage] = useState("");
	const [Address, setAddress] = useState("");
	const [ValidationFName, setValidationFName] = useState(false);
	const [ValidationEmail, setValidationEmail] = useState(false);
	const [ValidationPhone, setValidationPhone] = useState(false);
	const [ValidationAddress, setValidationAddress] = useState(false);
	const [ValidationService, setValidationService] = useState(false);
	const [ValidationArea, setValidationArea] = useState(false);
	const [ErrorMessage, setErrorMessage] = useState("");
	const [DisplayDropDown, setDisplayDropDown] = useState(false);
	const [IndexSelectedDropDown, setIndexSelectedDropDown] = useState(0);
	const [IndexSelectedDropDownArea, setIndexSelectedDropDownArea] = useState(0);
	const [Service, setService] = useState("Choose Service");
	const [Area, setArea] = useState("Area");
	const [DisplayDropDownArea, setDisplayDropDownArea] = useState(false);
	const [DateValue, setDateValue] = useState(new Date());
	const [Hours, setHours] = useState(0);
	const [DisplayDropDownHours, setDisplayDropDownHours] = useState(false);
	const [IndexSelectedDropDownHours, setIndexSelectedDropDownHours] =
		useState(0);
	const [PriceValue, setPriceValue] = useState(0);
	const [VatValue, setVatValue] = useState(0);
	const [PriceDefaultValue, setPriceDefaultValue] = useState(115);
	const [VatDefaultValue, setVatDefaultValue] = useState(5);
	const [Content, setContent] = useState("");
	const [RedirectToThanPage, setRedirectToThanPage] = useState(false);
	const [InputData, setInputData] = useState("");
	const location = useLocation();
	const search = useLocation().search;
	const vat = new URLSearchParams(search).get("vat");
	useEffect(() => {
		let Split = location.pathname.split("/");
		let price = vat.substring(vat.indexOf(" ") + 1);
		setPriceDefaultValue(price);
		setVatDefaultValue(parseInt(vat));
		setService(Split[2]);
		if (
			Split[2] === "plumbing" ||
			Split[2] === "HandyMan" ||
			Split[2] === "Electrician"
		) {
			setContent(
				"we are going to provide 1 professional during the service, if work will extend we will charge 55 drhm for every additional 30 minutes, 1st hour will cover survey and 1 hour of work, any meterial that is used will be charged separatly,if you need more than 1 professional plz mention in instructions, or mention while our representative call you while confirmation.(new terms and conditions will display also for carpernter category)"
			);
		} else {
			setContent("");
		}
	}, [location]);

	const sendEmail = (e) => {
		if (
			Name !== "" &&
			Email !== "" &&
			Phone !== "" &&
			Address !== "" &&
			Area !== "Area"
		) {
			let re =
				/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (re.test(Email)) {
				e.preventDefault();
				emailjs
					.sendForm(
						"service_9ecy55l",
						"template_8wr7t4p",
						e.target,
						"ng0MaJFLD-mYiEWhw"
					)
					.then(
						(result) => {
							console.log(result.text);
						},
						(error) => {
							console.log(error.text);
						}
					);
				e.target.reset();
				setRedirectToThanPage(true);
			} else {
				setErrorMessage("invalid Email");
				setValidationEmail(true);
			}
		} else {
			e.preventDefault();
			if (Name === "") {
				setValidationFName(true);
			} else {
				setValidationFName(false);
			}
			if (Email === "") {
				setValidationEmail(true);
			} else {
				setValidationEmail(false);
			}
			if (Phone === "") {
				setValidationPhone(true);
			} else {
				setValidationPhone(false);
			}
			if (Address === "") {
				setValidationAddress(true);
			} else {
				setValidationAddress(false);
			}
			if (Area === "Area") {
				setValidationArea(true);
			} else {
				setValidationArea(false);
			}
		}
	};
	if (RedirectToThanPage) {
		return <Thank />;
	} else {
		return (
			<div
				onClick={(e) => {
					setDisplayDropDownHours(false);
					setDisplayDropDownArea(false);
				}}
			>
				<Header />
				<div
					className="FormBackGroundImage"
					// style={{
					// 	opacity: "0.9",
					// 	backgroundImage: `url(${Handyman})`,
					// }}
				>
					<Container>
						<div
							className=" text-center w-100 pt-4 flex-nowrap justify-content-center align-items-center Gap FontWeight"
							style={{ fontSize: "45px" }}
						>
							<span className="text-black">Get</span>
							<span className="PrimaryColor">Start</span>
						</div>
						<Row className=" d-flex justify-content-center order-1">
							<Col className=" d-flex  justify-content-center">
								<div className="d-flex flex-column w-100">
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="name" className="Label">
											Name:
										</label>
										<input
											type="text"
											className="FormsInputFields"
											placeholder="Name"
											style={{ borderColor: ValidationFName ? "red" : "" }}
											value={Name}
											onChange={(e) => {
												setName(e.target.value);
												setValidationFName(false);
											}}
										/>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="email" className="Label">
											Email:
										</label>
										<input
											type="text"
											className="FormsInputFields"
											placeholder="Email"
											style={{ borderColor: ValidationEmail ? "red" : "" }}
											value={Email}
											onChange={(e) => {
												setEmail(e.target.value);
												setValidationEmail(false);
												setErrorMessage("");
											}}
										/>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label">
											Phone:
										</label>
										<PhoneInput
											defaultCountry="AE"
											placeholder="Enter phone number"
											className="FormsInputFieldsDatePicker"
											style={{ borderColor: ValidationPhone ? "red" : "" }}
											value={Phone}
											onChange={(value) => {
												setPhone(value);
												setValidationPhone(false);
											}}
										/>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="email" className="Label">
											Date:
										</label>
										<DatePicker
											className="FormsInputFieldsDatePicker"
											// onChange={setDateValue}
											onChange={(value, e) => setDateValue(value, e)}
											value={DateValue}
										/>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label">
											How many hours do you need your professional to stay?
										</label>
										<div className="OuterContainerDropDown">
											<div>
												<p
													className="FormsInputFieldsDropDown"
													onClick={(e) => {
														setDisplayDropDownHours(!DisplayDropDownHours);
														e.stopPropagation();
													}}
												>
													{Hours}
													<FaAngleDown style={{ fontSize: "20px" }} />
												</p>
											</div>
											{DisplayDropDownHours && (
												<div className="OuterWrapperDropDown">
													{HoursData.map((item, index) => {
														let selected = false;
														if (IndexSelectedDropDownHours === index) {
															selected = true;
														}
														return (
															<div
																key={index}
																className="DropDownLabel"
																style={{ color: selected ? "#FFBB00" : "" }}
																onClick={() => {
																	setIndexSelectedDropDownHours(index);
																	setHours(item);
																	let TotalPrice = item * PriceDefaultValue;
																	let TotalVat = item * VatDefaultValue;
																	setPriceValue(TotalPrice);
																	setVatValue(TotalVat);
																	setDisplayDropDownHours(false);
																}}
															>
																{item}
															</div>
														);
													})}
												</div>
											)}
										</div>
										<p className="LabelContentUnderHoursDropDown">{Content}</p>
									</div>
								</div>
							</Col>
							<Col className=" d-flex justify-content-center">
								<div className="d-flex flex-column w-100">
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label">
											Choose Area:
										</label>
										<div className="OuterContainerDropDown">
											<div>
												<p
													className="FormsInputFieldsDropDown"
													style={{ borderColor: ValidationArea ? "red" : "" }}
													onClick={(e) => {
														setDisplayDropDown(!DisplayDropDown);
														e.stopPropagation();
													}}
												>
													{Area}
													<FaAngleDown style={{ fontSize: "20px" }} />
												</p>
											</div>
											{DisplayDropDown && (
												<div className="OuterWrapperDropDown">
													<div className="OuterWraperDivBoxes">
														<input
															value={InputData}
															placeholder="search.."
															onChange={(e) => {
																setInputData(e.target.value);
															}}
															className="w-100 outerWrapperSearchField"
														/>
														{AreaArray.filter((val) => {
															if (InputData == "") {
																return val;
															} else if (
																val.name
																	.toLowerCase()
																	.includes(InputData.toLowerCase())
															) {
																return val;
															}
														}).map((item, index) => {
															let selected = false;
															if (IndexSelectedDropDown === index) {
																selected = true;
															}
															return (
																<div
																	key={index}
																	className="DropDownLabel"
																	style={{ color: selected ? "#FFBB00" : "" }}
																	onClick={() => {
																		setIndexSelectedDropDown(index);
																		setArea(item.name);
																		setDisplayDropDown(false);
																		setValidationArea(false);
																	}}
																>
																	{item.name}
																</div>
															);
														})}
													</div>
												</div>
											)}
										</div>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label">
											Address:
										</label>
										<input
											type="text"
											className="FormsInputFields"
											placeholder="Address"
											style={{ borderColor: ValidationAddress ? "red" : "" }}
											value={Address}
											onChange={(e) => {
												setAddress(e.target.value);
												setValidationAddress(false);
											}}
										/>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label">
											Choose Service:
										</label>
										<div className="OuterContainerDropDown">
											<div>
												<p
													className="FormsInputFieldsDropDown"
													style={{
														borderColor: ValidationService ? "red" : "",
													}}
													onClick={(e) => {
														setDisplayDropDownArea(!DisplayDropDownArea);
														e.stopPropagation();
													}}
												>
													{Service}
													<FaAngleDown style={{ fontSize: "20px" }} />
												</p>
											</div>
											{DisplayDropDownArea && (
												<div className="OuterWrapperDropDown">
													{ServicesArray.map((item, index) => {
														let selected = false;
														if (IndexSelectedDropDownArea === index) {
															selected = true;
														}
														return (
															<Link
																onClick={() => {
																	window.scrollTo(0, 0);
																}}
																className="text-decoration-none text-black"
																to={`/form/${item.name.replace(
																	/\s/g,
																	""
																)}/?vat=${item.vat}+${item.price}`}
															>
																<p
																	key={index}
																	className="DropDownLabel"
																	style={{ color: selected ? "#FFBB00" : "" }}
																	onClick={() => {
																		setIndexSelectedDropDownArea(index);
																		setService(item.name);
																		setDisplayDropDownArea(false);
																		setValidationService(false);
																	}}
																>
																	{item.name}
																</p>
															</Link>
														);
													})}
												</div>
											)}
										</div>
									</div>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label">
											instructions:
										</label>
										<textarea
											className="FormsInputFields"
											placeholder="instructions.."
											rows={5}
											cols={5}
											value={Message}
											onChange={(e) => {
												setMessage(e.target.value);
											}}
										/>
									</div>
									<Form className="d-flex align-items-center Gap">
										<Form.Check type={"checkbox"} id={`default-radio`} />
										<p className="textHolderTermCondition">
											I agree to
											<Link
												onClick={() => {
													window.scrollTo(0, 0);
												}}
												className="textHolderLinkTermCondition text-decoration-none"
												to={`/term-and-condition`}
											>
												Terms of Service
											</Link>
											and{" "}
											<Link
												onClick={() => {
													window.scrollTo(0, 0);
												}}
												className="textHolderLinkTermCondition text-decoration-none"
												to={`/term-and-condition`}
											>
												Privacy policy *
											</Link>
										</p>
									</Form>
									<div className="d-flex flex-column  pb-2">
										<label htmlFor="phone" className="Label text-center">
											Price Details
										</label>
										<div className="FormsInputFieldsDatePicker ContentPriceDetails FontWeight">
											<div className="d-flex justify-content-between pb-2">
												<p>PRICE</p>
												<p>{PriceValue}</p>
											</div>
											<div className="d-flex justify-content-between pb-2">
												<p>VAT</p>
												<p>{VatValue}</p>
											</div>
											<div className="d-flex justify-content-between">
												<p>TOTAL PRICE</p>
												<p style={{ color: "#FFBB00" }}>
													{PriceValue + VatValue}
												</p>
											</div>
										</div>
										<div>
											<form
												onClick={sendEmail}
												className="BookServiceButtons  text-center BackGroundColor mt-3 FontSize20 FontWeight "
											>
												<div className="d-none">
													<textarea
														name="message"
														value={`Name: ${Name} Email: ${Email} Phone: ${Phone} 
                          Address: ${Address} Date:${DateValue} Area:${Area} Service${Service}
                          Message:${Message} TotalPrice${
															PriceValue + VatValue
														} `}
														onChange={() => {
															console.log("Onchange");
														}}
													/>
												</div>
												Submit
											</form>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						{ErrorMessage && <div>{ErrorMessage}</div>}
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}

export default FormComponent;
