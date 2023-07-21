import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ClassApp from "./components/classComponents/ClassApp";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
};

const APP = initializeApp(firebaseConfig);
const DB = getFirestore(APP);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(<ClassApp />);

export default DB;
