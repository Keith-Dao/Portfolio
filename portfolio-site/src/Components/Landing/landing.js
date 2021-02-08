import React from "react";
import "./landing.css";

const Landing = () => {
	const num_arrows = 2;
	return (
		<div id="landing-page">
			<div id="title">
				<div className="title-wrapper">
					<h1>Keith Dao</h1>
					<h2>Computer Science Undergraduate</h2>
				</div>
			</div>
			<div id="scroll-btn">
				<a href="#content" aria-label="Jump to content">
					{[...Array(num_arrows * 2)].map((e, i) => (
						<div className="down arrow" key={`arrow-${i}`} />
					))}
				</a>
			</div>
		</div>
	);
};

export default Landing;
