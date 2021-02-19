import React from "react";
import "./social.css";
// Pictures
import github from "./images/github.png";
import linkedin from "./images/linkedin.png";

const socials = [
	{ image: github, link: "https://github.com/Keith-Dao", site: "GitHub" },
	{
		image: linkedin,
		link: "https://www.linkedin.com/in/keith-dao-b3b919206/",
		site: "LinkedIn",
	},
];

const Social = () => {
	return (
		<div id="social-wrapper">
			{socials.map((social) => (
				<div className="social-link" key={social.site}>
					<a href={social.link} target="_blank" rel="noreferrer">
						<img src={social.image} alt={`${social.site} logo`} />
					</a>
				</div>
			))}
		</div>
	);
};

export default Social;
