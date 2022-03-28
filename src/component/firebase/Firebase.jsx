import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBp43ISCKOj6lr1SX355ujBe-OQai0buRI",
  authDomain: "fir-373e1.firebaseapp.com",
  projectId: "fir-373e1",
  storageBucket: "fir-373e1.appspot.com",
  messagingSenderId: "860617612162",
  appId: "1:860617612162:web:5100f0ec2590c894178d9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
