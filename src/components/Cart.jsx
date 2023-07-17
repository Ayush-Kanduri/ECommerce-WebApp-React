import React, { Component } from "react";
import CartItem from "./CartItem";
import { v4 as uuidv4 } from "uuid";

export default class Cart extends Component {
	constructor() {
		super();
		this.state = {
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
					quantity: 15,
					price: 2_45_000,
					image: "https://m.media-amazon.com/images/I/71WtFY52CeL._SX679_.jpg",
				},
				{
					id: uuidv4(),
					category: "Watch",
					title: "Apple Watch Ultra",
					quantity: 12,
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
					quantity: 30,
					price: 1_60_000,
					image: "https://m.media-amazon.com/images/I/91rQ3XfEYzL._SY450_.jpg",
				},
				{
					id: uuidv4(),
					category: "Tablet",
					title: "Apple iPad Pro",
					quantity: 18,
					price: 20_000,
					image: "https://m.media-amazon.com/images/I/414zn58PVUL._SY445_SX342_QL70_FMwebp_.jpg",
				},
				{
					id: uuidv4(),
					category: "Smart TV",
					title: "Samsung Crystal 4K UHD Android TV",
					quantity: 60,
					price: 50_000,
					image: "https://m.media-amazon.com/images/I/613-FH97zuL._SX679_.jpg",
				},
				{
					id: uuidv4(),
					category: "Gaming Console",
					title: "PS5",
					quantity: 23,
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
					quantity: 10,
					price: 10_000,
					image: "https://m.media-amazon.com/images/I/61bhl1GeVfS._SX450_.jpg",
				},
			],
		};
	}
	render() {
		const { products } = this.state;
		return (
			<div className="cart">
				{products.map((product) => (
					<CartItem key={product.id} product={product} />
				))}
			</div>
		);
	}
}
