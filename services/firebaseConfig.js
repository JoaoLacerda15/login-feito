import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCoHCyEfvUjMgnCsrFZMjwZS2tivpb4V-8",
  authDomain: "magnoopus.firebaseapp.com",
  databaseURL: "https://magnoopus-default-rtdb.firebaseio.com",
  projectId: "magnoopus",
  storageBucket: "magnoopus.firebasestorage.app",
  messagingSenderId: "159965488539",
  appId: "1:159965488539:web:1d1f3c0177e4908265ed3e",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };