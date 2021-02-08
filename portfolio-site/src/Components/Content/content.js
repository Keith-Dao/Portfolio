import React from "react";
import Section from "./section";
import "./content.css";

const Content = ({ sections }) => {
	return (
		<div id="content">
			{sections
				.filter((section) => section.content != null)
				.map((section) => (
					<Section
						key={"section_" + section.header}
						header={section.header}
						content={section.content}
					/>
				))}
		</div>
	);
};

export default Content;
