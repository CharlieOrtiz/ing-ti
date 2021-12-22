import React from "react";
import Us from "../Sections/Us";
import Services from "../Sections/Services";
import Contact from "../Sections/Contact";
import Clients from "../Sections/Clients";
import { Routes, Route } from "react-router-dom";

export default function Main() {
	return (
		<div className="container-medium main-container">
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<h2>Landing page</h2>
						</div>
					}
				/>
				<Route path="nosotros" element={<Us />} />
				<Route path="servicios" element={<Services />} />
				<Route path="clientes" element={<Clients />} />
				<Route path="contacto" element={<Contact />} />
			</Routes>
		</div>
	);
}
