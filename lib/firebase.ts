// lib/firebase.ts
// Firebase client SDK initialization for Next.js web app
import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAw_WyH-ne4D3r80otID2-8rwlf8rCjKHk",
  authDomain: "yms-basic.firebaseapp.com",
  projectId: "yms-basic",
  storageBucket: "yms-basic.firebasestorage.app",
  messagingSenderId: "54750732986",
  appId: "1:54750732986:web:db843a35bd9e713b219883"
};

// Prevent re-initialization in Next.js hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export default app;
