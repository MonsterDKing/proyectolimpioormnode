import { getManager, DeleteResult, UpdateResult, getConnection } from 'typeorm';
import { Producto } from '../entidades/producto';

export class ProductoRepositorio {
    crearProducto(producto: Producto): Promise<Producto> {
        return getManager().getRepository(Producto).save(producto);
    }

    eliminarProducto(id: string): Promise<DeleteResult> {
        return getManager().getRepository(Producto).delete({ id: id })
    }

    obtenerTodosLosProductos(): Promise<Producto[]> {
        return getManager().getRepository(Producto).createQueryBuilder('p')
            .select(['p.id', 'p.nombre', 'p.almacen']).getMany();
    }

    actualizarProducto(producto: Producto): Promise<UpdateResult> {
        return getManager().getRepository(Producto).update({ id: producto.id }, producto);
    }

    eliminarTodoLosProductos(): Promise<DeleteResult> {
        return getConnection().createQueryBuilder().delete().from(Producto).execute();
    }


}