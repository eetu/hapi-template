#!/bin/bash

# Install with devDependencies and build service and purge dev dependencies

# exit bash if any command fails
set -e

export NPM_CONFIG_PRODUCTION=false

npm install --development --no-progress

npm run build

npm prune --production
