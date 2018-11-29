import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCsYKaJc0Yh9hD5PQEmGhOXyPC0OYAQuas",
  authDomain: "inventory-manager-b7b9c.firebaseapp.com",
  databaseURL: "https://inventory-manager-b7b9c.firebaseio.com",
  projectId: "inventory-manager-b7b9c",
  storageBucket: "",
  messagingSenderId: "499717585376"
};
firebase.initializeApp(config);

export default firebase;
