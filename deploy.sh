#!/bin/bash

# Ensure a commit message was provided
if [ -z "$1" ]; then
    echo "Usage: ./deploy.sh \"Your commit message\""
    echo "Example: ./deploy.sh \"Updated resume link\""
    exit 1
fi

echo "🚀 Staging changes..."
git add .

echo "📝 Committing..."
git commit -m "$1"

echo "☁️  Pushing backup to local origin (patemotter/website)..."
git push origin master

echo "🌐 Deploying live to patemotter.github.io..."
git push https://github.com/patemotter/patemotter.github.io.git master:gh-pages --force

echo "✅ Deployment complete! Changes should be live in ~60 seconds."
