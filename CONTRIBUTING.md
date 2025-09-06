# Contributing to Task Management App

Thank you for your interest in contributing to the Task Management App! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contributing Guidelines](#contributing-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Development Workflow](#development-workflow)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Set up the development environment
4. Create a new branch for your feature or bugfix

## Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git
- Firebase account (for testing)

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-management-app.git
   cd task-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project
   - Enable Authentication and Firestore
   - Copy your Firebase config to `src/firebase/config.js`

4. **Start development server**
   ```bash
   npm run serve
   ```

## Contributing Guidelines

### What Can I Contribute?

- Bug fixes
- New features
- Documentation improvements
- UI/UX enhancements
- Performance optimizations
- Test coverage improvements

### Code Style

- Follow Vue.js style guide
- Use ESLint configuration provided
- Write meaningful commit messages
- Add comments for complex logic
- Use meaningful variable and function names

### Commit Message Format

Use conventional commits format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Examples:
```
feat(auth): add Google OAuth login
fix(tasks): resolve drag and drop issue
docs(readme): update installation instructions
```

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Add tests if applicable
   - Update documentation if needed

3. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill out the PR template
   - Submit the PR

### Pull Request Template

When creating a PR, please include:

- **Description**: What changes were made and why
- **Type**: Bug fix, feature, documentation, etc.
- **Testing**: How the changes were tested
- **Screenshots**: If UI changes were made
- **Breaking Changes**: Any breaking changes
- **Checklist**: Confirm all requirements are met

## Issue Reporting

### Before Creating an Issue

1. Check existing issues
2. Search for similar problems
3. Ensure you're using the latest version

### Issue Template

When creating an issue, please include:

- **Bug Description**: Clear description of the bug
- **Steps to Reproduce**: Detailed steps to reproduce
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, browser, Node.js version
- **Screenshots**: If applicable
- **Additional Context**: Any other relevant information

## Development Workflow

### Branch Naming

- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `test/description` - Test improvements

### Testing

- Write unit tests for new features
- Test manually in different browsers
- Ensure responsive design works
- Test with different screen sizes

### Code Review Process

1. All PRs require review
2. Address review comments promptly
3. Keep PRs focused and small
4. Respond to feedback constructively

## Project Structure

```
src/
├── components/     # Reusable components
├── views/         # Page components
├── store/         # Vuex store modules
├── router/        # Vue Router configuration
├── firebase/      # Firebase configuration
├── plugins/       # Vue plugins
└── assets/        # Static assets
```

## Getting Help

- Check the documentation
- Search existing issues
- Ask questions in discussions
- Contact maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to the Task Management App! 🎉
