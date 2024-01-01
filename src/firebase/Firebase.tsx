import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
apiKey: "AIzaSyDMtxwAinHjfFR3S4f35_S_H3CupO-cE6A",
  authDomain: "excell-6d0d2.firebaseapp.com",
  databaseURL: "https://excell-6d0d2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "excell-6d0d2",
  storageBucket: "excell-6d0d2.appspot.com",
  messagingSenderId: "832165482064",
  appId: "1:832165482064:web:7deeb8de8840b5b2c78b55",
  measurementId: "G-GX7PXKQ75H"
    };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
