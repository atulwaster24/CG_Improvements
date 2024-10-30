#!/bin/bash

# Change to your project directory
cd /CG_Improvements

# Pull the latest changes
git pull origin main

# Install dependencies
npm install

# Build the Next.js project
npm run build

# Restart the application with PM2
pm2 restart CG_Improvements
