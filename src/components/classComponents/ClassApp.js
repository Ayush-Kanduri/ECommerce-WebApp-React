import React, { Component } from "react";
import ComponentLifeCycle from "./ComponentLifeCycle";

export default class ClassApp extends Component {
	render() {
		return (
			<div className="App">
				<ComponentLifeCycle />
			</div>
		);
	}
}
