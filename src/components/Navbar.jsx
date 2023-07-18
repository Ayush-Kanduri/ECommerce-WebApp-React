const Navbar = (props) => {
	const { faCartShopping, FontAwesomeIcon } = props.icons;
	return (
		<div style={styles.nav}>
			<div style={styles.cartIconContainer}>
				<FontAwesomeIcon icon={faCartShopping} style={styles.cartIcon} />
				<span style={styles.cartCount}>3</span>
			</div>
		</div>
	);
};

const styles = {
	cartIcon: {
		height: 32,
		marginRight: 20,
		color: "rgb(255, 255, 255)",
	},
	nav: {
		height: 70,
		background: "rgb(0, 0, 0)",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
	},
	cartIconContainer: {
		position: "relative",
		marginRight: 15,
	},
	cartCount: {
		background: "rgb(156, 237, 232)",
		color: "black",
		fontWeight: "bolder",
		borderRadius: "50%",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		width: 25,
		height: 25,
		textAlign: "center",
		right: 0,
		top: -9,
	},
};

export default Navbar;
