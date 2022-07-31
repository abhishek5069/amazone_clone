import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC7zDCaUBBWMRyTL1CQcov4f-Dh2DBAF4k",
	authDomain: "clone-421b6.firebaseapp.com",
	projectId: "clone-421b6",
	storageBucket: "clone-421b6.appspot.com",
	messagingSenderId: "738315300299",
	appId: "1:738315300299:web:6cd2be60068fd1bfc95a4e",
	measurementId: "G-4XCBKWK4VN",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
