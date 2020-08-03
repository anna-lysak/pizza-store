// Your web app's Firebase configuration
import firebase from 'firebase/app'
import 'firebase/database'

var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_STORAGE_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu')
export const dbOrdersRef = db.ref('orders')
