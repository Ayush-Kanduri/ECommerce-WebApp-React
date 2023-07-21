import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCirclePlus,
	faCircleMinus,
	faTrashCan,
	faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import {
	addNewDoc,
	getOneDoc,
	getAllDocs,
	getQueryDocs,
	updateOneDoc,
	deleteOneDoc,
	deleteDocField,
	// eslint-disable-next-line
	documentListener,
	collectionListener,
} from "./utils/Firebase";

// eslint-disable-next-line
let unsubscribe = () => {};

const getCartCount = (products) =>
	products.reduce((count, product) => (count += product.quantity), 0);

const increaseQuantity = (id, products, setProducts) => {
	const prod = products.map((product) => {
		if (product.id === id) product.quantity += 1;
		return product;
	});
	setProducts([...prod]);
};

const decreaseQuantity = (id, products, setProducts) => {
	let render = true;
	const prod = products.map((product) => {
		if (product.id === id) {
			if (product.quantity > 0) product.quantity -= 1;
			else render = false;
		}
		return product;
	});
	if (render) setProducts([...prod]);
};

const deleteProduct = (id, products, setProducts) => {
	const prod = products.filter((item) => item.id !== id);
	setProducts([...prod]);
};

const getCartTotal = (products) =>
	products.reduce(
		(total, product) => (total += product.quantity * product.price),
		0
	);

// eslint-disable-next-line
const createDocument = async () => {
	try {
		let object = {
			id: 2,
			category: "Laptop",
			title: "Apple Macbook Pro",
			quantity: 5,
			price: 2_45_000,
			brands: ["dell", "acer", "lenovo"],
			favorites: { food: "Pizza", color: "Blue", subject: "recess" },
			image: "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
		};
		await addNewDoc("products", object);
		// Add Product to the State
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const readDocument = async () => {
	try {
		const Data = await getOneDoc("products", "MoT2Qy0LLKcL6hmG5rDG");
		console.log(`Fetched Document:`, Data);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const readAllDocuments = async () => {
	try {
		const Data = await getAllDocs("products");
		console.log(`Fetched All Documents:`, Data);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const readFilteredDocuments = async () => {
	try {
		const Data = await getQueryDocs("products");
		console.log(`Fetched Filtered Documents:`, Data);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const updateDocument = async () => {
	try {
		await updateOneDoc("products", "MoT2Qy0LLKcL6hmG5rDG");
		console.log(`Document [MoT2Qy0LLKcL6hmG5rDG] Updated`);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const deleteDocument = async () => {
	try {
		await deleteOneDoc("products", "1234");
		console.log(`Document [1234] Deleted`);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const deleteField = async () => {
	try {
		await deleteDocField("products", "MoT2Qy0LLKcL6hmG5rDG");
		console.log(`Field Deleted inside the Document [MoT2Qy0LLKcL6hmG5rDG]`);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const activateOnSnapshotListener = () => {
	try {
		/** @documentListener **/
		// unsubscribe = documentListener("products", "MoT2Qy0LLKcL6hmG5rDG");
		// console.log(`Activated the Document OnSnapshot Listener!`);
		/** @collectionListener **/
		unsubscribe = collectionListener("products");
		console.log(`Activated the Collection OnSnapshot Listener!`);
	} catch (error) {
		console.log("Error:", error);
	}
};
// eslint-disable-next-line
const deactivateOnSnapshotListener = () => {
	try {
		unsubscribe();
		console.log(`Deactivated the OnSnapshot Listener!`);
	} catch (error) {
		console.log("Error:", error);
	}
};

const App = () => {
	const [products, setProducts] = useState(state.products);
	useEffect(() => {
		// activateOnSnapshotListener();
		// deactivateOnSnapshotListener();
		// return () => deactivateOnSnapshotListener();
	}, []);
	return (
		<div className="App">
			<Navbar icons={icons} count={getCartCount(products)} />
			<Cart
				icons={icons}
				deleteProduct={deleteProduct}
				increaseQuantity={increaseQuantity}
				decreaseQuantity={decreaseQuantity}
				products={products}
				setProducts={setProducts}
			/>
			<Footer total={getCartTotal(products)} />
		</div>
	);
};

const state = {
	products: [
		{
			id: uuidv4(),
			category: "Mobile Phone",
			title: "iPhone 14 Pro Max",
			quantity: 10,
			price: 1_40_000,
			image: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UF1000,1000_QL80_.jpg",
		},
		{
			id: uuidv4(),
			category: "Laptop",
			title: "Apple Macbook Pro",
			quantity: 2,
			price: 2_45_000,
			image: "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
		},
		{
			id: uuidv4(),
			category: "Watch",
			title: "Apple Watch Ultra",
			quantity: 7,
			price: 90_000,
			image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
		},
		{
			id: uuidv4(),
			category: "TWS Earbuds",
			title: "Apple Airpods",
			quantity: 8,
			price: 27_000,
			image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1660803972361",
		},
		{
			id: uuidv4(),
			category: "Camera",
			title: "Sony A7III",
			quantity: 19,
			price: 1_60_000,
			image: "https://m.media-amazon.com/images/I/91rQ3XfEYzL._SY450_.jpg",
		},
		{
			id: uuidv4(),
			category: "Tablet",
			title: "Apple iPad Pro",
			quantity: 4,
			price: 20_000,
			image: "https://m.media-amazon.com/images/I/414zn58PVUL._SY445_SX342_QL70_FMwebp_.jpg",
		},
		{
			id: uuidv4(),
			category: "Smart TV",
			title: "Samsung Crystal 4K UHD Android TV",
			quantity: 3,
			price: 50_000,
			image: "https://m.media-amazon.com/images/I/613-FH97zuL._SX679_.jpg",
		},
		{
			id: uuidv4(),
			category: "Gaming Console",
			title: "PS5",
			quantity: 13,
			price: 50_000,
			image: "https://m.media-amazon.com/images/I/41MloPxj+VL._SX679_.jpg",
		},
		{
			id: uuidv4(),
			category: "boAt Stone 352 Bluetooth Speaker",
			title: "Speaker",
			quantity: 6,
			price: 1_700,
			image: "https://m.media-amazon.com/images/I/61K8FS335JL._SX679_.jpg",
		},
		{
			id: uuidv4(),
			category: "Fitness Tracker",
			title: "Xiaomi Mi Smart Band",
			quantity: 20,
			price: 10_000,
			image: "https://m.media-amazon.com/images/I/61bhl1GeVfS._SX450_.jpg",
		},
	],
};

const icons = {
	faCartShopping,
	faCirclePlus,
	faCircleMinus,
	faTrashCan,
	FontAwesomeIcon,
};

export default App;
