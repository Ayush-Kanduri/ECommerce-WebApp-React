import React from "react";

const Footer = (props) => (
	<div style={styles}>
		{"Total".toLocaleUpperCase()}: &nbsp;
		{new Intl.NumberFormat("en-IN", {
			currency: "INR",
			style: "currency",
		}).format(props.total)}
	</div>
);

const styles = {
	height: 70,
	background: "rgb(0, 0, 0)",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	color: "white",
	fontWeight: "bolder",
	padding: 30,
	fontSize: "1.5rem",
};

export default Footer;
