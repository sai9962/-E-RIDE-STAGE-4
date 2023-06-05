import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyDVHPdeD6hJigLtriO8Bd3ZdFnONH4dzPI",
  authDomain: "e-ride-stage-4-f94bc.firebaseapp.com",
  projectId: "e-ride-stage-4-f94bc",
  storageBucket: "e-ride-stage-4-f94bc.appspot.com",
  messagingSenderId: "217451788403",
  appId: "1:217451788403:web:552fdba1c40532adba9206"
};
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
