"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var clienterepositorio_1 = require("../repositorio/clienterepositorio");
var ruta = express_1.Router();
var clienteRepo = new clienterepositorio_1.ClienteRepositorio();
ruta.get('/', function (req, res) {
    clienteRepo.obtenerListaClientes().then(function (resultado) { res.send(resultado); });
});
ruta.post('/', function (req, res) {
    clienteRepo.crearCliente(req.body).then(function (resp) {
        res.json({
            ok: true,
            resp: resp
        });
    }).catch(function (err) {
        res.json({
            ok: false,
            err: err
        });
    });
});
ruta.post('/almbum');
exports.default = ruta;
