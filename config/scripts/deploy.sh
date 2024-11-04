#!/bin/bash

# Define variables
REPO_URL="https://github.com/atulwaster24/CG_Improvements"
PROJECT_DIR="$HOME/CG_Improvements"  # Use an absolute path in the home directory
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

# Check if the PM2 process with the name $APP_NAME exists
if pm2 describe "$APP_NAME" > /dev/null; then
    # If the process exists, restart it
    pm2 restart "$APP_NAME" --watch
else
    # If the process doesn't exist, start it
    pm2 start npm --name "$APP_NAME" -- start --watch
fi

# Ensure PM2 starts on reboot
pm2 startup -u $USER --hp $HOME
pm2 save
