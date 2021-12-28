import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header className="header container-medium">
			<nav className="nav">
				<div>
					<Link to="/">
						<h1>LOGO</h1>
					</Link>
				</div>
				<ul>
					<li>
						<Link to="/nosotros" className="nav-link">
							Nosotros
						</Link>
					</li>
					<li>
						<Link to="/servicios" className="nav-link">
							Servicios
						</Link>
					</li>
					<li>
						<Link to="/clientes" className="nav-link">
							Clientes
						</Link>
					</li>
					<li>
						<Link to="/contacto" className="nav-link">
							Contacto
						</Link>
					</li>
					<li>
						<Link to="/soporte" className="nav-link">
							Soporte
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
