"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var marca_1 = require("../entidades/marca");
var MarcaRepositorio = /** @class */ (function () {
    function MarcaRepositorio() {
    }
    MarcaRepositorio.prototype.crearMarca = function (marca) {
        return typeorm_1.getManager().getRepository(marca_1.Marca).save(marca);
    };
    MarcaRepositorio.prototype.obtenerTodasLasMarcas = function () {
        return typeorm_1.getManager().getRepository(marca_1.Marca).createQueryBuilder('marca')
            .select(['marca.id', 'marca.nombre', 'marca.comentario']).getMany();
    };
    MarcaRepositorio.prototype.eliminarMarcaPorId = function (idMarca) {
        return typeorm_1.getManager().getRepository(marca_1.Marca).delete({ id: idMarca });
    };
    return MarcaRepositorio;
}());
exports.MarcaRepositorio = MarcaRepositorio;
