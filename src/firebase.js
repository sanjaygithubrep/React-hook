import firebase from 'firebase/app';
import 'firebase/firestore';
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANKSStXwqCvsrMhfGSUs7C5GqfKjbGN8Q",
  authDomain: "react-hook-7c8ba.firebaseapp.com",
  projectId: "react-hook-7c8ba",
  storageBucket: "react-hook-7c8ba.appspot.com",
  messagingSenderId: "914777729792",
  appId: "1:914777729792:web:b239e67bb406af907ba1e5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
