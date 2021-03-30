import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB59w4UTux_Wl68eyISCol1QuRHfl9B4qs",
  authDomain: "clone-f1437.firebaseapp.com",
  projectId: "clone-f1437",
  storageBucket: "clone-f1437.appspot.com",
  messagingSenderId: "76292217210",
  appId: "1:76292217210:web:ca669431d355277c5adec3",
  measurementId: "G-0080C8FR1X",
});

const db = firebase.firestore();

export { db };
