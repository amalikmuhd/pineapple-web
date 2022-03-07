import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkIN4wuhSVOIucQycZ3h0geHffUt_s6XI",
  authDomain: "fruit-eater-27282.firebaseapp.com",
  databaseURL: "https://fruit-eater-27282-default-rtdb.firebaseio.com",
  projectId: "fruit-eater-27282",
  storageBucket: "fruit-eater-27282.appspot.com",
  messagingSenderId: "15866170890",
  appId: "1:15866170890:web:1e425f6d6903dee038d9f3",
  measurementId: "G-LRZ8NKBDK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
