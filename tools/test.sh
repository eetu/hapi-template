#!/bin/bash

# Install dependencies and run linter and tests

# exit bash if any command fails
set -e

source .env.test.sample

npm install --development --no-progress

npm run build

npm run tslint

npm test
