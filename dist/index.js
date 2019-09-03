"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = __importDefault(require("./server/server"));
var pruebaroute_1 = __importDefault(require("./routes/pruebaroute"));
var typeorm_1 = require("typeorm");
var bodyParser = require("body-parser");
var marca_routes_1 = __importDefault(require("./routes/marca.routes"));
var server = server_1.default.init(3000);
typeorm_1.createConnection({
    type: "mariadb",
    host: "localhost",
    port: 3307,
    username: "root",
    password: "PER46807971s",
    database: "tienda",
    entities: [
        __dirname + "/entidades/*.js"
    ],
    synchronize: true,
}).then(function (con) {
    console.log('Base de datos online');
}).catch(function (err) {
    console.log(err);
});
//bodyparser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
//CORS
server.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST ,PUT ,DELETE ,OPTION ");
    next();
});
//rutas
server.app.use('/prueba', pruebaroute_1.default);
server.app.use('/marca', marca_routes_1.default);
server.start(function () {
    console.log('Servidor corriendo en el puerto 3000');
});
