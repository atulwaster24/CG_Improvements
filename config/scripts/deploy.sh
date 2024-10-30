#!/bin/bash

# Define variables
REPO_URL="https://github.com/atulwaster24/CG_Improvements"  # Update with your repository's URL
PROJECT_DIR="/CG_Improvements"  # Update with the project directory path
APP_NAME="CG_Improvements"  # PM2 app name

# Check if the project directory exists
if [ -d "$PROJECT_DIR" ]; then
    echo "Directory exists. Pulling latest changes..."
    cd $PROJECT_DIR
    git pull origin main
else
    echo "Directory does not exist. Cloning repository..."
    git clone $REPO_URL $PROJECT_DIR
    cd $PROJECT_DIR
fi

# Install dependencies
npm install

# Build the Next.js project
npm run build

# Restart the app with PM2
pm2 start npm --name "$APP_NAME" -- start --watch || pm2 restart "$APP_NAME" --watch

