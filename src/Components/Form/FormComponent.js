import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { Button, Dropdown, Form, Row } from "react-bootstrap";
import { AreaArray, HoursData, ServicesArray } from "../../Data";
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
	message: "",
	instruction: "",
	suggestion: "",
};
const FormContentUs = () => {
	const [Name, setName] = useState("");
	const [Email, setEmail] = useState("");
	const [Message, setMessage] = useState("");
	const [Address, setAddress] = useState("");
	const [DisplayDropDownArea, setDisplayDropDownArea] = useState(false);

	const [DisplayDropDownHours, setDisplayDropDownHours] = useState(false);
	const [IndexSelectedDropDownHours, setIndexSelectedDropDownHours] =
		useState(0);
	const [PriceDefaultValue, setPriceDefaultValue] = useState(115);
	const [VatDefaultValue, setVatDefaultValue] = useState(5);
	const [Content, setContent] = useState("");
	const [RedirectToThanPage, setRedirectToThanPage] = useState(false);
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

	const [validated, setValidated] = useState(false);
	const [ServiceInputField, setServiceInputField] = useState("service..");
	const [Hours, setHours] = useState(0);
	const [Area, setArea] = useState("Area..");
	const [InputData, setInputData] = useState("");
	const [IndexSelectedDropDown, setIndexSelectedDropDown] = useState(0);
	const [values, setValues] = useState(HeaderInitialValues);
	const [Phone, setPhone] = useState();
	const [DateValue, setDateValue] = useState(new Date());
	const [PriceValue, setPriceValue] = useState(0);
	const [VatValue, setVatValue] = useState(0);
	const [Service, setService] = useState("Choose Service");
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
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
		}
		setValidated(true);
	};
	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
			<div className="mb-3 d-flex Gap-22">
				<div className="w-50">
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
							// style={{ borderColor: ValidationPhone ? "red" : "" }}
							value={Phone}
							onChange={(value) => {
								setPhone(value);
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
					<Dropdown className="mb-3 w-100">
						<label htmlFor="phone" className="Label">
							How many hours do you need your professional to stay?:
						</label>
						<Dropdown.Toggle
							id="dropdown-basic"
							className="outerWrapperDropDownRequestACallBack FormsInputFieldsDatePicker"
						>
							{Hours}
						</Dropdown.Toggle>
						<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu">
							{HoursData.map((item, index) => {
								return (
									<Dropdown.Item
										key={index}
										href={`#/action-${index}`}
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
				<div className="w-50">
					<Form.Group className="mb-3" controlId="validationCustom02">
						<label htmlFor="phone" className="Label">
							Location:
						</label>
						<Form.Control
							required
							type="text"
							placeholder="Location"
							name="location"
							value={values.location}
							onChange={handleInputChange}
							className="FormsInputFieldsDatePicker"
						/>
						<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
					</Form.Group>
					<Dropdown className="mb-3 w-100">
						<label htmlFor="phone" className="Label">
							Choose Services:
						</label>
						<Dropdown.Toggle
							id="dropdown-basic"
							className="outerWrapperDropDownRequestACallBack FormsInputFieldsDatePicker"
						>
							{ServiceInputField}
						</Dropdown.Toggle>
						<Dropdown.Menu className="outerWrapperDropDownRequestACallBackMenu">
							{ServicesArray.map((item, index) => {
								return (
									<Dropdown.Item
										key={index}
										href={`#/action-${index}`}
										onClick={() => {
											setServiceInputField(item.name);
										}}
									>
										{item.name}
									</Dropdown.Item>
								);
							})}
						</Dropdown.Menu>
					</Dropdown>
					<Dropdown className="mb-3 w-100">
						<label htmlFor="phone" className="Label">
							Choose Area:
						</label>
						<Dropdown.Toggle
							id="dropdown-basic"
							className="outerWrapperDropDownRequestACallBack FormsInputFieldsDatePicker"
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
									if (InputData == "") {
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
											}}
											href={`#/action-${index}`}
										>
											{item.name}
										</Dropdown.Item>
									);
								})}
							</div>
						</Dropdown.Menu>
					</Dropdown>
					<Form.Group controlId="validationCustom03">
						<label htmlFor="phone" className="Label">
							Instruction:
						</label>
						<Form.Control
							as="textarea"
							placeholder="Instruction..."
							required
							name="instruction"
							value={values.instruction}
							onChange={handleInputChange}
							className="FormsInputFieldsDatePicker"
						/>
						<Form.Control.Feedback type="invalid">
							Please provide a valid city.
						</Form.Control.Feedback>
					</Form.Group>
					<Form.Group controlId="validationCustom03">
						<Form.Label>Suggestion & Complaints</Form.Label>
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
								<p style={{ color: "#FFBB00" }}>{PriceValue + VatValue}</p>
							</div>
						</div>
						<div>
							<div>
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
							</div>
						</div>
					</div>
					<Button
						className="w-100 BookServiceButtons BackGroundColor"
						type="submit"
					>
						<div className="d-none">
							<textarea
								name="message"
								value={`Name: ${values.name} Email: ${values.email} Phone: ${values.phone} 
              Location: ${values.location}  Service: ${values.service}
              Message: ${values.message} `}
								onChange={() => {
									console.log("Onchange");
								}}
							/>
						</div>
						Submit
					</Button>
				</div>
			</div>
		</Form>
	);
};

export default FormContentUs;
