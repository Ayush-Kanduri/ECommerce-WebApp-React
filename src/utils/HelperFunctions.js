import {
	addNewDoc,
	getOneDoc,
	getAllDocs,
	getQueryDocs,
	updateOneDoc,
	deleteOneDoc,
	deleteDocField,
	documentListener,
	collectionListener,
} from "./utils/Firebase";

let unsubscribe;

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

const readDocument = async () => {
	try {
		const Data = await getOneDoc("products", "MoT2Qy0LLKcL6hmG5rDG");
		console.log(`Fetched Document:`, Data);
	} catch (error) {
		console.log("Error:", error);
	}
};

const readAllDocuments = async () => {
	try {
		const Data = await getAllDocs("products");
		console.log(`Fetched All Documents:`, Data);
	} catch (error) {
		console.log("Error:", error);
	}
};

const readFilteredDocuments = async () => {
	try {
		const Data = await getQueryDocs("products");
		console.log(`Fetched Filtered Documents:`, Data);
	} catch (error) {
		console.log("Error:", error);
	}
};

const updateDocument = async () => {
	try {
		await updateOneDoc("products", "MoT2Qy0LLKcL6hmG5rDG");
		console.log(`Document [MoT2Qy0LLKcL6hmG5rDG] Updated`);
	} catch (error) {
		console.log("Error:", error);
	}
};

const deleteDocument = async () => {
	try {
		await deleteOneDoc("products", "1234");
		console.log(`Document [1234] Deleted`);
	} catch (error) {
		console.log("Error:", error);
	}
};

const deleteField = async () => {
	try {
		await deleteDocField("products", "MoT2Qy0LLKcL6hmG5rDG");
		console.log(`Field Deleted inside the Document [MoT2Qy0LLKcL6hmG5rDG]`);
	} catch (error) {
		console.log("Error:", error);
	}
};

const activateOnSnapshotListener = () => {
	try {
		/** 
            @documentListener 
            unsubscribe = documentListener("products", "MoT2Qy0LLKcL6hmG5rDG");
            console.log(`Activated the Document OnSnapshot Listener!`);
        **/
		/** 
            @collectionListener 
            unsubscribe = collectionListener("products");
            console.log(`Activated the Collection OnSnapshot Listener!`);
        **/
	} catch (error) {
		console.log("Error:", error);
	}
};

const deactivateOnSnapshotListener = () => {
	try {
		unsubscribe();
		console.log(`Deactivated the OnSnapshot Listener!`);
	} catch (error) {
		console.log("Error:", error);
	}
};

/** 
	@onSnapshotListeners (Functional Components)
	useEffect(() => {
		activateOnSnapshotListener(set the state);
		return () => deactivateOnSnapshotListener();
	}, []);
**/
