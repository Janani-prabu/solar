// Import the functions you need from the SDKs you need
// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwobs91jyFOHoxC-AUAR1s-KDkEt-obCc",
  authDomain: "solar-source-bcd3c.firebaseapp.com",
  projectId: "solar-source-bcd3c",
  storageBucket: "solar-source-bcd3c.appspot.com",
  messagingSenderId: "266994336808",
  appId: "1:266994336808:web:e54c168529000d793ea11d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

export default firebase;