// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLwaflV6v3vLd6x1ZzHrUJq3BMQOgPTTQ",
  authDomain: "instagram-v2-d9e6a.firebaseapp.com",
  projectId: "instagram-v2-d9e6a",
  storageBucket: "instagram-v2-d9e6a.appspot.com",
  messagingSenderId: "490126401309",
  appId: "1:490126401309:web:5d356cead95ffb6a7a4bf4",
  measurementId: "G-0Q8WZPWBNX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage, analytics };