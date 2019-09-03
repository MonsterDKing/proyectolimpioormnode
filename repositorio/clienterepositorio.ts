import { Cliente } from "../entidades/cliente";
import { getManager, UpdateResult, DeleteResult } from "typeorm";

export class ClienteRepositorio {

    crearCliente(cliente: Cliente): Promise<Cliente> {
        return getManager().getRepository(Cliente).save(cliente);
    }

    obtenerListaClientes(): Promise<Cliente[]> {
        return getManager().getRepository(Cliente).createQueryBuilder('Cliente')
            .select(['Cliente.id', 'Cliente.nombre', 'Cliente.apellido']).getMany();
    }


    obtenerCliente(idcliente: number): Promise<Cliente|undefined> {
        return getManager().getRepository(Cliente).findOne({
            where: {
                id: idcliente
            }
        });
    }

    actualizarCliente(idCliente:string,nuevosDatosCliente:Cliente):Promise<UpdateResult>{
        return getManager().getRepository(Cliente).update({id:idCliente}, nuevosDatosCliente);
    }

    eliminarCliente(idCliente:string):Promise<DeleteResult>{
        return getManager().getRepository(Cliente).delete({id: idCliente})
    }
}