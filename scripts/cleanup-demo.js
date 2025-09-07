// Demo Data Cleanup Script
// This script removes all demo data from the database

const admin = require('firebase-admin')

// Initialize Firebase Admin (you'll need to set up service account)
const serviceAccount = require('../path/to/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

async function cleanupDemoData() {
  try {
    console.log('🧹 Cleaning up demo data...')

    // Delete all tasks
    const tasksSnapshot = await db.collection('tasks').get()
    const taskBatch = db.batch()
    
    tasksSnapshot.docs.forEach(doc => {
      taskBatch.delete(doc.ref)
    })
    
    if (tasksSnapshot.docs.length > 0) {
      await taskBatch.commit()
      console.log(`✅ Deleted ${tasksSnapshot.docs.length} tasks`)
    }

    // Delete all teams
    const teamsSnapshot = await db.collection('teams').get()
    const teamBatch = db.batch()
    
    teamsSnapshot.docs.forEach(doc => {
      teamBatch.delete(doc.ref)
    })
    
    if (teamsSnapshot.docs.length > 0) {
      await teamBatch.commit()
      console.log(`✅ Deleted ${teamsSnapshot.docs.length} teams`)
    }

    // Delete demo users
    const demoUserIds = ['demo-user-1', 'demo-user-2', 'demo-user-3']
    const userBatch = db.batch()
    
    for (const userId of demoUserIds) {
      const userRef = db.collection('users').doc(userId)
      userBatch.delete(userRef)
    }
    
    await userBatch.commit()
    console.log(`✅ Deleted ${demoUserIds.length} demo users`)

    console.log('🎉 Demo data cleanup completed successfully!')

  } catch (error) {
    console.error('❌ Error cleaning up demo data:', error)
  } finally {
    process.exit(0)
  }
}

// Run the script
cleanupDemoData()
