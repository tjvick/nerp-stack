# NERP Stack

**N**ode

**E**xpress

**R**eact

**P**ostgresql

## Dependencies

This project requires the following dependencies:
- [Docker](https://www.docker.com/products/docker-desktop)
- [Node.js](https://nodejs.org/en/)

## Getting Started

This project contains `client` and `server` directories, treated as individual node packages. 
`client` contains the front-end React application.
`server` contains the back-end Node/Express application.

### `make install`
This will install node packages for the client and server.

### `make up`
This will stand up the full stack locally.

The stack consists of:
- A React application that runs at [http://localhost:3000](http://localhost:3000)
- A node application that runs an express server at [http://localhost:4000](http://localhost:4000)
- A postgresql database running in a docker container at [http://localhost:5432](http://localhost:5432)
