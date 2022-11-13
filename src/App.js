import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Components/Routing";
import whatsapp from "./assets/whatsapp.png";
import phone from "./assets/phone.png";
function App(props) {
	return (
		<div className="fontFamily">
			<BrowserRouter>
				<Routing />
			</BrowserRouter>
			<div className="whatsappIcon position-fixed">
				<a
					href="https://web.whatsapp.com"
					rel="nofollow noopener"
					target="_blank"
					className="text-decoration-none text-white"
				>
					<img src={whatsapp} alt="teamwork" style={{ width: "56px" }} />
				</a>
			</div>
			<div className="PhoneIcon position-fixed">
				<a href="tel:+923313571616">
					<img src={phone} alt="teamwork" style={{ width: "56px" }} />
				</a>
			</div>
		</div>
	);
}

export default App;
