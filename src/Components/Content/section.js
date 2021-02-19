import React from "react";

const Section = (props) => {
	return (
		<div className="section-wrapper" id={props.header.replace(" ", () => "-")}>
			<div className="section">
				<div className="section-title">
					{props.header.replace(/\b\w/g, (l) => l.toUpperCase())}
				</div>
				<div className="section-content">{props.content}</div>
			</div>
		</div>
	);
};

export default Section;
