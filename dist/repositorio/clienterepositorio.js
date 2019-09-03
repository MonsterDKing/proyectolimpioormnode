"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cliente_1 = require("../entidades/cliente");
var typeorm_1 = require("typeorm");
var ClienteRepositorio = /** @class */ (function () {
    function ClienteRepositorio() {
    }
    ClienteRepositorio.prototype.crearCliente = function (cliente) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).save(cliente);
    };
    ClienteRepositorio.prototype.obtenerListaClientes = function () {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).createQueryBuilder('Cliente')
            .select(['Cliente.id', 'Cliente.nombre', 'Cliente.apellido']).getMany();
    };
    ClienteRepositorio.prototype.obtenerCliente = function (idcliente) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).findOne({
            where: {
                id: idcliente
            }
        });
    };
    ClienteRepositorio.prototype.actualizarCliente = function (idCliente, nuevosDatosCliente) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).update({ id: idCliente }, nuevosDatosCliente);
    };
    ClienteRepositorio.prototype.eliminarCliente = function (idCliente) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).delete({ id: idCliente });
    };
    return ClienteRepositorio;
}());
exports.ClienteRepositorio = ClienteRepositorio;
