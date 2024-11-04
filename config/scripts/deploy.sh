#!/bin/bash

# Define variables
REPO_URL="https://github.com/atulwaster24/CG_Improvements"
PROJECT_DIR="$HOME/CG_Improvements"  # Use an absolute path in the home directory
APP_NAME="CG_Improvements"           # PM2 app name
DOMAIN="devs-aimpire.com"            # Your custom domain
CERT_PATH="/etc/letsencrypt/live/www.$DOMAIN"

# Update the system and install Nginx if not installed
sudo apt update
sudo apt install -y nginx

# Install dependencies and build the Next.js project
npm install
npm run build

# Check if the PM2 process with the name $APP_NAME exists and restart or start it
if pm2 describe "$APP_NAME" > /dev/null; then
    pm2 restart "$APP_NAME" --watch
else
    pm2 start npm --name "$APP_NAME" -- start --watch
fi

# Ensure PM2 starts on reboot
pm2 startup -u $USER --hp $HOME
pm2 save

# Configure Nginx for reverse proxy if not already configured
NGINX_CONF="/etc/nginx/sites-available/$DOMAIN"

if [ ! -f "$NGINX_CONF" ]; then
    echo "Creating Nginx configuration for $DOMAIN..."

    # Create Nginx configuration file
    sudo tee $NGINX_CONF > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

    # Enable the Nginx configuration
    sudo ln -s $NGINX_CONF /etc/nginx/sites-enabled/

    # Test Nginx configuration and reload
    sudo nginx -t && sudo systemctl reload nginx
else
    echo "Nginx configuration for $DOMAIN already exists. Skipping Nginx setup."
fi

# Install Certbot if not already installed
if ! command -v certbot &> /dev/null; then
    sudo apt install -y certbot python3-certbot-nginx
fi

# Only request SSL certificate if it doesn't already exist
if [ ! -d "$CERT_PATH" ]; then
    echo "SSL certificate not found. Requesting a new SSL certificate..."
    sudo certbot --nginx -d www.$DOMAIN --expand --non-interactive --agree-tos -m your-email@example.com
else
    echo "SSL certificate already exists. Skipping SSL setup."
fi

# Verify auto-renewal of SSL certificate
sudo certbot renew --dry-run
