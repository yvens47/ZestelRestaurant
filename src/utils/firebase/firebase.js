// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

try {
  var firebaseConfig = {
    apiKey: "AIzaSyDsrVJ1YzupZnxCkbmSVad_70TrmZu3P3E",
    authDomain: "zestel-53315.firebaseapp.com",
    databaseURL: "https://zestel-53315-default-rtdb.firebaseio.com",
    projectId: "zestel-53315",
    storageBucket: "zestel-53315.appspot.com",
    messagingSenderId: "1013749085329",
    appId: "1:1013749085329:web:467072a546872991f33b30",
    measurementId: "G-XTR2X95MEW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

firebase.firestore();

export default firebase;
