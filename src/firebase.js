// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-lxj2VR9PCTDbZu7KOiojWnNjkJCEvlw",
  authDomain: "petprojectshop-f7c38.firebaseapp.com",
  projectId: "petprojectshop-f7c38",
  storageBucket: "petprojectshop-f7c38.appspot.com",
  messagingSenderId: "216914554991",
  appId: "1:216914554991:web:25a7e09f2185613efa9d9a",
  measurementId: "G-PNEZHQ5XWQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
