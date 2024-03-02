import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAfMSc1S1mLSxdlpzPQzy3m8KlyEMtBYw",
  authDomain: "chitchat-73d04.firebaseapp.com",
  projectId: "chitchat-73d04",
  storageBucket: "chitchat-73d04.appspot.com",
  messagingSenderId: "290354224967",
  appId: "1:290354224967:web:7b31ca7fb0533e6f3d3662"  
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
