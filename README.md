# hapi-template
[![Build Status](https://travis-ci.org/eetu/hapi-template.svg?branch=master)](https://travis-ci.org/eetu/hapi-template)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/eetu/hapi-template/tree/master)

## Libraries in use
- Typescript
- Hapi v17
- HapiSwagger
- Jest (for tests)

## Usage

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

## Directories

### /db

### /db/migrations

### /src

### /src/routes

### /src/controllers

### /src/services

### /src/types

### /src/util
