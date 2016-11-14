#!/bin/bash
if [ -z "$DEVICE_API_URL_OVERRIDE"]; then
    echo "Changing DEVICE_API_URL to $DEVICE_API_URL_OVERRIDE..."
    echo "var DEVICE_API_URL = '$DEVICE_API_URL_OVERRIDE';" > /usr/share/nginx/html/config.js
else
    echo "Changing DEVICE_API_URL to $DEVICE_API_URL..."
    echo "var DEVICE_API_URL = '$DEVICE_API_URL';" > /usr/share/nginx/html/config.js
fi


echo "Running: nginx -g daemon off;" 
nginx -g "daemon off;"