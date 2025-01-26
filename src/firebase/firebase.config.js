// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJNjsJHvcXYU-PF1ndM1pzKF2VYyYii0I",
  authDomain: "second-concep-firebase-69072.firebaseapp.com",
  projectId: "second-concep-firebase-69072",
  storageBucket: "second-concep-firebase-69072.firebasestorage.app",
  messagingSenderId: "814948861880",
  appId: "1:814948861880:web:3b5101c7b7309c6375714d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;