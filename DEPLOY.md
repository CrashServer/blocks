# Deploying Blocks to crash01.duckdns.org

## Quick Deploy Process

Whenever you make changes to the code and want them live on crash01.duckdns.org/blocks:

### 1. Run the start script
```bash
~/start-blocks.sh
```

This will:
- Build the latest code (`npm run build`)
- Start the preview server on port 5000
- Make it accessible at https://crash01.duckdns.org/blocks

### 2. Keep it running
The script keeps running and serving your app. Press `Ctrl+C` to stop it.

**To run in background:**
```bash
nohup ~/start-blocks.sh > ~/blocks.log 2>&1 &
```

**To stop background process:**
```bash
pkill -f "vite preview"
```

---

## How It Works

The blocks app uses Vite's preview server running on localhost:5000. Caddy reverse proxies requests from crash01.duckdns.org/blocks to this preview server.

**Architecture:**
```
User → crash01.duckdns.org/blocks → Caddy → localhost:5000 (Vite preview)
```

---

## Development vs Production

**Development (hot reload):**
```bash
cd ~/blocks/LASTBLOCKS/blocks
npm run dev
```
Opens at http://localhost:5173/ with live reload

**Production (deployed):**
```bash
~/start-blocks.sh
```
Rebuilds, then serves at https://crash01.duckdns.org/blocks

---

## Fixed Notification Styles

The notifications are now minimal and match your app's dark aesthetic:
- Dark background: `rgba(0, 0, 0, 0.85)`
- Subtle colored left border instead of bright backgrounds
- Smaller, less intrusive (bottom-right corner)
- 12px font matching your UI
