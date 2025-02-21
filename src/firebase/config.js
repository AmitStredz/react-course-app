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
const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
console.log(JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG));

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 