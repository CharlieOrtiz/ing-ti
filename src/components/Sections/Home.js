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
			<Particles
				id="tsparticles"
				options={particlesConfig}
			/>
		</>
	);
}
