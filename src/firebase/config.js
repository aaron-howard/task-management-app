import firebase from 'firebase/compat/app'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/functions'

// Your Firebase configuration
// Replace with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: 'AIzaSyDuIV4ObYFC6i9gJCOuwSqk4gRwYJ6p65E',
  authDomain: 'task-management-app-32eee.firebaseapp.com',
  projectId: 'task-management-app-32eee',
  storageBucket: 'task-management-app-32eee.firebasestorage.app',
  messagingSenderId: '943276672402',
  appId: '1:943276672402:web:f4fed964ef4dd0359b6d4b',
  measurementId: 'G-RG4DCEMK43'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firebase services
const auth = firebase.auth()
const db = firebase.firestore()
const functions = firebase.functions()
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

// Enable offline persistence
db.enablePersistence().catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.')
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support all features required for persistence')
  }
})

export { auth, db, functions, analytics }
export default firebase
