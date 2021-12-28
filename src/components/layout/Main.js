import React from "react";
import Home from "../Sections/Home";
import Us from "../Sections/Us";
import Services from "../Sections/Services";
import Contact from "../Sections/Contact";
import Clients from "../Sections/Clients";
import Support from "../Support/Support";
import { Routes, Route, useLocation } from "react-router-dom";

export default function Main(props) {
	const location = useLocation();
	
	return (
		<div
			className={`container-medium main-container ${
				location.pathname === "/" && "landing-container"
			} ${location.pathname == "/soporte" && "support-container"}`}
		>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="nosotros" element={<Us />} />
				<Route path="servicios" element={<Services />} />
				<Route path="clientes" element={<Clients />} />
				<Route path="contacto" element={<Contact />} />
				<Route path="soporte" element={<Support />} />
			</Routes>
		</div>
	);
}
