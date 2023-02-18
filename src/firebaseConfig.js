// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnVwGFI4KcpzlkPTqSAcvuI-Ot8rEP0kw",
  authDomain: "catch-66e95.firebaseapp.com",
  projectId: "catch-66e95",
  storageBucket: "catch-66e95.appspot.com",
  messagingSenderId: "1022470338945",
  appId: "1:1022470338945:web:36fd3b1e97892405819080",
  measurementId: "G-NX1V8JY52R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebase;
