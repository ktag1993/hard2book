#!/bin/bash
set -e

echo "Running Hard2Book on Android..."
cd mobile

echo "Building web assets..."
npm run build

echo "Syncing to Android..."
npx cap sync android

echo "Opening Android Studio..."
npx cap open android

echo "Done! Build and run from Android Studio."
