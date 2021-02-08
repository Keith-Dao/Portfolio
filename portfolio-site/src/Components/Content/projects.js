import React, { useState, useEffect, useRef } from "react";
import "./projects.css";

// Pictures
import picture from "./images/test.png";
import picture2 from "./images/test2.png";

const projects = [
	{
		name: "Placeholder project 1",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis vitae nulla rutrum accumsan. Ut in molestie mauris.",
		link: "https://www.google.com",
		image: picture,
	},
	{
		name: "Placeholder project 2",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis vitae nulla rutrum accumsan. Ut in molestie mauris.",
		link: "https://www.youtube.com",
		image: picture2,
		theme: "dark",
	},
	{
		name: "Placeholder project 3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in turpis vitae nulla rutrum accumsan. Ut in molestie mauris.",
		link: "https://www.youtube.com",
		image: "",
		theme: "dark",
	},
];

// Layout Selector
const LayoutSelector = ({ toggleLayout, showSlideShow }) => {
	return (
		<div id="layout-selector">
			<label>
				<div className="toggle">
					<input
						type="checkbox"
						className="toggle-state"
						onClick={toggleLayout}
					/>
					<div className="toggle-indicator" />
				</div>
				<div className="label-text">
					{showSlideShow ? "Slide Show" : "Grid"}
				</div>
			</label>
		</div>
	);
};

// Slide show
const SlideShow = ({ showSlideShow, projects, setSlideIndex, slideIndex }) => {
	return (
		<div
			id="slideshow-wrapper"
			className={showSlideShow ? "" : "hide"}
			style={{ backgroundImage: `url(${projects[slideIndex].image})` }}
		>
			<img
				src={projects[slideIndex].image}
				alt={`${projects[slideIndex].name} screenshot`}
			/>
			<div id="slideshow-controller" className={projects[slideIndex].theme}>
				<div className="slideshow-arrow-wrapper">
					<div
						className="slideshow-arrow back"
						onClick={() => {
							setSlideIndex(
								(slideIndex - 1 + projects.length) % projects.length
							);
						}}
					/>
				</div>
				<div id="slideshow-description-wrapper">
					<div id="slideshow-title">{projects[slideIndex].name}</div>
					<div id="slideshow-description">
						{projects[slideIndex].description}
					</div>
					<div id="slideshow-link-wrapper">
						<a
							id="slideshow-link"
							href={projects[slideIndex].link}
							target="_blank"
							rel="noreferrer"
						>
							Click to view project
						</a>
					</div>
				</div>
				<div className="slideshow-arrow-wrapper">
					<div
						className="slideshow-arrow forward"
						onClick={() => {
							setSlideIndex((slideIndex + 1) % projects.length);
						}}
					/>
				</div>
				<div id="slideshow-jumper-wrapper">
					{projects.map((project, index) => {
						return (
							<div
								className={
									index === slideIndex
										? "slideshow-jumper slide-active"
										: "slideshow-jumper"
								}
								key={project.name}
								onClick={() => {
									setSlideIndex(index);
								}}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

// Grid
const Grid = ({ showSlideShow, projects }) => {
	const grid_item_width = 5;
	return (
		<div id="grid-wrapper" className={showSlideShow ? "hide" : ""}>
			{projects.map((project, index) => {
				return (
					<div key={`project-${index}`} className="project-wrapper">
						<div className="project-title">
							<h2>{project.name}</h2>
						</div>
						<img
							className="project-image"
							src={project.image}
							alt={`${project.name} screenshot`}
						/>
						<div className="project-description">{project.description}</div>
						<div className="project-link-wrapper">
							<a className="project-link" href={project.link}>
								Click to view project
							</a>
						</div>
					</div>
				);
			})}
			{[...Array(grid_item_width - 1)].map((e, i) => {
				return <div className="grid-placeholder" key={`placeholder-${i}`} />;
			})}
		</div>
	);
};

// Project section
const Project = () => {
	// Slideshow
	const [slideIndex, setSlideIndex] = useState(0);
	const [showSlideShow, toggleSlideShow] = useState(true);

	// Toggle between slide show and grid
	const toggleLayout = () => {
		if (!showSlideShow) {
			setSlideIndex(0);
		}
		toggleSlideShow((prev) => !prev);
	};

	// Automatic slide changer
	let slideShowInterval = useRef();
	const startSlideShowTimer = () => {
		const slideShowDuration = 10000; // In milliseconds
		slideShowInterval = setInterval(() => {
			setSlideIndex((slideIndex + 1) % projects.length);
		}, slideShowDuration);
	};

	// Setup timer on startup
	useEffect(() => {
		if (showSlideShow) {
			startSlideShowTimer();
			return () => {
				clearInterval(slideShowInterval);
			};
		}
	});

	return (
		<div id="project-wrapper">
			{/* Layout Selector */}
			<LayoutSelector
				toggleLayout={toggleLayout}
				showSlideShow={showSlideShow}
			/>
			{/* Slide Show */}
			<SlideShow
				showSlideShow={showSlideShow}
				projects={projects}
				setSlideIndex={setSlideIndex}
				slideIndex={slideIndex}
			/>
			{/* Grid */}
			<Grid showSlideShow={showSlideShow} projects={projects} />
		</div>
	);
};

export default Project;
