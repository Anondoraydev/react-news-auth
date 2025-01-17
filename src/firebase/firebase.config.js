// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "alien-bebop-446807-v2.firebaseapp.com",
  projectId: "alien-bebop-446807-v2",
  storageBucket: "alien-bebop-446807-v2.firebasestorage.app",
  messagingSenderId: "673344419970",
  appId: "1:673344419970:web:e390d8aa0b49d7fc40dc9b",
  measurementId: "G-HM0V6DWZHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;