# Task Management App

A collaborative task management application built with Vue.js, Firebase, Vuex, and Vuetify. Features real-time updates, drag-and-drop functionality, and team collaboration.

## Features

- **Real-time Updates**: Tasks and team changes sync across all users instantly
- **Drag & Drop**: Move tasks between status columns with smooth animations
- **Team Collaboration**: Create teams, invite members, and assign tasks
- **User Authentication**: Secure login with email/password or Google OAuth
- **Task Management**: Create, edit, delete, and organize tasks with priorities and due dates
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Built with Vuetify for a clean, material design interface

## Tech Stack

- **Frontend**: Vue.js 2.6, Vuetify 2.6, Vuex 3.6
- **Backend**: Firebase (Authentication, Firestore, Functions)
- **Drag & Drop**: Vue Draggable
- **Real-time**: Firebase Firestore real-time listeners
- **Notifications**: Vue Toastification

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase project

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Run setup script**
   ```bash
   # On Windows
   setup.bat
   
   # On macOS/Linux
   ./setup.sh
   ```

   Or manually install dependencies:
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a new Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
   - Enable Authentication (Email/Password and Google)
   - Create a Firestore database
   - Get your Firebase configuration

4. **Configure Firebase**
   - Open `src/firebase/config.js`
   - Replace the placeholder configuration with your actual Firebase config:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "your-app-id"
   }
   ```

5. **Set up Firestore Security Rules**
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       // Users can read/write their own user document
       match /users/{userId} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
       
       // Team members can read/write team documents
       match /teams/{teamId} {
         allow read, write: if request.auth != null && 
           request.auth.uid in resource.data.members;
       }
       
       // Team members can read/write tasks for their teams
       match /tasks/{taskId} {
         allow read, write: if request.auth != null && 
           request.auth.uid in get(/databases/$(database)/documents/teams/$(resource.data.teamId)).data.members;
       }
     }
   }
   ```

6. **Run the development server**
   ```bash
   npm run serve
   ```

7. **Open your browser**
   Navigate to `http://localhost:8080`

## Project Structure

```
src/
├── components/          # Reusable Vue components
│   ├── TaskCard.vue
│   ├── TaskDialog.vue
│   ├── TaskDetailsDialog.vue
│   ├── TeamDialog.vue
│   └── ManageMembersDialog.vue
├── firebase/           # Firebase configuration
│   └── config.js
├── plugins/            # Vue plugins
│   └── vuetify.js
├── router/             # Vue Router configuration
│   └── index.js
├── store/              # Vuex store modules
│   ├── index.js
│   └── modules/
│       ├── auth.js
│       ├── tasks.js
│       ├── teams.js
│       └── ui.js
├── views/              # Page components
│   ├── Dashboard.vue
│   ├── Login.vue
│   ├── Register.vue
│   ├── Tasks.vue
│   ├── Teams.vue
│   └── Profile.vue
├── App.vue
└── main.js
```

## Usage

### Getting Started

1. **Register/Login**: Create an account or sign in with Google
2. **Create a Team**: Set up your first team and invite members
3. **Create Tasks**: Add tasks with descriptions, priorities, and due dates
4. **Collaborate**: Assign tasks to team members and track progress
5. **Real-time Updates**: See changes from other team members instantly

### Task Management

- **Create Tasks**: Click "Create Task" to add new tasks
- **Drag & Drop**: Move tasks between status columns (To Do, In Progress, Review, Done)
- **Edit Tasks**: Click the menu icon on any task to edit or delete
- **View Details**: Click on a task to see full details and add comments
- **Filter Tasks**: Use the filter options to find specific tasks

### Team Collaboration

- **Create Teams**: Set up teams for different projects or departments
- **Invite Members**: Add team members by email address
- **Manage Members**: Remove members or change team settings
- **Assign Tasks**: Assign tasks to specific team members

## Firebase Collections

### Users Collection
```javascript
{
  uid: "user-id",
  email: "user@example.com",
  displayName: "User Name",
  photoURL: "https://...",
  createdAt: timestamp,
  lastLoginAt: timestamp
}
```

### Teams Collection
```javascript
{
  name: "Team Name",
  description: "Team description",
  createdBy: "user-id",
  members: ["user-id-1", "user-id-2"],
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### Tasks Collection
```javascript
{
  title: "Task Title",
  description: "Task description",
  status: "todo|in-progress|review|done",
  priority: "low|medium|high",
  assigneeId: "user-id",
  teamId: "team-id",
  dueDate: timestamp,
  estimatedHours: 5,
  comments: [
    {
      id: "comment-id",
      text: "Comment text",
      author: { uid: "user-id", displayName: "Name", photoURL: "..." },
      createdAt: timestamp
    }
  ],
  createdBy: "user-id",
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Development

### Available Scripts

- `npm run serve` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

### Adding New Features

1. **Components**: Add new components in `src/components/`
2. **Views**: Add new pages in `src/views/`
3. **Store**: Add new Vuex modules in `src/store/modules/`
4. **Routes**: Add new routes in `src/router/index.js`

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase in your project:
   ```bash
   firebase init hosting
   ```

4. Build and deploy:
   ```bash
   npm run build
   firebase deploy
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## GitHub Setup

For detailed instructions on setting up the repository on GitHub, see [GITHUB_SETUP.md](GITHUB_SETUP.md).

## Deployment

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Contributing

For contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## Live Demo

🚀 **Try the live demo**: [https://task-management-demo.firebaseapp.com](https://task-management-demo.firebaseapp.com)

### Demo Features
- **Real-time collaboration** - Open in multiple tabs to see live updates
- **Drag & drop** - Move tasks between status columns
- **Team management** - Create teams and invite members
- **User authentication** - Login with Google or email

### Demo Accounts
- **Email**: `demo@example.com` | **Password**: `demo123`
- **Email**: `manager@example.com` | **Password**: `manager123`

For demo setup instructions, see [DEMO_SETUP.md](DEMO_SETUP.md).

## Support

For support, create an issue in the repository or check the documentation.
