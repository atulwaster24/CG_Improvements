#!/bin/bash

# Define variables
REPO_URL="https://github.com/atulwaster24/CG_Improvements"
PROJECT_DIR="$HOME/CG_Improvements"  # Use an absolute path in the home directory
APP_NAME="CG_Improvements"  # PM2 app name
DOMAIN="devs-aimpire.com"  # Domain name

sudo apt update
sudo apt install -y nginx

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
fi

# Install Certbot and obtain an SSL certificate with Let's Encrypt (optional)
if ! command -v certbot &> /dev/null; then
    sudo apt install -y certbot python3-certbot-nginx
fi

# Request SSL certificate for the domain
sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos -m atulw.aimpire@gmail.com

# Verify auto-renewal of SSL certificate
sudo certbot renew --dry-run