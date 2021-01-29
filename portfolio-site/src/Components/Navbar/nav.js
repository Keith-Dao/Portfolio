import React from "react";
import { useState } from "react";
import "./nav.css";

const NavBar = (props) => {
	const [showNav, toggleNav] = useState(false);
	const min_tablet_landscape_width = 768; // In pixels

	const toggleNavVisibility = () => {
		if (window.innerWidth < min_tablet_landscape_width) {
			showNav
				? document.body.classList.remove("scroll-lock")
				: document.body.classList.add("scroll-lock");
			toggleNav((prev) => !prev);
		}
	};

	return (
		<nav id="main-navbar" className={showNav ? "show" : ""}>
			<label id="nav-hamburger-wrapper">
				<button
					id="nav-hamburger"
					onClick={toggleNavVisibility}
					name="nav-button"
					aria-label="nav-button"
				></button>
			</label>
			<div id="nav-links">
				{props.sections.map((section) => (
					<a
						href={
							section.link != null
								? section.link
								: `#${section.header.replace(" ", () => "-")}`
						}
						target={section.link ? "_blank" : ""}
						key={section.header}
					>
						<button
							key={section.header}
							type="button"
							onClick={toggleNavVisibility}
						>
							{section.header.replace(/\b\w/g, (l) => l.toUpperCase())}
						</button>
					</a>
				))}
			</div>
		</nav>
	);
};

export default NavBar;
