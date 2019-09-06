import Server from "./server/server";
import ruta from "./routes/pruebaroute";
import { createConnection } from "typeorm";
import bodyParser = require("body-parser");
import MarcaRouter from "./routes/marca.routes";
import productoRoutes from "./routes/productos.routes";

const server = Server.init(3000);

createConnection({
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
}).then((con: any) => {
    console.log('Base de datos online');
}).catch((err: any) => {
    console.log(err);
})


//bodyparser
server.app.use(bodyParser.urlencoded({ extended: true }))
server.app.use(bodyParser.json());


//CORS
server.app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST ,PUT ,DELETE ,OPTION ")
    next();
  });


//rutas
server.app.use('/prueba', ruta)
server.app.use('/marca',MarcaRouter);
server.app.use('/producto',productoRoutes);

server.start(() => {
    console.log('Servidor corriendo en el puerto 3000');
})