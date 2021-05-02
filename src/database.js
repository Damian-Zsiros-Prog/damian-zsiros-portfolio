import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqRBO1yxMBFdIIo1qbO8xp6LqyCx50UOw",
  authDomain: "damian-zsiros-cv-744bc.firebaseapp.com",
  projectId: "damian-zsiros-cv-744bc",
  storageBucket: "damian-zsiros-cv-744bc.appspot.com",
  messagingSenderId: "43641465837",
  appId: "1:43641465837:web:f52702e52715bcc308d5e4",
  measurementId: "G-8VYVN9C6GL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export default db;
