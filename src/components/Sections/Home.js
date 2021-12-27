import React from "react";
import Particles from "react-tsparticles";
import particlesConfig from "../../static/particles-config";

export default function Home() {
	const particlesInit = (main) => {
		console.log(main);
	};

	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<>
			<div className="container banner-text-container">
				<h1>
					Brindamos asesoría en materia de contabilidad gubernamental.
				</h1>
				<p>
					Implementamos las reglas de operación necesarias para la
					implantación y el cumplimiento de las reglas de la contabilidad
					gubernamental, dictadas por la CONAC.
				</p>
			</div>
			<Particles id="tsparticles" options={particlesConfig} />
		</>
	);
}
