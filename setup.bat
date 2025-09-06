@echo off
REM Task Management App Setup Script for Windows
REM This script helps set up the project for development and deployment

echo.
echo ==========================================
echo   Task Management App Setup
echo ==========================================
echo.

REM Check if Node.js is installed
echo [INFO] Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed. Please install Node.js 14 or higher.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
    echo [SUCCESS] Node.js is installed: %NODE_VERSION%
)

REM Check if npm is installed
echo [INFO] Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed. Please install npm.
    pause
    exit /b 1
) else (
    for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
    echo [SUCCESS] npm is installed: %NPM_VERSION%
)

REM Install dependencies
echo [INFO] Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo [ERROR] Failed to install dependencies.
    pause
    exit /b 1
) else (
    echo [SUCCESS] Dependencies installed successfully
)

REM Set up Git hooks
echo [INFO] Setting up Git hooks...
if exist ".git" (
    call npx husky install
    echo [SUCCESS] Git hooks set up successfully
) else (
    echo [WARNING] Not a Git repository. Skipping Git hooks setup.
    echo [WARNING] Run 'git init' first if you want to use Git hooks.
)

REM Create environment file
echo [INFO] Creating environment file...
if not exist ".env.local" (
    (
        echo # Firebase Configuration
        echo # Replace with your actual Firebase config values
        echo VUE_APP_FIREBASE_API_KEY=your-api-key
        echo VUE_APP_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
        echo VUE_APP_FIREBASE_PROJECT_ID=your-project-id
        echo VUE_APP_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
        echo VUE_APP_FIREBASE_MESSAGING_SENDER_ID=123456789
        echo VUE_APP_FIREBASE_APP_ID=your-app-id
    ) > .env.local
    echo [SUCCESS] Environment file created: .env.local
    echo [WARNING] Please update .env.local with your actual Firebase configuration
) else (
    echo [WARNING] Environment file already exists: .env.local
)

REM Check Firebase CLI
echo [INFO] Checking Firebase CLI...
firebase --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Firebase CLI is not installed.
    echo [WARNING] Install it with: npm install -g firebase-tools
    echo [WARNING] Then run: firebase login
) else (
    for /f "tokens=*" %%i in ('firebase --version') do set FIREBASE_VERSION=%%i
    echo [SUCCESS] Firebase CLI is installed: %FIREBASE_VERSION%
)

REM Run linting
echo [INFO] Running ESLint...
call npm run lint
if %errorlevel% neq 0 (
    echo [WARNING] Linting found issues. Run 'npm run lint:fix' to fix them.
) else (
    echo [SUCCESS] Linting passed
)

REM Build project
echo [INFO] Building project...
call npm run build
if %errorlevel% neq 0 (
    echo [ERROR] Build failed. Please check the errors above.
    pause
    exit /b 1
) else (
    echo [SUCCESS] Project built successfully
)

echo.
echo ==========================================
echo [SUCCESS] Setup completed successfully!
echo ==========================================
echo.
echo Next steps:
echo 1. Update .env.local with your Firebase configuration
echo 2. Run 'npm run serve' to start the development server
echo 3. Open http://localhost:8080 in your browser
echo.
echo For deployment:
echo 1. Set up your Firebase project
echo 2. Run 'firebase login' and 'firebase init'
echo 3. Run 'npm run firebase:deploy' to deploy
echo.
echo For more information, see README.md and DEPLOYMENT.md
echo.
pause
