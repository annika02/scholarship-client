import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeCdJARX0ZbqO-0YoA_OXcOh-Mt_c5Oe8",
  authDomain: "assignment12-ae127.firebaseapp.com",
  projectId: "assignment12-ae127",
  storageBucket: "assignment12-ae127.firebasestorage.app",
  messagingSenderId: "58983149212",
  appId: "1:58983149212:web:cad55cfdb3018c016fc759",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
