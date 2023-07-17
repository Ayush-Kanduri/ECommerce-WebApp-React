import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faCircleMinus,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default class CartItem extends Component {
	constructor() {
		super();
		this.state = {
			price: 999,
			title: "Mobile Phone",
			qty: 1,
			img: "",
		};
		this.testing1();
		this.testing2();
	}
	testing1 = () => {
		// Inside Event Handler Functions //
		/**
			@StateObject - It doesn't re-render. // (State {qty: 1})
			this.state.qty += 10;
			console.log("State Object", this.state);

			Output:
			State Object {price: 999, title: "Mobile Phone", qty: 11, img: ""}
			Render
		**/
		/**
			@Form1 - Re-Renders Only Once, Asynchronous Nature, Value of Last Call Only 
			this.setState({ qty: this.state.qty + 1 });
			this.setState({ qty: this.state.qty + 2 });
			this.setState({ qty: this.state.qty + 3 }); // (1) + 3 = 4 (State {qty: 4})
			console.log("State Object", this.state);
			
			Output:
			Render
			State Object {price: 999, title: "Mobile Phone", qty: 1, img: ""}
			Render
		 **/
		/**
			@Form2 - Re-Renders Only Once, Asynchronous Nature, Value of All Calls Combined
			this.setState((prev) => { return { qty: prev.qty + 1 }; });
			this.setState((prev) => { return { qty: prev.qty + 2 }; });
			this.setState((prev) => { return { qty: prev.qty + 3 }; }); // (1) + 1 + 2 + 3 = 7 (State {qty: 7})
			console.log("State Object", this.state);
			
			Output:
			Render
			State Object {price: 999, title: "Mobile Phone", qty: 1, img: ""}
			Render
		**/
	};
	testing2 = () => {
		// Inside Promises & AJAX //
		/**
			@Form1 - Re-Renders Only Once, Asynchronous Nature, Value of Last Call Only 
			const promise = new Promise((resolve, reject) => {
				setTimeout(() => { resolve("done"); }, 5000);
			});
			promise.then(() => {
				this.setState({ qty: this.state.qty + 10 });
				this.setState({ qty: this.state.qty + 10 });
				this.setState({ qty: this.state.qty + 10 }); // (1) + 10 = 11 (State {qty: 11})
				console.log("State Object", this.state);
			});

			Output:
			Render
			State Object {price: 999, title: "Mobile Phone", qty: 1, img: ""}
			Render
		 **/
		/**
			@Form2 - Re-Renders Only Once, Asynchronous Nature, Value of All Calls Combined
			const promise = new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve("done");
				}, 5000);
			});

			promise.then(() => {
				this.setState((prev) => { return { qty: prev.qty + 1 }; });
				this.setState((prev) => { return { qty: prev.qty + 2 }; });
				this.setState((prev) => { return { qty: prev.qty + 3 }; }); // (1) + 1 + 2 + 3 = 7 (State {qty: 1})
				console.log("State Object", this.state);
			});
			
			Output:
			Render
			State Object {price: 999, title: "Mobile Phone", qty: 1, img: ""}
			Render
		**/
	};
	increaseQuantity = () => {
		this.setState((prev) => {
			return { qty: prev.qty + 1 };
		});
	};
	decreaseQuantity = () => {
		const { qty } = this.state;
		if (qty === 0) return;
		this.setState((prev) => {
			return { qty: prev.qty - 1 };
		});
	};
	deleteProduct = () => {};
	render() {
		const { title, qty, img, price } = this.state;
		console.log("Render");
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} src={img} alt="" />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25 }}>Product: {title}</div>
					<div style={{ color: "#777" }}>Price: Rs.{price}</div>
					<div style={{ color: "#777" }}>Quantity: {qty}</div>
					<div className="cart-item-actions">
						<FontAwesomeIcon
							icon={faCirclePlus}
							onClick={this.increaseQuantity}
							className="action-icons"
						/>
						<FontAwesomeIcon
							icon={faCircleMinus}
							onClick={this.decreaseQuantity}
							className="action-icons"
						/>
						<FontAwesomeIcon
							icon={faTrashCan}
							onClick={this.deleteProduct}
							className="action-icons"
						/>
						{/* Buttons */}
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: "#ccc",
	},
};
