import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faCircleMinus,
	faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

export default class CartItem extends Component {
	render() {
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} src="" alt="" />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25 }}>Product: Phone</div>
					<div style={{ color: "#777" }}>Price: Rs.999</div>
					<div style={{ color: "#777" }}>Quantity: 1</div>
					<div className="cart-item-actions">
						<FontAwesomeIcon
							icon={faCirclePlus}
							className="action-icons"
						/>
						<FontAwesomeIcon
							icon={faCircleMinus}
							className="action-icons"
						/>
						<FontAwesomeIcon
							icon={faTrashCan}
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
