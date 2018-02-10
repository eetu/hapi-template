#!/bin/bash

# Install with devDependencies and build service and purge dev dependencies

# exit bash if any command fails
set -e

npm install --only=dev

npm run build

npm prune --production
