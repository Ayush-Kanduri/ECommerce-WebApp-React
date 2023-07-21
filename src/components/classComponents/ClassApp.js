import React, { Component } from "react";
import ComponentLifeCycle from "./ComponentLifeCycle";
import {
	addNewDoc,
	getOneDoc,
	getAllDocs,
	getQueryDocs,
	updateOneDoc,
	deleteOneDoc,
	deleteDocField,
} from "../../utils/Firebase";
import DB from "../../index";
import { collection, onSnapshot } from "firebase/firestore";

export default class ClassApp extends Component {
	constructor() {
		super();
		this.state = {
			products: [],
			isLoading: true,
		};
	}
	componentDidMount = () => {
		try {
			const collectionRef = collection(DB, "products");
			this.unsubscribe = onSnapshot(
				collectionRef,
				(snapshot) => {
					if (snapshot.empty) {
						console.log("No matching documents.");
						return;
					}
					const products = [];
					snapshot.forEach((doc) => {
						let id = doc.id;
						let data = doc.data();
						data["id"] = id;
						products.push(data);
					});
					this.setState({
						products: [...products],
						isLoading: false,
					});
				},
				(error) => {
					console.log("Encountered an Error! Detaching the Listener...");
					console.log(error);
				}
			);
			console.log(`Activated the OnSnapshot Listener!`);
		} catch (error) {
			console.log("Error:", error);
		}
	};
	componentWillUnmount() {
		this.unsubscribe();
		console.log(`Deactivated the OnSnapshot Listener!`);
	}
	createDocument = async () => {
		try {
			let object = {
				id: 5,
				category: "Watch",
				title: "Apple Watch Ultra",
				quantity: 7,
				price: 90_000,
				image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=700&hei=700&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1683224241054",
			};
			await addNewDoc("products", object);
			this.setState({ products: [...this.state.products, object] });
		} catch (error) {
			console.log("Error:", error);
		}
	};
	readDocument = async () => {
		try {
			const Data = await getOneDoc("products", "MoT2Qy0LLKcL6hmG5rDG");
			console.log(`Fetched Document:`, Data);
		} catch (error) {
			console.log("Error:", error);
		}
	};
	readAllDocuments = async () => {
		try {
			const Data = await getAllDocs("products");
			const products = [];
			for (let product of Data) {
				let id = [...Object.keys(product)][0];
				let data = [...Object.values(product)][0];
				data["id"] = id;
				products.push(data);
			}
			// this.setState({
			// 	products: [...products],
			// });
		} catch (error) {
			console.log("Error:", error);
		}
	};
	readFilteredDocuments = async () => {
		try {
			const Data = await getQueryDocs("products");
			console.log(`Fetched Filtered Documents:`, Data);
		} catch (error) {
			console.log("Error:", error);
		}
	};
	updateDocument = async () => {
		try {
			await updateOneDoc("products", "MoT2Qy0LLKcL6hmG5rDG");
			console.log(`Document [MoT2Qy0LLKcL6hmG5rDG] Updated`);
		} catch (error) {
			console.log("Error:", error);
		}
	};
	deleteDocument = async () => {
		try {
			await deleteOneDoc("products", "1234");
			console.log(`Document [1234] Deleted`);
		} catch (error) {
			console.log("Error:", error);
		}
	};
	deleteField = async () => {
		try {
			await deleteDocField("products", "MoT2Qy0LLKcL6hmG5rDG");
			console.log(`Field Deleted inside the Document [MoT2Qy0LLKcL6hmG5rDG]`);
		} catch (error) {
			console.log("Error:", error);
		}
	};
	render() {
		console.log("Products:", this.state.products);
		return (
			<div className="App">
				{this.state.isLoading && (
					<h1 style={{ ...styles.center, paddingTop: 70, color: "white" }}>
						Loading...
					</h1>
				)}

				{!this.state.isLoading && (
					<div style={styles.center}>
						<Button firebase={this.createDocument}>Add Product</Button>
						{/* <Button disabled={true} firebase={this.readDocument}>
							Get Product
						</Button>
						<Button disabled={true} firebase={this.readAllDocuments}>
							Get All Products
						</Button>
						<Button
							disabled={true}
							firebase={this.readFilteredDocuments}
						>
							Get Selected Products
						</Button> */}
						<Button firebase={this.updateDocument}>
							Update Product
						</Button>
						<Button firebase={this.deleteDocument}>
							Delete Product
						</Button>
						<Button firebase={this.deleteField}>
							Delete Product Property
						</Button>
					</div>
				)}
				<ComponentLifeCycle />
			</div>
		);
	}
}

class Button extends Component {
	render() {
		return (
			<>
				<button
					style={styles.button}
					onClick={this.props.firebase}
					disabled={this.props.disabled ? this.props.disabled : false}
				>
					{this.props.children}
				</button>
			</>
		);
	}
}

const styles = {
	center: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center",
		flexWrap: "wrap",
		gap: "1rem",
		position: "absolute",
		top: "1%",
		left: "50%",
		transform: `translate(-50%, -1%)`,
		width: "90%",
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
