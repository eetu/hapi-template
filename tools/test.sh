#!/bin/bash

# Install dependencies and run linter and tests

# exit bash if any command fails
set -e

source .env.test
# override DATABASE_URL inside docker container
export DATABASE_URL=postgres://postgres:postgres@database:5432/test

npm install --development --no-progress

npm run tslint

# run jest with modified DATABASE_URL
./node_modules/.bin/jest
