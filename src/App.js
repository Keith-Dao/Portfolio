import React from "react";
import "./App.css";
import "./Components/Main Styles/main.css";
// React components
import Landing from "./Components/Landing/landing";
import NavBar from "./Components/Navbar/nav";
import Content from "./Components/Content/content";
import Project from "./Components/Content/projects";
import Education from "./Components/Content/education";
import Social from "./Components/Content/social";

const App = () => {
	const sections = [
		{ header: "landing page" },
		{ header: "view resume", link: "resume.pdf" }, // TODO add the pdf link
		{
			header: "projects",
			content: <Project />,
		},
		{
			header: "education",
			content: <Education />,
		},
		{
			header: "social media",
			content: <Social />,
		},
	];

	return (
		<div className="App">
			<Landing />
			<div id="contents-wrapper">
				<div className="parallax" />
				<NavBar sections={sections} />
				<Content sections={sections} />
			</div>
		</div>
	);
};

export default App;
