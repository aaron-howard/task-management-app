import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, enableIndexedDbPersistence } from 'firebase/firestore'
import { getFunctions } from 'firebase/functions'
import { getAnalytics } from 'firebase/analytics'

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
const app = initializeApp(firebaseConfig)

// Initialize Firebase services
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app)
const analytics = getAnalytics(app)

// Enable offline persistence
enableIndexedDbPersistence(db).catch(err => {
  if (err.code === 'failed-precondition') {
    // eslint-disable-next-line no-console
    console.warn(
      'Multiple tabs open, persistence can only be enabled in one tab at a time.'
    )
  } else if (err.code === 'unimplemented') {
    // eslint-disable-next-line no-console
    console.warn(
      'The current browser does not support all features required for persistence'
    )
  }
})

export { auth, db, functions, analytics }
export default app
