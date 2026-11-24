import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, child } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAirJ987_ewHAjLsGIQykLfDC4SMJFM1vw",
  authDomain: "english-test-b3fab.firebaseapp.com",
  databaseURL: "https://english-test-b3fab-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "english-test-b3fab",
  storageBucket: "english-test-b3fab.firebasestorage.app",
  messagingSenderId: "253200653578",
  appId: "1:253200653578:web:05e3e6e5e1d427f6abaef3",
  measurementId: "G-0KSS0PFD3P"
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export { ref, get, set, child };
