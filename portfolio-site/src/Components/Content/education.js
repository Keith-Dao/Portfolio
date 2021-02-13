import React from "react";
import "./education.css";

// Pictures
import mansfield from "./images/mansfield.png";
import uq from "./images/uq.png";

// Education list
const education = [
	{
		name: "Secondary Education",
		location: "Mansfield State High School",
		years: "2014 - 2018",
		image: mansfield,
	},
	{
		name: "Bachelor of Computer Science (Machine Learning)",
		location: "University of Queensland",
		years: "2019 - present",
		image: uq,
	},
];

// JSX Components
const Course = ({ name, years, location, image }) => {
	return (
		<div className="course-wrapper">
			<img src={image} className="course-image" alt={`${location} logo`} />
			<div className="info-wrapper">
				<div className="vertical-center">
					<h1 className="course-name">{name}</h1>
					<h2 className="course-location">{location}</h2>
					<p className="course-duration">{years}</p>
				</div>
			</div>
		</div>
	);
};

const Education = () => {
	return (
		<div id="education-wrapper">
			{education.map((course) => (
				<Course
					name={course.name}
					location={course.location}
					years={course.years}
					image={course.image}
					key={course.name}
				/>
			))}
		</div>
	);
};

export default Education;
