import {Request,Response,Router} from 'express';
import { ProductoRepositorio } from '../repositorio/producto.repositorio';

const productoRoutes = Router();
const productoRepositorio = new ProductoRepositorio();

productoRoutes.delete('/all', async(req:Request,res:Response)=>{
    const estado = await productoRepositorio.eliminarTodoLosProductos();
    res.json({
        ok:true,
        estado
    })
})


export default productoRoutes;