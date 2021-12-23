import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { values } from "../../static/data";
import misionImage from "../../img/layout/Us/ti-mision.jpg";
import visionImage from "../../img/layout/Us/ti-vision.jpg";

export default function Us() {
	const valuesContainer = useRef();
	const [valuesOnScreen, setValuesOnScreen] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(function (entries) {
			if (entries[0].isIntersecting === true) {
				setValuesOnScreen(true);
			}
		}, { threshold: [1] });

		observer.observe(valuesContainer.current);
	}, [valuesOnScreen]);


	return (
		<>
			<Header title="Nosotros" />
			<div className="us-container">
				<div className="us-subsection">
					<div>
						<h3>¿Quiénes somos?</h3>
						<p>
							Somos una empresa especializada en innovación donde buscamos
							ofrecer valor a nuestros usuarios, con la finalidad de crear
							socios de negocios con los cuales buscamos crear relaciones a
							largo plazo, más que un vínculo cliente-proveedor.
						</p>
					</div>
				</div>
				<div className="us-subsection">
					<div className="us-img">
						<img src={misionImage} alt="Mision ITI" />
					</div>
					<div className="us-description">
						<h3>Misión</h3>
						<p>
							Favorecer y potenciar el éxito de nuestros usuarios, por medio de
							soluciones tecnológicas y administrativas, ofreciendo una opción
							laboral que genere a los especialistas en este campo la
							oportunidad de desarrollarse profesionalmente y generar riqueza
							permitiéndolos competir con herramientas suficientes,
							asegurándoles un rápido retorno de inversión.
						</p>
					</div>
				</div>
				<div className="us-subsection">
					<div className="us-img">
						<img src={visionImage} alt="Vision ITI" />
					</div>
					<div className="us-description">
						<h3>Visión</h3>
						<p>
							Ser una empresa líder en cuanto a la comprensión de las
							necesidades de nuestros clientes, buscamos revolucionar la manera
							de ofrecer tecnología y servicios asociados hacia el mercado por
							medio de socios de negocios.
						</p>
					</div>
				</div>
				<div className="us-subsection">
					<div className="values-container" ref={valuesContainer}>
						<h3>Valores</h3>
						<ul className={`two-items-column ${valuesOnScreen ? 'values-on-screen' : ''}`}>
							{
								values.map((val, index) => (
									<li key={index}>
										<h5 className="value-name">{val.name}</h5>
									</li>
								))
							}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
