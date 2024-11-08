import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvDwlTkd3KqvJHVNib8O9G9R8Me5cCk-Y",
  authDomain: "tic-tac-toe-web-app-4ed4c.firebaseapp.com",
  projectId: "tic-tac-toe-web-app-4ed4c",
  storageBucket: "tic-tac-toe-web-app-4ed4c.firebasestorage.app",
  messagingSenderId: "586763808405",
  appId: "1:586763808405:web:6eaf8fdb995a7c10fa759c",
  measurementId: "G-GB2XD0WNH2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence: ", error);
});

export { auth, provider };
