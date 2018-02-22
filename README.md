# hapi-template
[![Build Status](https://travis-ci.org/eetu/hapi-template.svg?branch=master)](https://travis-ci.org/eetu/hapi-template)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eetu/hapi-template/tree/master)

## Libraries in use
- Typescript
- Hapi v17
- HapiSwagger
- Jest (for tests)

## Usage

Initialization
1. `docker-compose up -d db`

Development mode
1. `npm install`
1. `npm migrate-db`
1. `npm watch-ts`
1. `npm start-dev` (on another console)

Production mode
1. `npm install`
1. `npm migrate-db`
1. `npm build`
1. `npm start`

Running test
1. `npm test`
or
1. `npm run watch-test`

## Directories

### /db

### /db/migrations

knex created database migrations

### /src

### /src/routes

Hapi route handlers

### /src/controllers

### /src/services

### /src/types

TypeScript type definitions

### /src/util

All utility modules e.g. db clients, logger etc.

### /tools

Helper tools, e.g. build and test runner.
