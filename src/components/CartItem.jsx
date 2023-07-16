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
	}
	increaseQuantity = () => {
		console.log("this", this.state);
	};
	decreaseQuantity = () => {};
	deleteProduct = () => {};
	render() {
		const { title, qty, img, price } = this.state;
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
