import React from "react";
import "./App.css";
import "./Components/Main Styles/main.css";
// React components
import Landing from "./Components/Landing/landing";
import NavBar from "./Components/Navbar/nav";
import Footer from "./Components/Footer/footer";
import Content from "./Components/Content/content";
import Project from "./Components/Content/projects";
import Education from "./Components/Content/education";

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
			header: "social",
			content: <div>This is where the social media links would go.</div>,
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
			<Footer />
		</div>
	);
};

export default App;
