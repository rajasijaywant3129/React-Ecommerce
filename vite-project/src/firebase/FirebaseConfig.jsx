
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBpco12SIZ4Jvt3ENcHQFGMZdwZDhKhWU",
  authDomain: "ecomm-e0592.firebaseapp.com",
  projectId: "ecomm-e0592",
  storageBucket: "ecomm-e0592.appspot.com",
  messagingSenderId: "896024582872",
  appId: "1:896024582872:web:c64112cdf304dfdae715ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB,auth } ;