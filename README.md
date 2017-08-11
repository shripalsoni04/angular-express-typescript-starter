# Angular-Express-Typescript-Starter

A simple starter with frontend using Angular 4+ and API server with NodeJS and Express framework. Typescript is configured for both Frontend and API server.

Frontend is created using angular-cli. So we can use all of the angular-cli commands from `client` folder.

This starter can be used in two different ways:
1. Separate Frontend and API server.
2. Both Frontend and API served through single node server in production.

## Installation
- clone this repository
- `npm run app-install`

## Commands
- `npm run start`: Starts both frontend and API server as separate live reload server. Frontend uses `ng serve` underneath and API server uses `nodemon` for live reload.

- `npm run build`: Creates `dist` folder in both `client` and `server` folders.

- `npm run start:prod`: Builds the `client` and `server` projects and starts it with `NODE_ENV=production`. This by default sets `express.static` to `client/dist` to use this node server to serve frontend also.



