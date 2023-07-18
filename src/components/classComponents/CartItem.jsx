import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faCircleMinus,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default class CartItem extends Component {
	render() {
		const { id, title, quantity, image, price, category } = this.props.product;
		const { increaseQuantity, decreaseQuantity, deleteProduct } = this.props;
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} src={image} alt="" />
				</div>
				<div className="right-block">
					<div className="title" style={{ ...styles.font1, fontSize: 25 }}>
						{title}
					</div>
					<div
						className="category"
						style={{ ...styles.font2, color: "#000000" }}
					>
						Category: {category}
					</div>
					<div style={{ ...styles.font2, color: "#000000" }}>
						Price:{" "}
						{new Intl.NumberFormat("en-IN", {
							currency: "INR",
							style: "currency",
						}).format(price)}
					</div>
					<div style={{ ...styles.font2, color: "#000000" }}>
						Quantity: {quantity}
					</div>
					<div className="cart-item-actions">
						<FontAwesomeIcon
							icon={faCirclePlus}
							onClick={() => increaseQuantity(id)}
							className="action-icons"
						/>
						<FontAwesomeIcon
							icon={faCircleMinus}
							onClick={() => decreaseQuantity(id)}
							className={`action-icons ${
								quantity === 0 ? "shake" : ""
							}`}
						/>
						<FontAwesomeIcon
							icon={faTrashCan}
							onClick={() => deleteProduct(id)}
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
		width: 170,
		borderRadius: 10,
		background: "white",
		margin: "auto",
		objectFit: "contain",
		objectPosition: "center",
	},
	font1: {
		fontWeight: 600,
		fontFamily: "var(--font1)",
	},
	font2: {
		fontWeight: 500,
		fontFamily: "var(--font2)",
	},
};
