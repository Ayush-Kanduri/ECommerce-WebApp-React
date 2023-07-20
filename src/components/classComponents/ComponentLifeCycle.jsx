import React, { Component } from "react";

export default class ComponentLifeCycle extends Component {
	constructor() {
		super();
		/**
		 * @function constructor
		 * @description constructor() method is called when the component is first created
		 * @timing constructor() method is called just before the render()
		 * @application Initialize the component's state and bind methods to the component's instance
		 **/
		console.log("CONSTRUCTOR");
	}
	componentDidMount() {
		/**
		 * @function componentDidMount
		 * @description componentDidMount() method is called for only once for the very first time the component is Rendered & will not be called agin on any Re-Renders
		 * @timing componentDidMount() method is called just after the render()
		 * @phase Mounting Phase
		 * @application API Calls, Timers, Event Listeners, Subscribers
		 **/
		console.log("COMPONENT DID MOUNT");
	}
	render() {
		console.log("RENDER");
		return <></>;
	}
}
