#!/bin/bash

# Install dependencies and run linter and tests

# exit bash if any command fails
set -e

npm install --development --no-progress

npm run tslint

npm test
