import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPCd2Al71f0WX4rIDw4Kawrw3eh-CqzeY",
  authDomain: "react-netflix-clone27.firebaseapp.com",
  projectId: "react-netflix-clone27",
  storageBucket: "react-netflix-clone27.appspot.com",
  messagingSenderId: "1067913899352",
  appId: "1:1067913899352:web:e1c79161a683c57290c92d",
  measurementId: "G-E138F1MXMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);