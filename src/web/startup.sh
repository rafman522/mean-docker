#!/bin/bash
echo "Changing DEVICE_API_URL to $DEVICE_API_URL..."
echo "var DEVICE_API_URL = '$DEVICE_API_URL';" > /usr/share/nginx/html/config.js

echo "Running: nginx -g daemon off;" 
nginx -g "daemon off;"