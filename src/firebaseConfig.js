import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCQGBgNCU76sm4XakZ7p0kaJRC2_4L4jJA",
  authDomain: "clearldgr-react-firebase.firebaseapp.com",
  projectId: "clearldgr-react-firebase",
  storageBucket: "clearldgr-react-firebase.firebasestorage.app",
  messagingSenderId: "85528281118",
  appId: "1:85528281118:web:e18df25344a523b8d4ee0f",
  measurementId: "G-M7TWFXK8ZV"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);