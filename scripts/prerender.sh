#!/bin/bash

# Build the app first
echo "📦 Building application..."
npm run build

# Start preview server in background
echo "🚀 Starting preview server..."
vite preview --host --port 4173 &
PREVIEW_PID=$!

# Wait for server to be ready
echo "⏳ Waiting for server to start..."
sleep 5

# Run prerender script
echo "🔄 Running prerender..."
node scripts/prerender.js

# Kill preview server
echo "🛑 Stopping preview server..."
kill $PREVIEW_PID

echo "✅ SSG build complete!"


