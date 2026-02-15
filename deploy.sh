#!/bin/bash
# Deploy blocks app by updating Caddy to serve static files

echo "Building blocks app..."
npm run build

if [ $? -ne 0 ]; then
  echo "Build failed!"
  exit 1
fi

echo ""
echo "Build successful!"
echo ""
echo "To deploy, update your Caddy config to serve static files."
echo "Change this line in /etc/caddy/Caddyfile:"
echo ""
echo "  # Blocks app - 3D block editor"
echo "  handle /blocks* {"
echo "    uri strip_prefix /blocks"
echo "    reverse_proxy localhost:5000    # <-- REMOVE THIS"
echo "  }"
echo ""
echo "To this:"
echo ""
echo "  # Blocks app - 3D block editor"
echo "  handle /blocks* {"
echo "    uri strip_prefix /blocks"
echo "    root * /home/svdk/blocks/LASTBLOCKS/blocks/dist"
echo "    try_files {path} /index.html"
echo "    file_server"
echo "  }"
echo ""
echo "Then reload Caddy:"
echo "  sudo systemctl reload caddy"
