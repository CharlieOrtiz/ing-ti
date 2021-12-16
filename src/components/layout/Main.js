import React from "react";
import Us from "./Us";
import Services from "./Services";
import Contact from "./Contact";
import Clients from "./Clients";
import { Routes, Route } from "react-router-dom";

export default function Main() {
	return (
		<div>
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
