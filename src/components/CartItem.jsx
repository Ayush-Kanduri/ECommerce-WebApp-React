const CartItem = (props) => {
	const { products, product } = props;
	const { id, title, quantity, image, price, category } = product;
	const { increaseQuantity, decreaseQuantity, deleteProduct, setProducts } = props;
	const { faCirclePlus, faCircleMinus, faTrashCan, FontAwesomeIcon } = props.icons;
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
						onClick={() => increaseQuantity(id, products, setProducts)}
						className="action-icons"
					/>
					<FontAwesomeIcon
						icon={faCircleMinus}
						onClick={() => decreaseQuantity(id, products, setProducts)}
						className={`action-icons ${quantity === 0 ? "shake" : ""}`}
					/>
					<FontAwesomeIcon
						icon={faTrashCan}
						onClick={() => deleteProduct(id, products, setProducts)}
						className="action-icons"
					/>
					{/* Buttons */}
				</div>
			</div>
		</div>
	);
};

export default CartItem;

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
