import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id"
// };
const firebaseConfig = {
    apiKey: "AIzaSyB-pVmzrCZBVMPpKcTReM9Xwwcr1olUAwc",
    authDomain: "vs-plugin.firebaseapp.com",
    projectId: "vs-plugin",
    storageBucket: "vs-plugin.firebasestorage.app",
    messagingSenderId: "238242579636",
    appId: "1:238242579636:web:22d8af0a929bed7cfb03e1",
    measurementId: "G-TYBFE7WGZR"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 