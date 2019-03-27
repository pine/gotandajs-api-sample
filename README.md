gotandajs-api-sample
--------------------

[![Greenkeeper badge](https://badges.greenkeeper.io/pine/gotandajs-api-sample.svg)](https://greenkeeper.io/)

Gotanda.js sample API server.

## Requirements

- Node `$(cat .node-version)`
- Yarn
- MySQL 5.7

## Getting Started

```
$ yarn
$ yarn setup
$ yarn seed
$ yarn start
```

And, please open on your browser:

- http://localhost:8080/healthcheck
- http://localhost:8080/events

## Daemonize
Gotanda.js sample API server supports graceful restart with PM2.

```
$ npm i pm2 -g
$ pm2 reload config/pm2.config.js --env production -x
$ pm2 logs
```

## License

MIT &copy; Pine Mizune
