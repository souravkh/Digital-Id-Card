#!/bin/bash

set -e  # Exit immediately on any error

echo "🚀 Setting up Vite + React project..."

# 1. Update npm to latest
echo "📦 Updating npm..."
npm install -g npm@latest

# 2. Install project dependencies if package.json already exists
if [ -f "src/digital-id-card/package.json" ]; then
  echo "📂 package.json found — running npm install..."
  npm install --prefix src/digital-id-card
fi

echo ""
echo "✅ Setup complete!"
echo "👉 Run 'cd src/digital-id-card && npm run dev' to start the development server."
#!/bin/bash

# ─────────────────────────────────────────────
#  Post-create setup: Install Vite + React
# ─────────────────────────────────────────────

set -e  # Exit immediately on any error

echo "🚀 Setting up Vite + React project..."

# 1. Update npm to latest
echo "📦 Updating npm..."
npm install -g npm@latest

# 2. Install project dependencies if package.json already exists
if [ -f "src\id-card\package.json" ]; then
  echo "📂 package.json found — running npm install..."
  npm install
fi

echo ""
echo "✅ Setup complete!"
echo "👉 Run 'npm run dev' to start the development server."
