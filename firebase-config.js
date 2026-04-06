// Firebase Configuration using the credentials provided
const firebaseConfig = {
  apiKey: "AIzaSyAcplOxgYrpo4Aqv7B0BzRXtkX6G7OmITY",
  authDomain: "mmm13-4b2a9.firebaseapp.com",
  projectId: "mmm13-4b2a9",
  storageBucket: "mmm13-4b2a9.firebasestorage.app",
  messagingSenderId: "61693869313",
  appId: "1:61693869313:web:db80b225ee218f6dcdef00",
  measurementId: "G-BMFB2ZRH8G",
  databaseURL: "https://mmm13-4b2a9-default-rtdb.firebaseio.com/" // Standard Firebase URL format based on projectId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Database, Auth
const db = firebase.database();
const auth = firebase.auth();

if (firebase.storage) {
  const storage = firebase.storage();
}

// Securely persist login status on the device
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => console.log("Persistence set to LOCAL (Stay Signed In enabled)"))
  .catch((e) => console.error("Persistence failed: " + e.message));

console.log("Firebase initialized successfully! System ready with Auth Support.");
