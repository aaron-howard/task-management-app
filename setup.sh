#!/bin/bash

# Task Management App Setup Script
# This script helps set up the project for development and deployment

set -e

echo "🚀 Setting up Task Management App..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
check_node() {
    print_status "Checking Node.js installation..."
    if command -v node &> /dev/null; then
        NODE_VERSION=$(node --version)
        print_success "Node.js is installed: $NODE_VERSION"
        
        # Check if version is >= 14
        NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
        if [ "$NODE_MAJOR_VERSION" -lt 14 ]; then
            print_error "Node.js version 14 or higher is required. Current version: $NODE_VERSION"
            exit 1
        fi
    else
        print_error "Node.js is not installed. Please install Node.js 14 or higher."
        exit 1
    fi
}

# Check if npm is installed
check_npm() {
    print_status "Checking npm installation..."
    if command -v npm &> /dev/null; then
        NPM_VERSION=$(npm --version)
        print_success "npm is installed: $NPM_VERSION"
    else
        print_error "npm is not installed. Please install npm."
        exit 1
    fi
}

# Install dependencies
install_dependencies() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed successfully"
}

# Set up Git hooks
setup_git_hooks() {
    print_status "Setting up Git hooks..."
    if [ -d ".git" ]; then
        npx husky install
        print_success "Git hooks set up successfully"
    else
        print_warning "Not a Git repository. Skipping Git hooks setup."
        print_warning "Run 'git init' first if you want to use Git hooks."
    fi
}

# Create environment file
create_env_file() {
    print_status "Creating environment file..."
    if [ ! -f ".env.local" ]; then
        cat > .env.local << EOF
# Firebase Configuration
# Replace with your actual Firebase config values
VUE_APP_FIREBASE_API_KEY=your-api-key
VUE_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VUE_APP_FIREBASE_PROJECT_ID=your-project-id
VUE_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VUE_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
VUE_APP_FIREBASE_APP_ID=your-app-id
EOF
        print_success "Environment file created: .env.local"
        print_warning "Please update .env.local with your actual Firebase configuration"
    else
        print_warning "Environment file already exists: .env.local"
    fi
}

# Check Firebase CLI
check_firebase_cli() {
    print_status "Checking Firebase CLI..."
    if command -v firebase &> /dev/null; then
        FIREBASE_VERSION=$(firebase --version)
        print_success "Firebase CLI is installed: $FIREBASE_VERSION"
    else
        print_warning "Firebase CLI is not installed."
        print_warning "Install it with: npm install -g firebase-tools"
        print_warning "Then run: firebase login"
    fi
}

# Run linting
run_lint() {
    print_status "Running ESLint..."
    if npm run lint; then
        print_success "Linting passed"
    else
        print_warning "Linting found issues. Run 'npm run lint:fix' to fix them."
    fi
}

# Build project
build_project() {
    print_status "Building project..."
    if npm run build; then
        print_success "Project built successfully"
    else
        print_error "Build failed. Please check the errors above."
        exit 1
    fi
}

# Main setup function
main() {
    echo "=========================================="
    echo "  Task Management App Setup"
    echo "=========================================="
    echo
    
    check_node
    check_npm
    install_dependencies
    setup_git_hooks
    create_env_file
    check_firebase_cli
    run_lint
    build_project
    
    echo
    echo "=========================================="
    print_success "Setup completed successfully!"
    echo "=========================================="
    echo
    echo "Next steps:"
    echo "1. Update .env.local with your Firebase configuration"
    echo "2. Run 'npm run serve' to start the development server"
    echo "3. Open http://localhost:8080 in your browser"
    echo
    echo "For deployment:"
    echo "1. Set up your Firebase project"
    echo "2. Run 'firebase login' and 'firebase init'"
    echo "3. Run 'npm run firebase:deploy' to deploy"
    echo
    echo "For more information, see README.md and DEPLOYMENT.md"
}

# Run main function
main "$@"
