const Hapi = require('hapi');
const cron = require('cron');
const Inert = require('inert');
//carica tutte le routes di routes.js
var publicApi = require('./publicApi/public.js');

const Path = require('path');
const server = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'frontEnd')
            }
        }
    }
});

server.connection({ port: 8081 });
server.register(Inert, () => {});
server.start((err) => {

    if (err) {
        throw err;
    }

    console.log('Server avviato su:', server.info.uri);
});

server.route(publicApi);
