import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button, Dropdown, Form } from "react-bootstrap";
import { AreaArray, bookingTime, HoursData, ServicesArray } from "../../Data";
import PhoneInput from "react-phone-number-input";
import DatePicker from "react-date-picker";
import "react-phone-number-input/style.css";
import { Link, useLocation } from "react-router-dom";
export const HeaderInitialValues = {
	name: "",
	phone: "",
	email: "",
	location: "",
	service: "",
	instruction: "",
	suggestion: "",
};
const FormContentUs = (props) => {
	const [values, setValues] = useState(HeaderInitialValues);
	const [PriceDefaultValue, setPriceDefaultValue] = useState(115);
	const [VatDefaultValue, setVatDefaultValue] = useState(5);
	const [Content, setContent] = useState("");
	const [validated, setValidated] = useState(false);
	const [InputData, setInputData] = useState("");
	const [IndexSelectedDropDown, setIndexSelectedDropDown] = useState(0);
	const [PriceValue, setPriceValue] = useState(0);
	const [VatValue, setVatValue] = useState(0);
	const [Hours, setHours] = useState(0);
	const [HourPrise, setHourPrise] = useState(0);
	const [BookingTime, setBookingTime] = useState("13:00-14:00");
	const [Area, setArea] = useState(() => {
		if (props.submitFormFrom === "Book Professional") {
			return "Area..";
		} else {
			return "other";
		}
	});
	const [Service, setService] = useState(() => {
		if (props.submitFormFrom === "Book Professional") {
			return "Choose Service";
		} else {
			return "other";
		}
	});
	const [ValidationArea, setValidationArea] = useState(false);
	const [ValidationService, setValidationService] = useState(false);
	const [DateValue, setDateValue] = useState(new Date());
	const [Phone, setPhone] = useState();
	const location = useLocation();
	const search = useLocation().search;
	const vat = new URLSearchParams(search).get("vat");
	useEffect(() => {
		if (props.display) {
			let Split = location.pathname.split("/");
			let price = vat.substring(vat.indexOf(" ") + 1);
			setPriceDefaultValue(price);
			setHours(1);
			setPriceValue(price);
			setHourPrise(price);
			setBookingTime("13:00-14:00");
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
		}
	}, [location]);
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (
			form.checkValidity() === false ||
			Area === "Area.." ||
			Service === "Choose Service"
		) {
			event.preventDefault();
			event.stopPropagation();
			setValidationArea(true);
			setValidationService(true);
		} else {
			event.preventDefault();
			emailjs
				.sendForm(
					"service_9ecy55l",
					"template_8wr7t4p",
					event.target,
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
			props.setRedirectToFinalPage(true);
		}
		setValidated(true);
	};
	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<div
				className={`mb-3 ${
					props.display ? "OuterWrapperFormComponent" : ""
				} Gap-22`}
			>
				<div className={`${props.display ? "WidthFormComponent" : "w-100"}`}>
					<Form.Group className="mb-3" controlId="validationCustom01">
						<label htmlFor="phone" className="Label">
							Name:
						</label>
						<Form.Control
							required
							type="text"
							name="name"
							value={values.name}
							onChange={handleInputChange}
							placeholder="You Name"
							className="FormsInputFieldsDatePicker"
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Form.Group className="mb-3" controlId="validationCustom02">
						<label htmlFor="phone" className="Label">
							Email:
						</label>
						<Form.Control
							required
							type="email"
							placeholder="Email"
							name="email"
							value={values.email}
							onChange={handleInputChange}
							className="FormsInputFieldsDatePicker"
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<div className="d-flex flex-column mb-3  pb-2">
						<label htmlFor="phone" className="Label">
							Phone:
						</label>
						<PhoneInput
							defaultCountry="AE"
							placeholder="Enter phone number"
							className="FormsInputFieldsDatePicker"
							value={Phone}
							onChange={(value) => {
								setPhone(value);
							}}
						/>
					</div>
					{props.display && (
						<div className="d-flex flex-column  pb-2">
							<label htmlFor="email" className="Label">
								Date:
							</label>
							<DatePicker
								className="FormsInputFieldsDatePicker"
								onChange={(value, e) => setDateValue(value, e)}
								minDate={new Date()}
								value={DateValue}
							/>
						</div>
					)}
					{props.display && (
						<div>
							<Dropdown className="mb-3 w-100">
								<label htmlFor="phone" className="Label">
									Booking Time:
								</label>
								<Dropdown.Toggle
									id="dropdown-basic"
									className="outerWrapperDropDownRequestACallBack borderColorDropDown borderColorDropDown FormsInputFieldsDatePicker"
								>
									{BookingTime}
								</Dropdown.Toggle>
								<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu">
									{bookingTime.map((item, index) => {
										return (
											<Dropdown.Item
												key={index}
												onClick={() => {
													setBookingTime(item);
												}}
											>
												{item}
											</Dropdown.Item>
										);
									})}
								</Dropdown.Menu>
							</Dropdown>
							<Dropdown className="mb-3 w-100">
								<label htmlFor="phone" className="Label">
									How many hours do you need your professional to stay?:
								</label>
								<Dropdown.Toggle
									id="dropdown-basic"
									className="outerWrapperDropDownRequestACallBack borderColorDropDown borderColorDropDown FormsInputFieldsDatePicker"
								>
									{Hours}
								</Dropdown.Toggle>
								<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu">
									{HoursData.map((item, index) => {
										return (
											<Dropdown.Item
												key={index}
												// href={`#/action-${index}`}
												onClick={() => {
													setHours(item);
													let TotalPrice = item * PriceDefaultValue;
													let TotalVat = item * VatDefaultValue;
													setPriceValue(TotalPrice);
													setVatValue(TotalVat);
												}}
											>
												{item}
											</Dropdown.Item>
										);
									})}
								</Dropdown.Menu>
							</Dropdown>
						</div>
					)}
					<p className="LabelContentUnderHoursDropDown">{Content}</p>
				</div>
				<div className={`${props.display ? "WidthFormComponent" : "w-100"}`}>
					{props.display && (
						<Dropdown className="mb-3 w-100" show={props.ShowServiceDropDown}>
							<label htmlFor="phone" className="Label">
								Choose Service:
							</label>
							<Dropdown.Toggle
								onClick={(e) => {
									props.setShowServiceDropDown(true);
									e.stopPropagation();
								}}
								id="dropdown-basic"
								className={`
								outerWrapperDropDownRequestACallBack FormsInputFieldsDatePicker
								${ValidationService ? "borderColorRedDropDown" : "borderColorDropDown"}
								`}
							>
								{Service}
							</Dropdown.Toggle>
							<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu">
								{ServicesArray.map((item, index) => {
									return (
										<Link
											key={index}
											onClick={() => {
												window.scrollTo(0, 0);
												setService(item.name);
												setValidationService(false);
												props.setShowServiceDropDown(false);
											}}
											className="text-decoration-none LinkService"
											to={`/form/${item.name.replace(/\s/g, "")}/?vat=${
												item.vat
											}+${item.price}`}
										>
											{item.name}
										</Link>
									);
								})}
							</Dropdown.Menu>
						</Dropdown>
					)}
					{props.display && (
						<div>
							<Dropdown className="mb-3 w-100">
								<label htmlFor="phone" className="Label">
									Choose Area:
								</label>
								<Dropdown.Toggle
									id="dropdown-basic"
									className={`
								outerWrapperDropDownRequestACallBack FormsInputFieldsDatePicker
								${ValidationArea ? "borderColorRedDropDown" : "borderColorDropDown"}
								`}
								>
									{Area}
								</Dropdown.Toggle>
								<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu OuterWrapperDropDown">
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
											if (InputData === "") {
												return val;
											} else if (
												val.name.toLowerCase().includes(InputData.toLowerCase())
											) {
												return val;
											}
										}).map((item, index) => {
											let selected = false;
											if (IndexSelectedDropDown === index) {
												selected = true;
											}
											return (
												<Dropdown.Item
													key={index}
													className="DropDownLabel"
													style={{ color: selected ? "#FFBB00" : "" }}
													onClick={() => {
														setIndexSelectedDropDown(index);
														setArea(item.name);
														setValidationArea(false);
													}}
												>
													{item.name}
												</Dropdown.Item>
											);
										})}
									</div>
								</Dropdown.Menu>
							</Dropdown>
							<Form.Group className="mb-3" controlId="validationCustom02">
								<label htmlFor="phone" className="Label">
									Address:
								</label>
								<Form.Control
									required
									type="text"
									placeholder="Address"
									name="location"
									value={values.location}
									onChange={handleInputChange}
									className="FormsInputFieldsDatePicker"
								/>
								<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
							</Form.Group>
						</div>
					)}

					<Form.Group controlId="validationCustom03">
						<label htmlFor="phone" className="Label">
							Instruction:
						</label>
						<Form.Control
							as="textarea"
							placeholder="Instruction..."
							name="instruction"
							value={values.instruction}
							onChange={handleInputChange}
							className="FormsInputFieldsDatePicker"
						/>
						<Form.Control.Feedback type="invalid">
							Please provide a valid city.
						</Form.Control.Feedback>
					</Form.Group>
					{!props.display && (
						<Form.Group controlId="validationCustom03">
							<label htmlFor="phone" className="Label">
								suggestion:
							</label>
							<Form.Control
								as="textarea"
								placeholder="We want to serve you better and are committed to continuously improving our client service standards. To do this, let us know what you think!"
								required
								style={{ height: "100px" }}
								name="suggestion"
								value={values.suggestion}
								onChange={handleInputChange}
								className="FormsInputFieldsDatePicker"
							/>
							<Form.Control.Feedback type="invalid">
								Please provide a valid city.
							</Form.Control.Feedback>
						</Form.Group>
					)}
					{props.display && (
						<div className="d-flex align-items-center Gap">
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
						</div>
					)}
					{props.display && (
						<div className="d-flex flex-column">
							<label htmlFor="phone" className="Label text-center">
								Price Details
							</label>
							<div className="FormsInputFieldsDatePicker ContentPriceDetails FontWeight">
								<div className="d-flex justify-content-between pb-2">
									<p>HOUR PRICE</p>
									<p>{HourPrise}</p>
								</div>
								<div className="d-flex justify-content-between pb-2">
									<p>HOUR</p>
									{/* {VatValue} */}
									<p>{Hours}</p>
								</div>
								<div className="d-flex justify-content-between">
									<p>TOTAL PRICE</p>
									<p style={{ color: "#FFBB00" }}>{PriceValue}</p>
									{/* <p style={{ color: "#FFBB00" }}>{PriceValue + VatValue}</p> */}
								</div>
							</div>
						</div>
					)}
					<div className="d-none">
						<textarea
							name="message"
							value={`Name: ${values.name} 
										        Email:          ${values.email} 
														Phone:          ${Phone} 
                            Address:        ${values.location} 
													  Date:           ${DateValue} 
														Area:           ${Area} 
														Hours:          ${Hours}
														Time:           ${BookingTime}
													  Service:        ${Service}
                            Message:        ${values.instruction} 
													  suggestion:     ${values.suggestion}
														TotalPrice:     ${PriceValue}
														SubmittedFrom:  ${props.submitFormFrom}
														`}
							onChange={() => {
								console.log("Onchange");
							}}
						/>
					</div>
					<Button
						className="w-100 BookServiceButtons mt-3 BackGroundColor"
						type="submit"
					>
						Submit
					</Button>
				</div>
			</div>
		</Form>
	);
};

export default FormContentUs;
