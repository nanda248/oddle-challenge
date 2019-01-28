# Github Crawler by Nan Da

This is a technical assessment requested by Oddle.
Main functionalities of this project is to search Github users using Github API with ease.

## Technology Stack
The project was developed using below libraries and frameworks:
* [ReactJS](https://reactjs.org/) - A Javascript library for building user interfaces
* [Materialize](https://materializecss.com/) - A modern responsive front-end framework based on material design
* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node
* [Redux](https://redux.js.org/) - A predictable state container for Javascript applications
* [React Redux](https://github.com/reduxjs/react-redux) - Official React binding for Redux
* [Redux Thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
* [React Router Dom](https://reacttraining.com/react-router/web/guides/quick-start) - A collection of navigational components that compose declaratively with your application.

### Installation and Setup
The project requires [Node.js](https://nodejs.org/) to run.
Versions during this project development: NodeJS v8.11.4 & npm 6.4.1

Clone the repo:
```
git clone https://github.com/nanda248/oddle-challenge.git
```

Install the dependencies and start the server:

```sh
$ cd oddle-challenge
$ npm install
$ npm start
```
Then the server should be running on http://localhost:3000/

### Peoject Summary
It is a simple POC front-end web app where user search Github users by login name.

**Limitations**
Since the project has no backend and DB, all data will be refreshed to initial state when the page is reloaded. There are no state management library and routers used because it is a single page application with very minimal state manipulation. 

License
----
Copyright of NanDa

