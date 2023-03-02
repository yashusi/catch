import { initializeApp } from 'firebase/app';
import {getFirestore} from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnVwGFI4KcpzlkPTqSAcvuI-Ot8rEP0kw",
  authDomain: "catch-66e95.firebaseapp.com",
  databaseURL: "https://catch-66e95-default-rtdb.firebaseio.com",
  projectId: "catch-66e95",
  storageBucket: "catch-66e95.appspot.com",
  messagingSenderId: "1022470338945",
  appId: "1:1022470338945:web:36fd3b1e97892405819080",
  measurementId: "G-NX1V8JY52R"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();