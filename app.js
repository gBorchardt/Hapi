const Hapi = require('hapi');
const dbConnectionString = require('./config/config')();
const mongoose = require('mongoose');

const user = require('./controllers/user');

mongoose.connect(dbConnectionString, { useNewUrlParser: true });

const server = Hapi.server({
    host:'localhost',
    port:8000
});

user(server);

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Feito! Servidor rodando em:', server.info.uri);
};

start();