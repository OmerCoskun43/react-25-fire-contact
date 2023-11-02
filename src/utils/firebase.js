import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBQ8TEvIXttMuX9t9OfQw6haqILPUSWuek",
  authDomain: "fire-base-project-61440.firebaseapp.com",
  databaseURL: "https://fire-base-project-61440-default-rtdb.firebaseio.com",
  projectId: "fire-base-project-61440",
  storageBucket: "fire-base-project-61440.appspot.com",
  messagingSenderId: "46341890433",
  appId: "1:46341890433:web:c19722b23850482f090880",
  measurementId: "G-Y9HXD1R09F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
const analytics = getAnalytics(app);
