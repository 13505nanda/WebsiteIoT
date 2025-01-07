import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD_t3zHTz4KP2dacxTYYbApQD4_9VRJXkw",
  authDomain: "iotspf-23b13.firebaseapp.com",
  databaseURL: "https://iotspf-23b13-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "iotspf-23b13",
  storageBucket: "iotspf-23b13.firebasestorage.app",
  messagingSenderId: "76642823629",
  appId: "1:76642823629:web:45174aa0a56a2680ee6884",
  measurementId: "G-V8CN2X1JF8"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
