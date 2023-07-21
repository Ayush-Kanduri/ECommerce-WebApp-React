import React, { Component } from "react";

export default class ComponentLifeCycle extends Component {
	constructor() {
		super();
		this.state = {
			count: 0,
		};
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
	componentDidUpdate(prevProps, prevState) {
		/**
		 * @function componentDidUpdate
		 * @description componentDidUpdate() method is not called initially when the application is loaded but will be called after every State Update (After the Re-Render)
		 * @timing componentDidUpdate() method is called just after the render()
		 * @phase Updating Phase
		 * @application To fetch the FriendsList if we go to a User's Profile without even destroying the UserProfile Component
		 * @Drawback1 Infinite Loop
                    this.setState({ count: 100 });
		 * @Drawback2 Conditional State Update
                    if(prevState.count===0 && this.state.count===1) this.setState({count:100})
		 **/
		console.log("COMPONENT DID UPDATE");
		console.log("--------------------");
		console.log("Previous Props: ", prevProps);
		console.log("Current Props: ", this.props);
		console.log("Previous State: ", prevState);
		console.log("Current State: ", this.state);
		console.log("--------------------");
	}
	componentWillUnmount() {
		/**
		 * @function componentWillUnmount
		 * @description componentWillUnmount() method is called when the component is destroyed/unmounted.
		 * @timing componentDidUpdate() method is called just before the component is removed from the DOM. All of its state and props are destroyed as well
		 * @phase Unmounting Phase
		 * @application Perform Cleanup (Cancel Pending API Calls, Un-Subscribers, Stop Timers, Detach Event Listeners)
		 **/
		console.log("COMPONENT DID UNMOUNT/DESTROYED");
	}
	handleClick = (e) => {
		this.setState((prev) => {
			return {
				count: prev.count + 1,
			};
		});
	};
	render() {
		console.log("RENDER");
		return (
			<div style={styles.app}>
				{this.state.count}
				<button style={styles.button} onClick={this.handleClick}>
					Increment Counter
				</button>
			</div>
		);
	}
}

const styles = {
	app: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		paddingTop: "9rem",
		alignItems: "center",
		height: "100vh",
		width: "100vw",
		backgroundColor: "#282c34",
		fontSize: "2rem",
		gap: "1rem",
		color: "white",
	},
	button: {
		backgroundColor: "#000000",
		border: "none",
		borderRadius: 10,
		color: "white",
		padding: "15px 32px",
		textAlign: "center",
		textDecoration: "none",
		display: "inline-block",
		fontSize: "16px",
		margin: "4px 2px",
		cursor: "pointer",
	},
};
