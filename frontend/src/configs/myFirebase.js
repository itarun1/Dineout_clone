import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAB3G2gMz7JsM_zj1_nTm2fxw3YsiUcUhI",
	authDomain: "dineout-auth.firebaseapp.com",
	projectId: "dineout-auth",
	storageBucket: "dineout-auth.appspot.com",
	messagingSenderId: "436515532695",
	appId: "1:436515532695:web:d5c4249c0f9a3c9e3c9ed2",
	measurementId: "G-X7LH4P0PLW",
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
