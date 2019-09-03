import { getManager, UpdateResult, DeleteResult } from "typeorm";
import { Marca } from "../entidades/marca";


export class MarcaRepositorio{
    crearMarca(marca:Marca):Promise<Marca>{
        return getManager().getRepository(Marca).save(marca);
    }

    obtenerTodasLasMarcas():Promise<Marca[]>{
        return getManager().getRepository(Marca).createQueryBuilder('marca')
        .select(['marca.id','marca.nombre','marca.comentario']).getMany();
    }

    eliminarMarcaPorId(idMarca:string):Promise<DeleteResult>{
        return getManager().getRepository(Marca).delete({id:idMarca})
    }
}