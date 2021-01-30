import React, { useState, useEffect, useRef } from "react";
import "./projects.css";

// Layout Selector
const LayoutSelector = (props) => {
	return (
		<div id="layout-selector">
			<label>
				<div className="toggle">
					<input
						type="checkbox"
						className="toggle-state"
						onClick={props.toggleLayout}
					/>
					<div className="toggle-indicator" />
				</div>
				<div className="label-text">
					{props.showSlideShow ? "Slide Show" : "Grid"}
				</div>
			</label>
		</div>
	);
};

// Slide show
const SlideShow = (props) => {
	let slideIndex = props.slideIndex;
	let setSlideIndex = props.setSlideIndex;
	return (
		<div
			id="slideshow-wrapper"
			className={props.showSlideShow ? "" : "hide"}
			style={{ backgroundImage: `url(${props.projects[slideIndex].image})` }}
		>
			<img src={props.projects[slideIndex].image} alt="project screenshot" />
			<div
				id="slideshow-controller"
				className={props.projects[slideIndex].theme}
			>
				<div className="slideshow-arrow-wrapper">
					<div
						className="slideshow-arrow back"
						onClick={() => {
							setSlideIndex(
								(slideIndex - 1 + props.projects.length) % props.projects.length
							);
						}}
					/>
				</div>
				<div id="slideshow-description-wrapper">
					<div id="slideshow-title">{props.projects[slideIndex].name}</div>
					<div id="slideshow-description">
						{props.projects[slideIndex].description}
					</div>
					<div id="slideshow-link-wrapper">
						<a
							id="slideshow-link"
							href={props.projects[slideIndex].link}
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
							setSlideIndex((slideIndex + 1) % props.projects.length);
						}}
					/>
				</div>
				<div id="slideshow-jumper-wrapper">
					{props.projects.map((project, index) => {
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
const Grid = (props) => {
	const grid_item_width = 5;
	return (
		<div id="grid-wrapper" className={props.showSlideShow ? "hide" : ""}>
			{props.projects.map((project, index) => {
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
const Project = (props) => {
	// Slideshow
	const [slideIndex, setSlideIndex] = useState(0);

	// Toggle between slide show and grid
	const toggleLayout = () => {
		if (!props.showSlideShow) {
			setSlideIndex(0);
		}
		props.toggleSlideShow((prev) => !prev);
	};

	// Automatic slide changer
	let slideShowInterval = useRef();
	const startSlideShowTimer = () => {
		const slideShowDuration = 10000; // In milliseconds
		slideShowInterval = setInterval(() => {
			setSlideIndex((slideIndex + 1) % props.projects.length);
		}, slideShowDuration);
	};

	// Setup timer on startup
	useEffect(() => {
		if (props.showSlideShow) {
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
				showSlideShow={props.showSlideShow}
			/>
			{/* Slide Show */}
			<SlideShow
				showSlideShow={props.showSlideShow}
				projects={props.projects}
				setSlideIndex={setSlideIndex}
				slideIndex={slideIndex}
			/>
			{/* Grid */}
			<Grid showSlideShow={props.showSlideShow} projects={props.projects} />
		</div>
	);
};

export default Project;
