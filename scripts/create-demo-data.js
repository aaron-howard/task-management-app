// Demo Data Creation Script
// This script creates sample data for the demo

const admin = require('firebase-admin')

// Initialize Firebase Admin (you'll need to set up service account)
const serviceAccount = require('../path/to/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

async function createDemoData() {
  try {
    console.log('🚀 Creating demo data...')

    // Create demo teams
    const teams = [
      {
        name: 'Marketing Team',
        description: 'Handles all marketing activities and campaigns',
        createdBy: 'demo-user-1',
        members: ['demo-user-1', 'demo-user-2'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Development Team',
        description: 'Software development and technical tasks',
        createdBy: 'demo-user-2',
        members: ['demo-user-2', 'demo-user-3'],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Design Team',
        description: 'UI/UX design and creative tasks',
        createdBy: 'demo-user-3',
        members: ['demo-user-3', 'demo-user-1'],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]

    const teamRefs = []
    for (const team of teams) {
      const teamRef = await db.collection('teams').add(team)
      teamRefs.push(teamRef)
      console.log(`✅ Created team: ${team.name}`)
    }

    // Create demo tasks
    const tasks = [
      // Marketing Team Tasks
      {
        title: 'Design new logo',
        description: 'Create a modern, minimalist logo for the brand refresh',
        status: 'todo',
        priority: 'high',
        assigneeId: 'demo-user-1',
        teamId: teamRefs[0].id,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
        estimatedHours: 8,
        createdBy: 'demo-user-1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Social media campaign',
        description: 'Launch social media campaign for new product release',
        status: 'in-progress',
        priority: 'medium',
        assigneeId: 'demo-user-2',
        teamId: teamRefs[0].id,
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 2 weeks from now
        estimatedHours: 16,
        createdBy: 'demo-user-1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Email newsletter',
        description: 'Create monthly newsletter for subscribers',
        status: 'review',
        priority: 'low',
        assigneeId: 'demo-user-1',
        teamId: teamRefs[0].id,
        dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
        estimatedHours: 4,
        createdBy: 'demo-user-2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Website analytics review',
        description: 'Analyze website traffic and user behavior',
        status: 'done',
        priority: 'medium',
        assigneeId: 'demo-user-2',
        teamId: teamRefs[0].id,
        dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        estimatedHours: 6,
        createdBy: 'demo-user-1',
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000) // 2 days ago
      },

      // Development Team Tasks
      {
        title: 'Implement user authentication',
        description: 'Add secure user login and registration functionality',
        status: 'in-progress',
        priority: 'high',
        assigneeId: 'demo-user-2',
        teamId: teamRefs[1].id,
        dueDate: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000), // 10 days from now
        estimatedHours: 24,
        createdBy: 'demo-user-2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Database optimization',
        description: 'Optimize database queries for better performance',
        status: 'todo',
        priority: 'medium',
        assigneeId: 'demo-user-3',
        teamId: teamRefs[1].id,
        dueDate: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000), // 3 weeks from now
        estimatedHours: 12,
        createdBy: 'demo-user-2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'API documentation',
        description: 'Create comprehensive API documentation',
        status: 'review',
        priority: 'low',
        assigneeId: 'demo-user-2',
        teamId: teamRefs[1].id,
        dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), // 5 days from now
        estimatedHours: 8,
        createdBy: 'demo-user-3',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Design Team Tasks
      {
        title: 'Mobile app wireframes',
        description: 'Create wireframes for mobile application',
        status: 'todo',
        priority: 'high',
        assigneeId: 'demo-user-3',
        teamId: teamRefs[2].id,
        dueDate: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000), // 12 days from now
        estimatedHours: 16,
        createdBy: 'demo-user-3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'User interface mockups',
        description: 'Design high-fidelity mockups for web application',
        status: 'in-progress',
        priority: 'medium',
        assigneeId: 'demo-user-1',
        teamId: teamRefs[2].id,
        dueDate: new Date(Date.now() + 18 * 24 * 60 * 60 * 1000), // 18 days from now
        estimatedHours: 20,
        createdBy: 'demo-user-3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Design system guidelines',
        description: 'Create comprehensive design system documentation',
        status: 'done',
        priority: 'medium',
        assigneeId: 'demo-user-3',
        teamId: teamRefs[2].id,
        dueDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1 week ago
        estimatedHours: 12,
        createdBy: 'demo-user-1',
        createdAt: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), // 2 weeks ago
        updatedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) // 1 week ago
      }
    ]

    for (const task of tasks) {
      await db.collection('tasks').add(task)
      console.log(`✅ Created task: ${task.title}`)
    }

    // Create demo users
    const users = [
      {
        uid: 'demo-user-1',
        email: 'demo@example.com',
        displayName: 'Demo User',
        photoURL: null,
        createdAt: new Date(),
        lastLoginAt: new Date()
      },
      {
        uid: 'demo-user-2',
        email: 'manager@example.com',
        displayName: 'Project Manager',
        photoURL: null,
        createdAt: new Date(),
        lastLoginAt: new Date()
      },
      {
        uid: 'demo-user-3',
        email: 'designer@example.com',
        displayName: 'UI Designer',
        photoURL: null,
        createdAt: new Date(),
        lastLoginAt: new Date()
      }
    ]

    for (const user of users) {
      await db.collection('users').doc(user.uid).set(user)
      console.log(`✅ Created user: ${user.displayName}`)
    }

    console.log('🎉 Demo data created successfully!')
    console.log('\n📊 Summary:')
    console.log(`- ${teams.length} teams created`)
    console.log(`- ${tasks.length} tasks created`)
    console.log(`- ${users.length} users created`)
    console.log('\n🔑 Demo Accounts:')
    console.log('- demo@example.com / demo123')
    console.log('- manager@example.com / manager123')
    console.log('- designer@example.com / designer123')

  } catch (error) {
    console.error('❌ Error creating demo data:', error)
  } finally {
    process.exit(0)
  }
}

// Run the script
createDemoData()
