# Changelog

All notable changes to the Task Management App will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Dark mode theme switching with proper styling for all components
- Demo login functionality for easy testing
- Multiple logout options (app bar menu, navigation drawer, profile page)
- Users Vuex module for proper user management
- Date utilities for handling Firestore Timestamps
- Prettier code formatting integration

### Changed
- Login page now supports dark mode with proper text visibility
- Task assignees now display proper names instead of user IDs
- All date fields now show correctly formatted dates (no more "Invalid Date")
- Drag-and-drop now preserves all task data during moves
- Task creation and editing forms now show proper user names in assignee dropdown
- Updated project structure to include utils directory

### Fixed
- Fixed task data loss when dragging tasks between columns
- Fixed "Invalid Date" display in task cards, details, and edit dialogs
- Fixed assignee display showing user IDs instead of names
- Fixed dark mode text visibility on login page
- Fixed logout functionality across the application
- Fixed date formatting for Firestore Timestamps in all components

### Technical Improvements
- Added `src/utils/dateUtils.js` for robust date handling
- Added `src/store/modules/users.js` for user data management
- Updated `UPDATE_TASK` mutation to preserve existing task data
- Enhanced TaskDialog component with proper date conversion
- Improved TaskCard and TaskDetailsDialog with user name display
- Added proper date formatting throughout the application

## [1.0.0] - 2025-01-07

### Added
- Initial release of Task Management App
- Real-time collaboration features
- Drag-and-drop task management
- Team creation and management
- User authentication (email/password and Google OAuth)
- Firebase integration
- Vuetify Material Design UI
- Responsive design
- Toast notifications
- Task filtering and search
- Comment system for tasks

### Technical Stack
- Vue.js 2.6
- Vuetify 2.6
- Vuex 3.6
- Vue Router 3.5
- Firebase (Authentication, Firestore, Hosting)
- Vue Draggable
- Vue Toastification

---

## Development Notes

### Recent Session (2025-01-07 Evening)
This session focused on fixing critical user experience issues:

1. **Dark Mode Implementation**: Added comprehensive dark mode support with proper styling for all components, especially the login page.

2. **User Management**: Implemented proper user data management to display user names instead of IDs throughout the application.

3. **Date Handling**: Created robust date utilities to handle Firestore Timestamps and prevent "Invalid Date" displays.

4. **Data Preservation**: Fixed drag-and-drop functionality to preserve all task data during moves.

5. **Logout Functionality**: Added multiple logout options for better user experience.

6. **Code Quality**: Integrated Prettier for consistent code formatting.

### Key Files Modified
- `src/views/Login.vue` - Dark mode styling and authentication flow
- `src/store/modules/users.js` - New user management module
- `src/utils/dateUtils.js` - New date handling utilities
- `src/store/modules/tasks.js` - Fixed UPDATE_TASK mutation
- `src/components/TaskDialog.vue` - Date formatting and user display
- `src/components/TaskCard.vue` - User name display and date formatting
- `src/components/TaskDetailsDialog.vue` - User name display and date formatting
- `src/App.vue` - Logout functionality and dark mode
- `src/views/Profile.vue` - Logout button addition
- `src/plugins/vuetify.js` - Dark theme configuration

### Deployment
- Application deployed to Firebase Hosting: https://task-management-app-32eee.web.app
- All features tested and working in production environment
