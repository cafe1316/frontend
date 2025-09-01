// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDhWg8YqpLJRgYPQtrp4V5Qw3EfCZCU4ns",
  authDomain: "cafe1316-2fc7f.firebaseapp.com",
  projectId: "cafe1316-2fc7f",
  storageBucket: "cafe1316-2fc7f.appspot.com",
  messagingSenderId: "294571068452",
  appId: "1:294571068452:web:d0912c33529dbd31f35cb1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();