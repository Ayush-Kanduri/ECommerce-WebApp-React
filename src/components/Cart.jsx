import CartItem from "./CartItem";

const Cart = (props) => {
	const { icons, products, setProducts } = props;
	const { deleteProduct, increaseQuantity, decreaseQuantity } = props;
	return (
		<div className="cart">
			{products.map((product) => (
				<CartItem
					key={product.id}
					product={product}
					products={products}
					increaseQuantity={increaseQuantity}
					decreaseQuantity={decreaseQuantity}
					deleteProduct={deleteProduct}
					icons={icons}
					setProducts={setProducts}
				/>
			))}
		</div>
	);
};

export default Cart;
