#!/bin/bash
set -e

# Fix CocoaPods encoding issue
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8

echo "Running Hard2Book on iOS..."
cd mobile

echo "Building web assets..."
npm run build

echo "Syncing to iOS..."
npx cap sync ios

echo "Opening Xcode..."
npx cap open ios

echo "Done! Build and run from Xcode."
