#!/bin/bash

# Restore Caddy to use reverse proxy for blocks (the working setup)

echo "Restoring Caddy reverse proxy configuration..."

# Create temp file with the fix
sudo sed -i '/# Blocks app/,/^[[:space:]]*}/c\
\t# Blocks app - 3D block editor\
\thandle /blocks* {\
\t\turi strip_prefix /blocks\
\t\treverse_proxy localhost:5000\
\t}' /etc/caddy/Caddyfile

echo "Reloading Caddy..."
sudo systemctl reload caddy

echo ""
echo "Done! Now run ~/start-blocks.sh to start the server."
