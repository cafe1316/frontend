// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// 安全检查：防止在没有环境变量的情况下崩溃 (比如在 Vercel 构建时或未配置时)
const isConfigValid = !!firebaseConfig.apiKey;

let auth: Auth | undefined;
let provider: GoogleAuthProvider | undefined;

if (isConfigValid) {
  const app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  provider = new GoogleAuthProvider();
} else {
  console.warn("Firebase config is missing. Auth features will not work.");
}

export { auth, provider };