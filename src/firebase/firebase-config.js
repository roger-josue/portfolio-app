import firebase from 'firebase/app';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDB-EwR54HfXX0oH-MI9NY66NwG3Yb967U",
  authDomain: "portfolio-app-b4a43.firebaseapp.com",
  projectId: "portfolio-app-b4a43",
  storageBucket: "portfolio-app-b4a43.appspot.com",
  messagingSenderId: "1041422471271",
  appId: "1:1041422471271:web:c8554053df671be5bf84c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export {
  db,
  firebase
}