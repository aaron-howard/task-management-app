import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/functions'

// Your Firebase configuration
// Replace with your actual Firebase config from Firebase Console
const firebaseConfig = {
  apiKey: 'your-actual-api-key-here',
  authDomain: 'your-project-id.firebaseapp.com',
  projectId: 'your-project-id',
  storageBucket: 'your-project-id.appspot.com',
  messagingSenderId: 'your-messaging-sender-id',
  appId: 'your-app-id'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firebase services
const auth = firebase.auth()
const db = firebase.firestore()
const functions = firebase.functions()

// Enable offline persistence
db.enablePersistence().catch((err) => {
  if (err.code === 'failed-precondition') {
    console.warn('Multiple tabs open, persistence can only be enabled in one tab at a time.')
  } else if (err.code === 'unimplemented') {
    console.warn('The current browser does not support all features required for persistence')
  }
})

export { auth, db, functions }
export default firebase
